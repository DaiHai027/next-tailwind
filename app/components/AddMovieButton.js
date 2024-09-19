export default function AddButton(props) {
  return (
    <button className="bg-primary h-14 w-[202px] rounded-[10px] font-bold"
        onClick={props.onClick}
    >
      Add a new movie
    </button>
  );
}
