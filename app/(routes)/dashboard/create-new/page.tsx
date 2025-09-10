"use client"

import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import ImageKit from "imagekit"


const imagekit = new ImageKit({
  //@ts-ignore
  publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  //@ts-ignore
  privateKey:process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
  //@ts-ignore
  urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT
})


function CreateNew() {

  const [formData, setFormData] = useState<any>({})

  const onHandleInputChange = (value : any, fieldName: string) => {
    setFormData((prev:any) => ({
      ...prev,
      [fieldName] : value
    }))

    console.log(formData)
    //1:46:38
    //The problem is Firebase storage isn't free and I have to pay money to use it.
    //Wants a payment of Rs.1000 to use it.

    //In youtube Tutorial ImageKit topic started around 1:30:00 Hour

  }

  const GenerateAiImage = async() => {
    const rawImageUrl = await SaveRawImagetoImagekit()
    // const result = await axios.post('/api/redesign-room', formData)
    // console.log(result)
    console.log(rawImageUrl)
  }

  const SaveRawImagetoImagekit= async() => {
    //Save Image to Imagekit
    const fileName = Date.now()+ "_raw.png"

    const refImageUrl = await imagekit.upload({
      //@ts-ignore
      file: formData.image,
      fileName: fileName,

    })

    console.log("✅ Upload success:", refImageUrl);
    return refImageUrl.thumbnailUrl


  }

  return (
    <div>
      <h2 className='font-bold text-4xl text-purple-600 text-center'>Experience the Magic of AI Remodeling</h2>
      <p className='text-center text-gray-400'>Transform any room with a click. Select the space, choose a style, and watch as AI instantly reimagines your environment </p>

      <div className='grid grid-cols-1 md:grid-cols-2 
      mt-10 gap-10'>
        <ImageSelection selectedImage={(value:any) => onHandleInputChange(value, 'image')}/>
          <div>
            {/* Room Type */}
            <RoomType selectedRoomType={(value:any) => onHandleInputChange(value, 'roomType')} />
            
            {/* Design Type */}
            <DesignType selectedDesignType={(value: any) => onHandleInputChange(value, 'designType')}/>

            {/* Additional requirement text area(optional) */}
            <AdditionalReq additionalRequirementInput={(value:any) => onHandleInputChange(value, 'additionalReq')}/>

            {/* Button to generate Image */}
            <Button className='w-full mt-5' onClick={GenerateAiImage}>Generate</Button>
            <p className='text-sm text-gray-400'>NOTE: 1 Credit will be used to redesign your room</p>

          </div>
      </div>
    </div>
  )
}

export default CreateNew
