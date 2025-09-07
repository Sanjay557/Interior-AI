"use client"

import React, { useState } from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'
import DesignType from './_components/DesignType'
import AdditionalReq from './_components/AdditionalReq'
import { Button } from '@/components/ui/button'

function CreateNew() {

  const [formData, setFormData] = useState([])

  const onHandleInputChange = (value : any, fieldName: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName] : value
    }))

    console.log(formData)
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
            <Button className='w-full mt-5'>Generate</Button>
            <p className='text-sm text-gray-400'>NOTE: 1 Credit will be used to redesign your room</p>

          </div>
      </div>
    </div>
  )
}

export default CreateNew
