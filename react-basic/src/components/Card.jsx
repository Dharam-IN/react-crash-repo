import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, refrence}) {
  return (
    <>
        <motion.div drag whileDrag={{scale: 1.2}} dragConstraints={refrence} className="relative flex-shrink-0 w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden">
            <FaFileAlt/>
            <p className='text-sm mt-4 font-semibold'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className='flex items-center p-3 justify-between'>
                    <h5>{data.filesize}</h5>
                    <span>
                        {data.close ? <IoMdCloseCircleOutline/> : <MdOutlineFileDownload/>}
                    </span>
                </div>
                {
                    data.tag.isOpen && (
                        <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    </>
  )
}

export default Card