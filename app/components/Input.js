"use client"
import { useState } from "react";
export default function Input(props) {

  const childData = props.value ? props.value : ''
  const [data, setData] = useState(childData);
  const handleInputChange = (e) => {
    setData(e.target.value)
    props.onDataChange(e.target.value, props.id);
  }
  return (
    <input className="bg-input h-[45px] w-full rounded-[10px] px-[10px] " 
        type={props.type} placeholder={props.placeholder}
        onChange={handleInputChange}
        value={data}
    />
  );
}
