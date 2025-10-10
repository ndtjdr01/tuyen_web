import anh1 from '../assets/anh1.jpg'
export const Trangchu = () => {
  return (
    <div className='flex flex-col gap-8 w-full justify-center items-center p-8' >
      {/* slide */}
      <div className='w-full flex flex-col gap-2 justify-center items-center'>
        <div className='w-2/3 relative'>
          <img className="w-full rounded-md" src={anh1} alt="" />
          <div className='arrow_button left-4 top-1/2 absolute text-2xl h-[40px] w-[40px]'>
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className='arrow_button right-4 top-1/2 absolute text-2xl h-[40px] w-[40px]'>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className='flex flex-col gap-2 w-2/3 bg-[#d1d4da] p-8 rounded-md'>
          <p className='font-bold text-[18px]'
          >Câu chuyện của chúng tôi - Dự án kinh doanh và khởi nghiệp DBT</p>
          <p>
            Dự án kinh doanh và khởi nghiệp DBT ra đời với sứ mệnh hỗ trợ các doanh nhân và nhà khởi nghiệp trên hành trình xây dựng và phát triển doanh nghiệp của họ. Chúng tôi tin rằng mỗi doanh nhân đều có tiềm năng to lớn để tạo ra sự khác biệt trong cộng đồng và thị trường.
            <br />
            <br />
            Tại DBT, chúng tôi cung cấp một loạt các dịch vụ và tài nguyên nhằm giúp doanh nhân vượt qua những thách thức trong quá trình khởi nghiệp. Từ việc tư vấn chiến lược kinh doanh, hỗ trợ tài chính, đến việc kết nối với mạng lưới chuyên gia và nhà đầu tư, chúng tôi cam kết đồng hành cùng bạn trên con đường thành công.
          </p>
        </div>
      </div>

      {/* content */}
      <div class="flex flex-col md:flex-row gap-8 bg-gray-50">
        <div class="flex-1 bg-white shadow-md rounded-xl overflow-hidden">
          <div class="bg-[#305488] text-white px-4 py-2 font-semibold">
            Kiến thức Start-up
          </div>
          <div className="bg-[#579af8] flex">
            <div className='w-1/2 aspect-square bg-[#fff] flex justify-center items-center'>
              <img src="/logo.jpg" alt="" />
            </div>
            <div className='flex px-4 flex-col justify-center gap-4 w-1/2'>
              <p>Start-up là gì? Những điều bạn cần biết về start-up và cách hoạt động</p>
              <button className='button'>Chi tiết</button>
            </div>
          </div>
        </div>

        <div class="flex-1 flex flex-col bg-white shadow-md rounded-xl overflow-hidden">
          <div class="bg-[#305488] text-white px-4 py-2 font-semibold">
            Bài viết mới
          </div>

          <div class="flex-1 p-4 flex flex-col justify-between">
            {/* 1 */}
            <div class="flex-1 w-full flex items-start gap-3 border-b p-2">
              <img src="/logo.jpg" alt="News" class="w-[100px] h-[70px] object-cover rounded-md flex-shrink-0" />
              <p class="text-sm flex-1">
                Khối ngoại bán ròng kỷ lục 42,000 tỷ đồng trong tháng 4, nguyên nhân nào là tội điểm?
              </p>
            </div>
            {/* 2 */}
            <div class="flex-1 w-full flex items-start gap-3 border-b p-2">
              <img src="/logo.jpg" alt="News" class="w-[100px] h-[70px] object-cover rounded-md flex-shrink-0" />
              <div class="text-sm flex-1 flex flex-col justify-between h-full">
                <div>
                  Startup Việt vươn tầm thế giới — câu chuyện kinh doanh đầy cảm hứng.
                </div>
                <div className='text-right'>by: Tuyen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
