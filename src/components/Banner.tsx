import * as React from "react";

export interface BannerProps {
  title: string
};

const Banner = (props: BannerProps) => {
  return (
    <>
      <div className="bg-red-900 text-5xl font-bold text-white p-10 flex items-center justify-center flex-row space-x-20 w-full">
        <div className="flex-col space-y-10 text-center">
          {props.title}
        </div>
      </div>
    </>
  );
};

export default Banner;