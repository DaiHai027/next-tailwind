"use client";

import LoginButton from "./components/loginButton";
import Input from "./components/Input";
import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleChangeData = (data, id) =>{

    console.log(data)
    console.log(id)
    switch (id) {
      case 'email':
        setEmail(data)
        break;
      case 'password':
        setPassword(data)
      default:
        break;
    }
  }
  return (
    <div className="bg-back w-full h-screen flex justify-center items-center flex-col min-w-[428px]  ">
      <div className="w-[300px] h-[360px] text-white  flex flex-col justify-center items-center font-">
        <p className="text-[64px] mb-[40px] font-bold">Sing in</p>
        <div className="flex flex-col justify-center items-center gap-[24px] w-full">
         <Input type="text" placeholder="Email" id="email" value={email} onDataChange={handleChangeData} />
         <Input type="password" id="password" placeholder="Password" value={password} onDataChange={handleChangeData} />
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
