"use client";
import Input from "@/app/components/Input";
import SubmitBox from "@/app/components/SubmitBox";
import Icon from "/app/image/icon.png";
import { useState } from "react";
export default function CreateMovie() {
  
  const [imageSrc, setImageSrc] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result); // Set the image source to the uploaded file data
      };
      reader.readAsDataURL(file);
    }
  };
  const triggerFileInput = () => {
    document.getElementById('file-input').click(); // Simulate file input click
  };

  return (
    <div className="w-screen h-screen  bg-back  text-white  ">
      <div className="flex flex-col ">
        <h1 className="text-5xl font-bold lg:py-32 lg:px-32 md:py-20 md:px-6 px-6 py-20">
          Create a new movie
        </h1>
        <div className="block lg:hidden">
          <div className="flex flex-col px-6 gap-6 justify-center items-center">
            <Input width="full" type="text" placeholder="Title" />
            <Input width="full" type="text" placeholder="Publishing year" />
            <div
              type="file"
              className="cursor-pointer flex flex-col items-center justify-center gap-2 w-full h-[372px] bg-input mx-120 border border-dotted border-white rounded-[10px]"
              onClick={triggerFileInput}
            >

          {imageSrc ? (
                    <img src={imageSrc} alt="Uploaded" className="w-full h-full" />
                  ) : (
                    <>
                      <img src={Icon.src} alt="icon" className="w-5 h-5" />
                      <span className="text-[14px]">Drop an image here</span>
                     </>
                   
                  )}
             
              <input
                type="file"
                id="file-input"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <SubmitBox />
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-row  px-32 ">
            <div
              type="file"
              className="cursor-pointer flex flex-col items-center justify-center gap-2 w-1/2 h-[504px] bg-input mx-120 border border-dotted border-white rounded-[10px]"
              onClick={triggerFileInput}
            >
              {imageSrc ? (
                    <img src={imageSrc} alt="Uploaded" className="w-full h-full" />
                  ) : (
                    <>
                      <img src={Icon.src} alt="icon" className="w-5 h-5" />
                      <span className="text-[14px]">Drop an image here</span>
                     </>
                   
                  )}
               <input
                type="file"
                id="file-input"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>
            <div className="flex flex-col justify-start items-start w-1/2 pl-32 ">
              <div className="w-96 flex flex-col gap-4">
                <Input width="full" type="text" placeholder="Title" />
                <input
                  type="text"
                  placeholder="Publishing year"
                  className="bg-input h-[45px] w-[216px] rounded-[10px] px-[10px]"
                />
                <SubmitBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
