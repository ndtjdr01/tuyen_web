import React from 'react'

export const Footer = () => {
    return (
        <div className='w-full h-full bg-[#305488] text-[#fff] flex items-center'>
            <div className='w-1/2 h-full flex flex-col justify-around p-4 gap-8'>
                <div className='flex gap-4'>
                    <div className='h-[100px] w-[100px]'>
                        <img className='h-full w-full' src="/logo.jpg" alt="" />
                    </div>
                    <div className='flex flex-col gap-2 font-semibold justify-between'>
                        <p>Trường Đại học Thương Mại</p>
                        <p>79 Đ.Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội, Việt Nam</p>
                        <p>0969783021 (Phong)</p>
                    </div>
                </div>
                <div className='flex font-thin gap-8'>
                    <div className='flex flex-col gap-2'>
                        <p>Giới thiệu</p>
                        <p>Thành Tích</p>
                        <p>Thành Viên</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>Câu chuyện của chúng tôi</p>
                        <p>Cộng đồng</p>
                        <p>Group kết nối Khởi Nghiệp (sắp ra mắt)</p>
                    </div>
                </div>
            </div>
            <div className='h-full w-1/2'>
                <img className='footer_logo h-full w-full ' src="/logo.jpg" alt="" />
            </div>
        </div>
    )
}
