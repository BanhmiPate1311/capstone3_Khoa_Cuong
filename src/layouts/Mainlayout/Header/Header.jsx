import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logOut, useQuanLyNguoiDung } from "../../../store/quanLyNguoiDung";

const Header = () => {
  const { userLogin } = useQuanLyNguoiDung();
  const dispatch = useDispatch();
  const dangXuat = () => {
    dispatch(logOut());
  };
  const navs = useNavigate();
  // if (userLogin) {
  //   navs("home");
  // }
  return (
    <header className="dark:bg-gray-800 dark:text-gray-100 bg-opacity-70 bg-black text-white fixed w-full">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink
          rel="noopener noreferrer"
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            className="h-full"
            src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
            alt="no go"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Cụm Rạp
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {userLogin ? (
            <>
              <span className="mr-2">Xin Chào</span>
              {userLogin.hoTen}
              <button
                className="self-center px-8 py-3 rounded"
                onClick={dangXuat}
              >
                Thót nà
              </button>
            </>
          ) : (
            <>
              <button className="self-center px-8 py-3 rounded">
                <Link to="/login">Đăng nhập</Link>
              </button>
              <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                <Link to="/register">Đăng ký</Link>
              </button>
            </>
          )}
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
