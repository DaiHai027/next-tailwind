"use client";

import LoginButton from "./components/loginButton";
import Input from "./components/Input";



export default function Home() {

  return (
    <div className="bg-back w-full h-screen flex justify-center items-center flex-col min-w-[428px]  ">
      <div className="w-[300px] h-[360px] text-white  flex flex-col justify-center items-center font-">
        <p className="text-[64px] mb-[40px] font-bold">Sing in</p>
        <div className="flex flex-col justify-center items-center gap-[24px] w-full">
         <Input type="text" placeholder="Email" />
         <Input type="password" placeholder="Password" />
          <div className="flex flex-row">
            <input className="bg-input" type="checkbox" />{" "}
            <label className="mx-2 text-[14px]">Remember me</label>
          </div>
         
          <LoginButton url="Movie" /> 
        </div>
      </div>
    </div>
  );
}
