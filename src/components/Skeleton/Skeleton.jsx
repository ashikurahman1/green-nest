import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className=" w-full h-48 lg:h-56 skeleton"></div>
      <div className="space-y-3">
        <h3 className="h-8 w-full skeleton"></h3>
        <p className="h-4 w-full skeleton"></p>
        <p className="h-3 w-full skeleton"></p>
        <button className="h-8 w-full skeleton"></button>
      </div>
    </div>
  );
};

export default Skeleton;
