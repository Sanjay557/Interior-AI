"use client"

import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import ImageKit from "imagekit"
import { useUser } from '@clerk/nextjs'
import CustomLoading from './_components/CustomLoading'
import AiOutputDialog from '../_components/AiOutputDialog'



const imagekit = new ImageKit({
  //@ts-ignore
  publicKey:process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
  //@ts-ignore
  privateKey:process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
  //@ts-ignore
  urlEndpoint:process.env.NEXT_PUBLIC_IMAGEKIT_URLENDPOINT
})


function CreateNew() {
  const {user} = useUser()

  const [formData, setFormData] = useState<any>({})
  const [loading, setLoading] = useState<boolean>(false)
  const [aiOutputResult, setAiOutputResult] = useState<any>()
  const [openOutputDialog, setOpenOutputDialog] = useState<boolean>(false)
  const [orgImage, setOrgImage] = useState<any>()

  const onHandleInputChange = (value : any, fieldName: string) => {
    setFormData((prev:any) => ({
      ...prev,
      [fieldName] : value
    }))

    console.log(formData)

  }

  const GenerateAiImage = async() => {
    setLoading(true)
    // const rawImageUrl = await SaveRawImagetoImagekit()
    //const rawImageUrl = "https://ik.imagekit.io/qt3mh7bup/1757600595687.png"
    const rawImageUrl = "/star.png"
    setOrgImage(rawImageUrl);
    const result = await axios.post('/api/redesign-room', {
      imageUrl: rawImageUrl,
      roomType: formData?.roomType,
      designType: formData?.designType,
      additionalReq: formData?.additionalReq,
      userEmail: user?.primaryEmailAddress?.emailAddress

    })
    const aiImageUrl = result.data.result;
    console.log("AI Generated Image:", aiImageUrl);


    const uploadedUrl = await uploadAIImagetoImageKit(aiImageUrl);
    console.log("Uploaded AI Image:", uploadedUrl);


    console.log(result.data.result)
    setAiOutputResult(uploadedUrl) //Output Image Url
    //Basically I have changed direction uploadAIImagetoImageKit should be in 
    //the route.tsx file. But I did it here. It is getting uploaded but I have to cautious.

    setOpenOutputDialog(true)
    setLoading(false)
    
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

  const uploadAIImagetoImageKit = async(aiImageUrl: string) => {
    // const imageRef = await imagekit.upload({
    //   file: aiImageUrl,
    //   fileName: Date.now() + '.png',
    //   isPublished: true,
    //   useUniqueFileName: false
    // });
    // return imageRef.url;

    return "/star.png"
  };


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
      <CustomLoading loading={loading}/>
      <AiOutputDialog 
        openDialog={openOutputDialog} 
        closeDialog={() => setOpenOutputDialog(false)}
        orgImage={orgImage}
        aiImage={aiOutputResult}
      />
    </div>
  )
}

export default CreateNew
