import React from 'react'
import huychuong from '../assets/huychuong.jpg'

export const Thanhtich = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center items-center bg-[#305488] text-[#fff] h-[100px]'>
        <p className='font-semibold text-2xl'>THÀNH TÍCH NỔI BẬT</p>
      </div>
      <div className='flex flex-col'>
        <div className='flex justify-center items-center w-full p-4'>
          <img className='w-[300px]' src={huychuong} alt=""  />
        </div>
        <div className='flex flex-col'>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}
