"use client"
import AddButton from "../components/AddMovieButton"
import { useRouter } from "next/navigation"

export default function movie() {

    const router = useRouter();

    return (
        <div className="bg-back h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col text-white gap-10 justify-center items-center ">
                <span className="text-5xl md:px-0 px-20 text-center font-bold">Your movie list is empty</span>
                <AddButton onClick={()=>{router.push('/Movie/CreateMovie')}} />
            </div>
         
           
        </div>
    )
}