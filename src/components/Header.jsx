import React from "react";

function Header() {
  return (
    <div>
      <header className=" flex  pt-4 justify-between items-center  ">
        <div className=" text-white">
          {/* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5  text-sm font-medium text-white backdrop-blur-3xl">
           
            </span>
          </button> */}
          
         <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
         &lt;SRK/&gt;
        </button>
  
         
      
           
        </div>
        <div className="hidden sm:flex">
          <ul className=" flex ">
            <li className=" ">
              <a href="*">Home</a>
            </li>
            <li className=" ml-3">
              <a href="*">About</a>
            </li>
            <li className=" ml-3">
              <a href="*">Resume</a>
            </li>
            <li className=" ml-3">
              <a href="*">Portfolio</a>
            </li>
            <li className=" ml-3">
              <a href="*">Contact</a>
            </li>
          </ul>
        </div>
        <div className="   drawer-end sm:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="  drawer-button">
              Menu
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a href="*">Home</a>
              </li>
              <li>
                <a href="*">About</a>
              </li>
              <li>
                <a href="*">Resume</a>
              </li>
              <li>
                <a href="*">Portfolio </a>
              </li>
              <li>
                <a href="*">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
