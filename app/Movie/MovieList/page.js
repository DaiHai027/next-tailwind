"use client"
import AddButton from "@/app/components/AddMovieButton";
import { useRouter } from "next/navigation"
import MovieItem from "/app/components/MovieItem";
import Icon from '/app/image/Group 24.png'
import LogoutImg from '/app/image/logout.png'

export default function movie() {

    const router = useRouter();

    return (
        <div className="bg-back flex flex-col  items-center justify-center gap-32 py-32  snap-y   w-full">
            <div className="max-w-[1200px]">
                <div className="text-white flex flex-row ">
                    <div className="flex flex-row gap-1" >
                        <h2 className="text-5xl">My movies</h2> 
                        <img src={Icon.src} alt="plus" className=" w-8 h-8 mt-3" />
                    </div>
                    <div className="flex grow"></div>
                    <button className="flex flex-row gap-2 my-3  ">
                        <span className="text-xl sm:hidden  md:hidden lg:block" onClick={()=>{router.push('/')}}>Logout</span>
                        <img src={LogoutImg.src} alt="logout" className="w-6 h-6"  onClick={()=>{router.push('/')}}/>
                    </button>
                </div>
            
                <div className="grid lg:grid-cols-4 md:grid-cols-3  items-center gap-6 justify-center py-32 sm:grid-cols-2">
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                    <MovieItem />
                </div>
                <div>
                <nav className="flex flex-row items-center justify-center gap-4">
                        <button className="text-white font-bold">Prev</button>
                        <button className="bg-card w-8 h-8 rounded-md">1</button>
                        <button className="bg-primary w-8 h-8 rounded-md">2</button>
                        <button className="text-white font-bold" >Next</button>
                </nav>
                </div>
            </div>
           
        </div>
    )
}