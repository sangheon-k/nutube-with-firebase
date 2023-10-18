import React, { useState } from 'react';

const PostCommentBox = () => {
  const [comment, setComment] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };
  return (
    <div className="relative mt-6">
      <textarea
        rows={4}
        value={comment}
        onChange={onChange}
        placeholder="Please enter a comment"
        className="w-full px-4 py-2 text-base font-normal border rounded-lg outline-none resize-none focus:border-gray-400"
      />
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-[14px] bottom-[20px] cursor-pointer"
      >
        <path d="M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"></path>
      </svg>
    </div>
  );
};

export default PostCommentBox;
