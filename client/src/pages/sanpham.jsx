import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/mainContext'
import BackToTopButton from '../components/backToTop'

export const Sanpham = () => {
  const { Products } = useContext(ProductContext)



  useEffect(() => {
    console.log(Products);
    console.log(Products.filter(item => item.loai === 1));
  })

  return (
    <div className='flex gap-3 justify-center items-center w-full relative'>
      {/* danhmuc */}
      <div className='top-0 h-full bottom-0 overflow-y-auto left-0 absolute bg-[#fff] p-4 w-[300px]
      border-r-[1px] border-gray-300'>
        <ul className='mt-[50px] flex flex-col gap-2'>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 1</li>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 2</li>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 3</li>
        </ul>
      </div>

      {/* hien thi san pham */}
      <div className='flex flex-col gap-3 justify-center items-center p-4 mt-[50px]'>
        <div className='px-[320px] w-full flex justify-between items-center'>
          <div className='flex  gap-1'>
            <input type="text" placeholder='tim kiem san pham' 
            className='border-[1px] border-[#888] p-2 rounded-md outline-1 outline-[#535353]'/>
            <i className="fa-solid fa-magnifying-glass w-[30px] rounded-md border-[1px] border-[#888] flex justify-center 
            items-center cursor-pointer hover:bg-[#333] hover:border-none hover:text-[#d2d2d2]"></i>
          </div>
          <div className='flex gap-2'>
            <button className='border-[1px] p-3 border-gray-200 '>Lọc</button>
            <button className='border-[1px] p-3 border-gray-200 '>Khu vực</button>
            <button className='border-[1px] p-3 border-gray-200 '>Liên quan</button>
          </div>
        </div>

        <div className=" grid grid-cols-3 gap-6 py-4 px-[320px] bg-white">
          {Products.map((item) => (
            <div
              key={item.id}
              className="product-item bg-white shadow-md rounded-2xl p-4 
              hover:shadow-xl hover:scale-105 transition-all 
             border-[1px] border-gray-200
              duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="product-item_img w-full h-[200px] object-cover rounded-xl mb-3"
              />
              <h3 className="product-item-name font-[consolas] text-lg font-semibold text-gray-800 line-clamp-1">
                {item.name}
              </h3>
              <p className="product-item-mota text-black-300 font-[consolas] text-[12px] font-normal consolas mt-1">
                {item.mota.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
            </div>
          ))}
        </div>
      </div>


      {/* danhmuc */}
      <div className='top-0 bottom-0 overflow-y-auto right-0 absolute bg-[#fff] p-4 w-[300px]
      border-l-[1px] border-gray-300'>
        <ul className='mt-[50px] flex flex-col gap-2'>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 1</li>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 2</li>
          <li className='cursor-pointer hover:font-bold border-b-[1px] border-gray-300 p-1'>Danh muc 3</li>
        </ul>
      </div>
      <BackToTopButton/>
    </div>
  )
}
