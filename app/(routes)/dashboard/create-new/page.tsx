"use client"

import React from 'react'
import ImageSelection from './_components/ImageSelection'
import RoomType from './_components/RoomType'

function CreateNew() {

  const onHandleInputChange = (value : any, fieldName: string) => {

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
            <RoomType />
            
            {/* Design Type */}

            {/* Additional requirement text area(optional) */}

            {/* Button to generate Image */}

          </div>
      </div>
    </div>
  )
}

export default CreateNew
