import { ArrowUpRight } from "lucide-react";
import "./Btn.css";

export default function Btn(props: { name: string }) {
  return (
    <button className="adventure-button">
      {props.name}
      <span className="icon-circle">
        <ArrowUpRight color="white" strokeWidth={2.5} size={24} />
      </span>
    </button>
  );
}