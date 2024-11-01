import { useRef } from "react";
import Card from "./Card";

const CardData = [
  {
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis",
    fileSize: "10mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
  },
  {
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis",
    fileSize: "2mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
  },
  {
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis",
    fileSize: "3mb",
    close: false,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
  },
  {
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit perspiciatis",
    fileSize: "23mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
  },
];

export default function ForeGorund() {
  const ref=useRef(null);
  return (
    <div ref={ref} className="w-full flex flex-wrap p-5 gap-5 h-full bg-transparent z-[3] fixed top-0 left-0">
      {CardData.map((data, index) => (
        <Card data={data} key={index} reference={ref}/>
      ))}
    </div>
  );
}
