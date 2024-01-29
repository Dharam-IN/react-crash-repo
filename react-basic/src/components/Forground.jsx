import React, { useRef } from 'react'
import Card from './Card'

function Forground() {

    const ref = useRef(null)

    const data = [
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.6mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green"}
    },
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.6mb",
        close: true,
        tag: {isOpen: false, tagTitle: "Download Now", tagColor: "blue"}
    },
    {
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        filesize: "0.6mb",
        close: true,
        tag: {isOpen: true, tagTitle: "Upload", tagColor: "blue"}
    }
]

  return (
    <>
        <div ref={ref} className="fixed top-0 left-0 w-full h-full bg-sky-800/50 z-[3] p-5 flex gap-10 flex-wrap">
            {data.map((item, index)=>(
                <Card data={item} refrence={ref}/>
            ))}
        </div>
    </>
  )
}

export default Forground