import React from 'react'
import anh1 from '../assets/anh1.jpg'
export const Phongtruyenthong = () => {
  return (
    <div className='flex flex-col '>
      <div className='flex justify-center items-center bg-[#305488] text-[#fff] h-[100px]'>
        <p className='font-semibold text-2xl'>PHÒNG TRUYỀN THỐNG</p>
      </div>
      {/* chu phogn */}
      <div className='flex gap-10 px-16 py-8 items-center w-[80%] m-auto'>
        <div className=''>
          <img className='w-[150px] h-[200px]' src={anh1} alt="" />
        </div>
        <div>Anh Đỗ Danh Tuyển - Đầu tàu Dự án kinh doanh và khởi nghiệp DBT .... </div>
      </div>
      {/* cac thanh vien */}
      <div className='flex p-8 gap-4 pt-0 flex-col w-[80%] m-auto'>
        <p className='font-bold text-black text-center text-[22px] uppercase'>Những thành viên tiêu biểu</p>
        <p>
          trong suốt quá trình hình thành và phát triển Dự án kinh doanh và khởi nghiệp DBT đáng được ghi nhận và trân trọng. Họ đã đóng góp không chỉ về mặt ý tưởng mà còn về tinh thần và sự cống hiến để đưa dự án đến thành công.
        </p>
        <p className='w-[100vw] text-center font-normal text-[20px] mx-[-20%] bg-[#305488] text-[#fff] p-2'>
          CÁC GEN CỦA DBT
        </p>

        <div className='flex justify-between gap-8 w-[80vw] mx-[-5%] py-4'>
          <div className='py-8 w-1/3 flex flex-col items-center gap-3 '>
            <img className='rounded-full w-1/2 aspect-square' src={anh1} alt="" />
            <p>Nguyễn Hoàng Khánh Linh</p>
            <p>Thành viên F20</p>
          </div>
          <div className='py-8 w-1/3 flex flex-col items-center gap-3 '>
            <img className='rounded-full w-1/2 aspect-square' src={anh1} alt="" />
            <p>Nguyễn Hoàng Khánh Linh</p>
            <p>Thành viên F20</p>
          </div>
          <div className='py-8 w-1/3 flex flex-col items-center gap-3'>
            <img className='rounded-full w-1/2 aspect-square' src={anh1} alt="" />
            <p>Nguyễn Hoàng Khánh Linh</p>
            <p>Thành viên F20</p>
          </div>
        </div>
      </div>
    </div>
  )
}
