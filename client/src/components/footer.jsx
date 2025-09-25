import React from 'react'

export const Footer = () => {
    return (
        <div className='w-full h-full px-4 bg-[#DDD] text-[#222] py-[50px] flex justify-between items-center'>
            <div className='flex flex-col items-center justify-between h-full'>
                <div className='flex flex-col text-left font-bold text-[30px] text-[#000]'>
                    <p>BUSINESS &</p>
                    <p>STARTUP PROJECT</p>
                    <p className='text-[#222] text-[15px] font-medium'>Dự án Kinh doanh và Khởi nghiệp</p>
                </div>
                <div className='flex flex-col items-start w-full'>
                    <p>Dream Higher</p>
                    <p>Reach Futher</p>
                    <p>Achieve Together</p>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[10px] h-full justify-end'>
                <div className='flex items-center gap-2'>
                    <a href="#"><i className="fa-solid fa-phone"></i></a>
                    <a href="#">0333234234</a>
                </div>
                <div className='flex items-center gap-2'>
                    <a href="#"><i className="fa-brands fa-facebook"></i></a>
                    <a href="#">fb</a>
                </div>
                <div className='flex items-center gap-2'>
                    <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href="#">ins</a>
                </div>
            </div>
            <img className='h-[200px] w-[200px] rounded-full' src="/logo.jpg" alt="" />
        </div>
    )
}
