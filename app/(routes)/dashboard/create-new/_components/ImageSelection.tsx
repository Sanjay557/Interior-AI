"use client"

import Image from 'next/image'
import React, { useState } from 'react'

type ImageSelectionProps = {
  selectedImage: (file : File) => void
}

function ImageSelection({selectedImage}: any) {

  const [file, setFile] = useState<File | null>(null)

  const onFileSelected = (event:any) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0])
    selectedImage(event.target.files[0])
  }

  return (
    <div>
      <label>Select Image of your room</label>
      <div className='mt-3'>
        <label htmlFor='upload-image'>
          <div className={`border rounded-xl 
            border-dotted flex justify-center border-purple-500
             bg-slate-200 cursor-pointer hover:shadow-lg
             ${file? 'p-0 bg-white': 'p-28' }
             `}>
            {!file ? 
            <Image src={'/star.png'} width={70} height={70} alt="upload image"/>
              :
            <Image src={URL.createObjectURL(file)} width={300} height={300} 
            alt='chosen Image' className='w-[300px] h-[300px] object-cover'/>
          }
          </div>
        </label>
        <input type='file' accept='image/*' 
        id='upload-image' 
        style={{display: 'none'}}
        onChange={onFileSelected}/>
      </div>
    </div>
  )
}

export default ImageSelection
