import React from 'react';

const LoadingScreen = ({ size = 'medium' }) => {
  const widthAndHeight: { [key: string]: string } = {
    small: 'h-6 w-6',
    medium: 'h-8 w-8',
  };
  return (
    <div className="flex items-center justify-center w-full h-full text-4xl">
      <div
        className={
          widthAndHeight[size] +
          ' inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
        }
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default LoadingScreen;
