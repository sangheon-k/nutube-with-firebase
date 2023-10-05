import React, { SetStateAction, useEffect, useRef, useState } from 'react';

interface Props {
  videoEl: HTMLVideoElement;
  videoUrl: string;
  setThumbImg: React.Dispatch<SetStateAction<File | null>>;
}

const VideoThumb = ({ videoEl, videoUrl, setThumbImg }: Props) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null); //캔버스 컨텍스트를 useState로 상태관리

  const generateThumbnail = async (canvas: HTMLCanvasElement, context: any) => {
    // Canvas 사이즈 조절 - 16:9<['640*360','480*270','320*180']>
    canvas.width = 480;
    canvas.height = 270;
    videoEl.currentTime = Math.random() * videoEl.duration; // 랜덤 시간 추출
    const hRatio = (canvas.width / videoEl.videoWidth) * videoEl.videoHeight; // 높이 비례 크기 변경
    context.drawImage(videoEl, 0, 0, canvas.width, hRatio); // 캔버스에 이미지 그리기

    videoEl.currentTime = 0; // 비디오 시간 초기화
    const dataURI = canvas.toDataURL('image/jpeg');

    const file = dataURLtoFile(dataURI, `${+new Date()}.jpeg`);
    setThumbImg(file);
  };

  const dataURLtoFile = (dataUrl: string, filename: string) => {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)![1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  };

  useEffect(() => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement;
    const context = canvas.getContext('2d');
    setTimeout(() => generateThumbnail(canvas, context), 500);
    setCtx(context);
  }, []);

  return (
    <div className=" w-fit rounded-md border border-dashed border-[#e0e0e0]">
      <canvas ref={canvasRef}> </canvas>
    </div>
  );
};

export default VideoThumb;
