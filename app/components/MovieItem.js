"use client"
import Img from "/app/image/movie.png";
import { useRouter } from "next/navigation";

export default function MovieItem() {
  const router = useRouter();
  return (
    <div className=" cursor-pointer sm:w-[282px] sm:h-[504px] w-[180px] h-[334px]  py-2 px-2 bg-card rounded-xl flex flex-col"
      onClick={()=>{router.push('/Movie/EditMovie')}}
    >
      <img src={Img.src} alt="movie" className="rounded-xl " />
      <div className="flex flex-col p-4 gap-2 items-start justify-start text-white">
        <span className="text-xl"> Movie 1</span>
        <span className="text-xs">2021</span>
      </div>
    </div>
  );
}
