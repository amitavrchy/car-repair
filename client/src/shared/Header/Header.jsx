import logo from "../../assets/logo.svg"
import navcart from "../../assets/icons/navcart.png"
import navsearch from "../../assets/icons/navsearch.png"

const Header = () => {
  const navItems = <>
    <li className="text-[16px] text-[#444444] hover:text-[#FF3811] "><a className="hover:bg-white">Home</a></li>
    <li className="text-[16px] text-[#444444] hover:text-[#FF3811] "><a className="hover:bg-white">About</a></li>
    <li className="text-[16px] text-[#444444] hover:text-[#FF3811] "><a className="hover:bg-white">Services</a></li>
    <li className="text-[16px] text-[#444444] hover:text-[#FF3811] "><a className="hover:bg-white">Blog</a></li>
    <li className="text-[16px] text-[#444444] hover:text-[#FF3811] "><a className="hover:bg-white">Contact</a></li>
  </>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-inter font-bold">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-5 mr-5">
          <img src={navcart} alt="" />
          <img src={navsearch} alt="" />
        </div>
        <a className="btn w-32 bg-transparent border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:text-white transition hover:duration-500 font-inter">Appointment</a>
      </div>
    </div>
  )
}

export default Header