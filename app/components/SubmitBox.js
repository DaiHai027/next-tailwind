"use client"
import { useRouter } from "next/navigation";
export default function SubmitBox(props) {
    const url = props.type == 'create' ? "/Movie" : "MovieList"
    const router = useRouter()
  return (
    <div className="w-full h-auto flex flex-row items-center justify-center gap-4 mt-5">
      <button className="border border-white w-1/2 h-14 rounded-[10px]"
        onClick={()=>{router.push(url)}}
      >
        Cancel
      </button>
      <button className="bg-primary w-1/2 h-14 rounded-[10px]" onClick={()=>{router.push('/Movie/MovieList')}}>Submit</button>
    </div>
  );
}
