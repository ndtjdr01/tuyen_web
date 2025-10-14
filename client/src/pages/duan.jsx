import React from 'react'
import anh1 from '../assets/anh1.jpg'

export const Duan = () => {
    return (
        <div className='flex flex-col '>
            <div className='flex justify-center items-center bg-[#305488] text-[#fff] h-[100px]'>
                <p className='font-semibold text-2xl'>DỰ ÁN KINH DOANH VÀ KHỞI NGHIỆP DBT</p>
            </div>
            <div className='flex flex-col items-center p-8 w-[80%] m-auto'>
                <div className='flex justify-center items-center'>
                    <img src="/logo.jpg" className='w-[40%] object-cover' />
                </div>
                <div>
                    <p className='text-justify '>
                        Dự án Kinh doanh và Khởi nghiệp DBT (DBT Business and Startup Project) là một sáng kiến nhằm thúc đẩy tinh thần khởi nghiệp và phát triển kinh doanh trong cộng đồng sinh viên và doanh nhân trẻ. Dự án này cung cấp một nền tảng để các cá nhân có ý tưởng kinh doanh sáng tạo có thể hiện thực hóa ý tưởng của mình thông qua việc cung cấp hỗ trợ tài chính, tư vấn chiến lược, và kết nối với các chuyên gia trong ngành.
                    </p>
                    <p className='text-justify  mt-4'>
                        Mục tiêu chính của Dự án Kinh doanh và Khởi nghiệp DBT là tạo ra một môi trường thuận lợi cho sự phát triển của các doanh nghiệp mới, đồng thời khuyến khích sự đổi mới và sáng tạo trong lĩnh vực kinh doanh. Dự án này thường tổ chức các cuộc thi khởi nghiệp, hội thảo, và các chương trình đào tạo nhằm cung cấp kiến thức và kỹ năng cần thiết cho các nhà khởi nghiệp.
                    </p>
                    <p className='text-justify  mt-4'>
                        Thông qua việc tham gia vào Dự án Kinh doanh và Khởi nghiệp DBT, các cá nhân không chỉ có cơ hội nhận được sự hỗ trợ về mặt tài chính mà còn được tiếp cận với mạng lưới chuyên gia và nhà đầu tư, giúp họ phát triển ý tưởng kinh doanh một cách bền vững và hiệu quả.
                    </p>
                </div>
                <div className='flex w-[100vw] gap-4 justify-between p-16'>
                    <div className='w-1/4 aspect-square'>
                        <img src={anh1} alt="" />
                    </div>
                    <div className='w-1/4 aspect-square'>
                        <img src={anh1} alt="" />
                    </div>
                    <div className='w-1/4 aspect-square'>
                        <img src={anh1} alt="" />
                    </div>
                    <div className='w-1/4 aspect-square'>
                        <img src={anh1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
