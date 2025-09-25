import { Link } from "react-router-dom"

export const Nav = ({ theme }) => {
    return (
        <div className='w-full px-4 h-[60px] bg-[#ddd] text-[#222] flex 
        justify-between items-center font-'>

            {/* logo */}
            <Link to="/">
                <img src="/logo.jpg" className='h-[40px] w-[40px] rounded-full cursor-pointer' />
            </Link>

            {/* dieu huong */}
            <ul className='hidden sm:flex gap-1 justify-between w-[640px] mr h-full'>
                <Link to="/gioithieu" className="cursor-pointer rounded-[4px] hover:border hover:border-[#ccc] h-full px-2 flex items-center hover:bg-[#fff] hover:text-[#000]">Giới thiệu</Link>
                <Link to="/sanpham" className="cursor-pointer rounded-[4px] hover:border hover:border-[#ccc] h-full px-2 flex items-center hover:bg-[#fff] hover:text-[#000]">Sản phẩm</Link>
                <Link to="/sukien" className="cursor-pointer rounded-[4px] hover:border hover:border-[#ccc] h-full px-2 flex items-center hover:bg-[#fff] hover:text-[#000]">Sự kiện</Link>
                <Link to="/tintuc" className="cursor-pointer rounded-[4px] hover:border hover:border-[#ccc] h-full px-2 flex items-center hover:bg-[#fff] hover:text-[#000]">Tin tức</Link>
                {/* <Link to="/" className="cursor-pointer rounded-[4px] hover:border hover:border-[#ccc] h-full px-2 flex items-center hover:bg-[#fff] hover:text-[#000]">Câu chuyện khởi nghiệp</Link> */}
            </ul>

            {/* chuc nang tien ich */}
            <div className='flex gap-4 items-center'>
                <div className='sm:hidden cursor-pointer'>
                    <i className="fa-solid fa-bars"></i>
                </div>

                <div className="rounded-full hover:bg-amber-50 h-[30px] w-[30px] flex justify-center 
            items-center cursor-pointer">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>

                <div className="rounded-full hover:bg-amber-50 h-[30px] w-[30px] flex justify-center 
            items-center cursor-pointer ">
                    <i className="fa-solid fa-moon"></i>
                </div>
            </div>
        </div>
    )
}
