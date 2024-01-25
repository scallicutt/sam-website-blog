import React from "react";

export default function Gallery() {
  return (
    <div
      style={{ fontFamily: '"warnock-pro", serif' }}
      className="flex flex-col justify-center items-center"
    >
      <div className="my-4">
        <h1
          style={{ fontFamily: '"beloved-sans", sans-serif' }}
          className="text-7xl font-normal"
        >
          Gallery
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src="https://via.placeholder.com/400x600"
              alt="Placeholder"
              className="max-w-full max-h-full" // ensures image scales down if it's too large
            />
          </div>
        ))}
      </div>
    </div>
  );
}
