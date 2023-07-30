import React from "react";

export const Presentation = ({
  name,
  title,
  description,
}: {
  name: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex text-accent/90 flex-col gap-y-4 items-center px-4 ">
      <h1 className="font-semibold text-2xl capitalize">{name}</h1>
      <h2 className="font-medium text-xl capitalize max-w-xs md:max-w-full md:tracking-wide text-center">
        {title}
      </h2>
      <p className="font-normal text-base md:tracking-tight max-w-sm md:max-w-full text-center">
        {description}
      </p>
      <div className="flex text-white justify-between gap-x-12 mt-4">
        <button className="btn tracking-wide font-normal text-white btn-primary capitalize">
          my resume
        </button>
        <button className="btn btn-outline font-normal btn-secondary">
          hire me
        </button>
      </div>
    </div>
  );
};
