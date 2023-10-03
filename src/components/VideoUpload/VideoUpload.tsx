import React from 'react';

const VideoUploadPage = () => {
  const onSubmit = async () => {};

  return (
    <div className="flex items-start justify-center w-full p-12 overflow-y-auto">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form className="py-6 px-9" onSubmit={onSubmit}>
          <div className="pt-4 mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-xl font-semibold text-[#07074D]"
            >
              Title
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Title"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md"
            />
          </div>

          <div className="flex ">
            <div className="w-1/2 pt-4 mb-5">
              <label className="mb-3 block text-xl font-semibold text-[#07074D]">
                Public or Private
              </label>
              <div className="flex items-center mt-6 space-x-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="radio1"
                    id="radioButton1"
                    className="w-5 h-5"
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
                    name="radio1"
                    id="radioButton2"
                    className="w-5 h-5"
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
              <select className="bg-[url('/ico_arrow_down.svg')] bg-[right_10px_top_50%] bg-no-repeat w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md appearance-none cursor-pointer">
                <option value="">Value</option>
                <option value="Home & Furniture">Home & Furniture</option>
                <option value="Living & Fun">Living & Fun</option>
                <option value="Movie & Trailer">Movie & Trailer</option>
                <option value="Kids & Family">Kids & Family</option>
                <option value="Etc">Etc</option>
              </select>
            </div>
          </div>

          <div className="pt-4 mb-5">
            <label className="mb-3 block text-xl font-semibold text-[#07074D]">
              Video
            </label>

            <div className="mb-6">
              <input type="file" name="file" id="file" className="sr-only" />
              <label
                htmlFor="file"
                className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
              >
                <div>
                  <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                    Drop files here
                  </span>
                  <span className="mb-2 block text-base font-medium text-[#6B7280]">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D] hover:border-rose-300 cursor-pointer">
                    Browse
                  </span>
                </div>
              </label>
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

            <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
              <div className="flex items-center justify-between">
                <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                  banner-design.mp4
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
              {/* <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                <div className="absolute left-0 right-0 h-full w-[75%] rounded-lg bg-rose-500"></div>
              </div> */}
            </div>
          </div>

          <div className="pt-4 mb-5">
            <label
              htmlFor="description"
              className="mb-3 block text-xl font-semibold text-[#07074D]"
            >
              Description
            </label>
            <textarea
              rows={6}
              maxLength={200}
              name="description"
              id="description"
              placeholder="Please enter a description for your video"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-rose-400 focus:shadow-md resize-none"
            />
          </div>

          <div className="pt-6">
            <button className="w-full px-8 py-3 text-base font-semibold text-center text-white bg-red-500 rounded-md outline-none hover:shadow-form">
              Send File
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoUploadPage;
