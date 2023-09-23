import React from "react";
import Image from "next/image";

function Images() {
  return (
    <div className=" flex flex-row justify-center items-center p-2">
      <div className="mb-4">
        <Image alt="image" width={200} height={300} src="/old-rugs/1.jfif" />
      </div>
      <div className="mb-4 ml-4">
        <Image alt="image" width={200} height={300} src="/old-rugs/2.jfif" />
      </div>
      <div className="mb-4 ml-4">
        <Image alt="image" width={200} height={300} src="/old-rugs/3.jfif" />
      </div>
      <div className="mb-4 ml-4">
        <Image alt="image" width={200} height={300} src="/old-rugs/4.jpg" />
      </div>
    </div>
  );
}

export default Images;
