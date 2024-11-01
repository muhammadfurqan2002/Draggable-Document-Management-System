/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="relative flex-shrink-0 w-60 h-64 rounded-[30px] text-white px-8 py-10 bg-zinc-500 overflow-hidden"
    >
      <FaRegFileAlt className="" />
      <p className="text-sm leading-tight mt-5 text-justify font-semibold">
        {data.desc}
      </p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex items-center justify-between py-3 px-8 w-full mb-0">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-600 rounded-full items-center justify-center flex">
            {data.close ? (
              <IoClose size={".8em"} color="#fff" />
            ) : (
              <FiDownload size={".8em"} color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full py-4 ${
              data.tag.tagTitle && "bg-blue-600"
            } flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
