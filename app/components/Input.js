export default function Input(props) {
  return (
    <input className="bg-input h-[45px] w-full rounded-[10px] px-[10px]" 
        type={props.type} placeholder={props.placeholder}
    />
  );
}
