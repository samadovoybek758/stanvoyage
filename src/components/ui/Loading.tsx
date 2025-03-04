import React from "react";

const Loading = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={` bg-gray-200 animate-pulse ${className}`}
    ></div>
  );
};

export default Loading;
