import React from "react";

function Header({ id }) {
  const headerContent = ["home", "about", "skills", "projects", "contact"];
  const closeDrawer = () => {
    const drawerToggle = document.getElementById("my-drawer");
    if (drawerToggle) {
      drawerToggle.checked = false;
    }
  };
  return (
    <div id={id} className=" fixed top-0 left-0 w-full   shadow-md z-10 px-4  ">
      <header className=" flex  bg-black w-full px-5 rounded-lg h-[60px] justify-between items-center  ">
        <div className=" text-white">
          <a href={`#${id}`}>
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              &lt;SRK/&gt;
            </button>
          </a>
        </div>
        <div className="hidden sm:flex">
          <ul className=" flex ">
            {headerContent.map((item, index) => (
              <li
                className=" capitalize cursor-pointer first:ml-0 ml-3 hover:text-white"
                key={index}
              >
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="   drawer-end sm:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
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
              {headerContent.map((item, index) => (
                <li
                  onClick={closeDrawer}
                  className=" capitalize cursor-pointer"
                  key={index}
                >
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
