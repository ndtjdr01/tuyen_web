import anh1 from '../assets/anh1.jpg'
import huychuong from '../assets/image_2.webp'

export const Tintuc = () => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='flex justify-center items-center bg-[#305488] text-[#fff] h-[100px]'>
        <p className='font-semibold text-2xl'>Tin tức</p>
      </div>

      <div className='flex justify-between gap-2 p-6'>
        <div className='w-[70%] flex gap-4'>
          <div className='flex-1'>
            <div className='border-2 boder-black rounded-md'>
              <div className='w-full aspect-square border-2 boder-black'>
                <img src="" alt="" />
              </div>
              <div className='text-[14px] p-5 flex flex-col gap-3   '>
                <p className='text-[#305488] font-semibold text-[16px]'>Doanh nghiệp lớn là gì ?</p>
                <p>Năm 2013 kkfsjafk daksdjask a jaj ajdksadj  jakdsdjkasj ajksajfjaksfj aj jajsjdasjkfasjf jwiqoruz,ncxz n mzxmvkjsflawkroiwqurwrq safafgsdga </p>
                <p className='border-t-2 border-black mx-[-20px] px-5'>1/2/2025</p>
              </div>
            </div>
          </div>
          <div className='flex-1 '>
            <div className='border-2 boder-black rounded-md'>
              <div className='w-full aspect-square border-2 boder-black'>
                <img src="" alt="" />
              </div>
              <div className='p-5 text-[14px] gap-3 flex flex-col'>
                <p className='text-[#305488] font-semibold text-[16px]'>Xu hướng phát triển báo chí và những mô hình kinh doanh báo điện tử hiện đại</p>
                <p className=''>Năm 2013 kkfsjafk daksdjask a jaj ajdksadj  jakdsdjkasj ajksajfjaksfj aj jajsjdasjkfasjf jwiqoruz,ncxz n mzxmvkjsflawkroiwqurwrq safafgsdga </p>
                <p className='border-t-2 border-black mx-[-20px] px-5'>3/2/2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[30%] flex flex-col gap-2 jusify-between'>
          <div className='w-[70%] m-auto flex-1 border-2 boder-black'>
            <img className='h-[300px] w-full' src='' alt="anh1" />
          </div>
          <div className='w-[90%] m-auto h-[10%] border-2 boder-black'>
            <img className='object-cover w-full' src="" alt="anh2" />
          </div>
          <div className='w-[50%] m-auto flex-1 border-2 boder-black'>
            <img className='h-[300px] w-full' src='' alt="anh3" />
          </div>
        </div>
      </div>

    </div>
  )
}
