import React, { useEffect, useRef, useState } from 'react';
import * as Form from '@/components/Form';
import { FieldValues, useForm } from 'react-hook-form';
import VideoThumb from '../VideoThumb';
import { auth, db, storage } from '../../../firebase';
import { useRouter } from 'next/router';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const defaultValues = {
  privacy: '0',
  category: '0',
  description: '',
};

const VideoUploadPage = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const videoRef = useRef(null);

  const [file, setFile] = useState<File | null>(null);
  const [thumbImg, setThumbImg] = useState<File | null>(null);
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const maxSize = 10 * 1024 * 1024;
    if (files && files.length === 1) {
      if (files[0].size > maxSize) {
        alert('첨부파일은 10MB 미만의 파일만 업로드 가능합니다.');
        setFile(null);
        return;
      }
      setVideoUrl(URL.createObjectURL(files[0]));
      setFile(files[0]);
      e.target.value = '';
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (!file || !thumbImg || !videoEl) {
      alert('영상을 업로드해주세요!');
      return;
    }

    try {
      setLoading(true);
      const { title, description, privacy, category } = data;
      const videosCollection = collection(db, 'videos');
      const doc = await addDoc(videosCollection, {
        views: 0,
        writer: user?.displayName,
        writerId: user?.uid,
        title,
        description,
        privacy,
        category,
        duration: videoEl.duration,
        filePath: '',
        thumbnail: '',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      const fileRef = await ref(storage, `videos/${doc.id}/${doc.id}`);
      const fileResult = await uploadBytes(fileRef, file);
      const fileUrl = await getDownloadURL(fileResult.ref);

      const thumbRef = await ref(storage, `videos/${doc.id}/thumb-${doc.id}`);
      const thumbResult = await uploadBytes(thumbRef, thumbImg);
      const thumbUrl = await getDownloadURL(thumbResult.ref);

      await updateDoc(doc, { filePath: fileUrl, thumbnail: thumbUrl });

      setLoading(true);
      alert('비디오가 업로드 되었습니다!');
      router.push(`/video/${doc.id}`);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (!user) router.push('/');
    setVideoEl(videoRef.current);
  }, [file]);

  return (
    <div className="flex items-start justify-center w-full p-12 overflow-y-auto">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form className="py-6 px-9" onSubmit={handleSubmit(onSubmit)}>
          <Form.Input
            label="Title"
            id="title"
            placeholder="Title"
            register={register}
            required={true}
          />

          <div className="flex ">
            <div className="w-1/2 pt-4 mb-5">
              <label className="mb-3 block text-xl font-semibold text-[#07074D]">
                Public or Private
              </label>
              <div className="flex items-center mt-6 space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="radioButton1"
                    className="w-5 h-5"
                    {...register('privacy', { required: '' })}
                    value="0"
                  />
                  <label
                    htmlFor="radioButton1"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Public
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="radioButton2"
                    className="w-5 h-5"
                    {...register('privacy', { required: '' })}
                    value="1"
                  />
                  <label
                    htmlFor="radioButton2"
                    className="pl-3 text-base font-medium text-[#07074D]"
                  >
                    Private
                  </label>
                </div>
              </div>
            </div>

            <div className="w-1/2 pt-4 mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-xl font-semibold text-[#07074D]"
              >
                Category
              </label>
              <select
                {...register('category')}
                className="bg-[url('/ico_arrow_down.svg')] bg-[right_10px_top_50%] bg-no-repeat w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md appearance-none cursor-pointer"
              >
                <option value={0}>None</option>
                <option value={1}>Home & Furniture</option>
                <option value={2}>Living & Fun</option>
                <option value={3}>Movie & Trailer</option>
                <option value={4}>Kids & Family</option>
                <option value={5}>Etc</option>
              </select>
            </div>
          </div>

          {videoEl ? (
            <div>
              <label className="mb-3 block text-xl font-semibold text-[#07074D]">
                Thumbnail
              </label>
              <VideoThumb
                videoEl={videoEl}
                videoUrl={videoUrl}
                setThumbImg={setThumbImg}
              />
            </div>
          ) : null}

          {/* 
          {videoRef.current && videoUrl ? (
            <div>
              <VideoThumb video={videoRef.current} videoUrl={videoUrl} />
            </div>
          ) : null} */}

          <div className="pt-4 mb-5">
            <label className="mb-3 block text-xl font-semibold text-[#07074D]">
              Video
            </label>

            <div className="mb-6">
              <input
                type="file"
                name="file"
                id="file"
                className="sr-only"
                onChange={onFileChange}
                accept="video/mp4,video/mpeg, video/mov,video/*"
              />
              <div className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] text-center">
                {file ? (
                  <video
                    src={videoUrl}
                    controls
                    ref={videoRef}
                    className="max-w-[480] max-h-[270]"
                  />
                ) : (
                  <div className="p-12">
                    <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-[#6B7280]">
                      Or
                    </span>
                    <label
                      htmlFor="file"
                      className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] hover:border-rose-300 cursor-pointer"
                    >
                      Browse
                    </label>
                  </div>
                )}
              </div>
              <p className="mt-2 ml-1 text-sm text-gray-400 ">
                Nutube supports MP4, MPEG, MOV extension files under 10MB.
              </p>
            </div>

            {/* <div className="pt-4 mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
              <div className="flex items-center justify-between">
                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                  banner-design.png
                </span>
                <button className="text-[#07074D]">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                      fill="currentColor"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div> */}

            {file ? (
              <div className="rounded-md bg-[#F5F7FB] py-4 px-8 pr-6">
                <div className="flex items-center justify-between">
                  <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                    {file.name}
                  </span>
                  <button
                    onClick={() => setFile(null)}
                    className="flex items-center justify-center w-5 h-5 text-[#07074D]"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>
                {/* <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-rose-500"></div>
              </div> */}
              </div>
            ) : null}
          </div>

          <Form.TextArea
            label="Description"
            id="description"
            placeholder="Please enter a description for your video"
            register={register}
          />

          <div className="pt-6">
            <button className="w-full px-8 py-3 text-base font-semibold text-center text-white bg-red-500 rounded-md outline-none hover:shadow-form">
              {isLoading ? <LoadingScreen size="small" /> : 'Upload Now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoUploadPage;
