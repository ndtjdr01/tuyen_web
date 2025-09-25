import anh1 from '../assets/anh1.jpg'

export const Gioithieu = () => {
  return (
    <div className='flex flex-col gap-3'>
          <div className='bg-center bg-cover' style={{ backgroundImage: `url(${anh1})`, height: '100vh' }}></div>
          <div>gioi thieu</div>
        </div>
  )
}
