import { useState } from "react";
import { Link } from "react-router-dom"

export const Nav = () => {
    const [navActive, setNavActive] = useState(null);
    return (
        <div className="flex flex-col">
            {/* header */}
            <div className="bg-[#305488] items-center py-2 px-4 flex justify-between">
                <div className="flex gap-2 items-center text-[#fff] text-[13px] font-bold">
                    <Link to="/">
                        <img src="/logo.jpg" className='h-[40px] w-[40px] rounded-full cursor-pointer' />
                    </Link>
                    <span>Dự án kinh doanh và khởi nghiệp DBT</span>
                </div>
                <div className="p-1 w-[180px] rounded-md bg-[#fff] flex items-center gap-2">
                    <input type="text" placeholder="Tìm kiếm" className="w-full outline-none" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>

            {/*nav  */}
            <div className='w-full px-4 h-[60px] bg-[#1b1b1b] text-[#a1a1a1] flex 
        justify-center items-center'>
                <ul className='hidden w-full sm:flex gap-1 justify-between h-full'>
                    <div className="nav_items">
                        <Link to="/trangchu" className="nav_item">Trang chủ</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="nav_items" onMouseEnter={() => setNavActive("gioithieu")}
                        onMouseLeave={() => setNavActive(null)}>
                        <Link to="/gioithieu" className="nav_item">Giới thiệu</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                        {navActive === "gioithieu" && (
                            <ul className="sub_nav">
                                <Link to="/gioithieu/du-an" className="sub_nav-item">Dự án</Link>
                                <Link to="/gioithieu/phong-truyen-thong" className="sub_nav-item">Phòng truyền thống</Link>
                                <Link to="/gioithieu/thanh-tich" className="sub_nav-item">Thành tích nổi bật</Link>
                            </ul>
                        )}
                    </div>
                    <div className="nav_items" onMouseEnter={() => setNavActive("tintuc")}
                        onMouseLeave={() => setNavActive(null)}>
                        <Link to="/tintuc" className="nav_item">Tin tức</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="nav_items" onMouseEnter={() => setNavActive("kienthuc-startup")}
                        onMouseLeave={() => setNavActive(null)}>
                        <Link to="/kienthuc-startup" className="nav_item">Kiến thức Start-up</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="nav_items" onMouseEnter={() => setNavActive("sukien")}
                        onMouseLeave={() => setNavActive(null)}>
                        <Link to="/sukien" className="nav_item">Sự kiện</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="nav_items" onMouseEnter={() => setNavActive("sanpham")}
                        onMouseLeave={() => setNavActive(null)}>
                        <Link to="/sanpham" className="nav_item">Sản phẩm</Link>
                        <i class="fa-solid fa-chevron-down"></i>
                    </div>
                    <div className="nav_items">
                        <Link to="/lienhe" className="nav_item">Liên hệ</Link>
                    </div>
                    {/* <Link to="/" className="nav_item">Câu chuyện khởi nghiệp</Link> */}
                </ul>
            </div>
        </div>
    )
}
