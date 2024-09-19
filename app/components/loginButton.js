"use client";
import { useRouter } from "next/navigation";
export default function LoginButton(props){

    const router = useRouter();
    return(
       
        <button
            type="button"
            className="bg-primary w-full  h-[54px] rounded-[10px] font-bold text-[16px]"
            onClick={()=>{router.push(props.url)}}
          >
            Login
          </button>
   
    )
   
}