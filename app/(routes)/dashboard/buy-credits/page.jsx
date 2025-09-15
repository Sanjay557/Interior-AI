"use client"

import React from 'react'

function BuyCredits() {
    const creditOptions = [
        {
            credits:5,
            amount: 0.99
        },
        {
            credits:10,
            amount: 1.99
        },
        {
            credits:25,
            amount: 3.99
        },
        {
            credits:50,
            amount: 6.99
        },
        {
            credits:100,
            amount: 9.99
        },

    ]

    const [selectedOption, setSelectedOption] = React.useState([])
  return (
    <div>
      <h2 className='font-bold text-2xl'>Buy more credits</h2>
      <p>Unlock endless possibilities. Buy More Credits</p>

      <div className='grid grid-cols-2 md:grid-cols-3 
      lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {creditOptions.map((item, index)=> (
            <div key={index} className='border-2 border-purple-500 p-4'>
                <h2 className='font-bold text-3xl'>{item.credits}</h2>
                <h2 className='font-medium text-xl'>Credits</h2>
                <button className='bg-slate-400 w-full mt-4 mb-4 p-2' onClick={()=> setSelectedOption(item)}>Buy</button>
                
                <h2 className='font-medium text-purple-500'>${item.amount}</h2>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredits
