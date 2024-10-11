import React, { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gap, setGap] = useState(true);
  return (
    <div className="flex">
      <div
        className={`${
          isOpen ? "w-72" : "w-20"
        } duration-300 p-5 pt-8 h-screen  bg-blue-950 relative`}
      >
        <img
          src="control.png"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-blue-950 ${
            !isOpen && "rotate-180"
          }`}
          alt="collapse-img"
          onClick={() => setIsOpen(!isOpen)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="logo.png"
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer duration-500 ${!isOpen && "rotate-180"}`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !isOpen && "scale-0"
            }`}
          >
            Desinger
          </h1>
        </div>
        <ul className="pt-6">
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md ${
              gap ? "mt-7" : "mt-2"
            }`}
          >
            <img
              src="Chart_fill.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Chat.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Inbox
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md ${
              gap ? "mt-9" : "mt-2"
            }`}
          >
            <img
              src="User.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Account
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Calendar.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Schedule
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Search.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Search
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Chart.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Analytics
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Chat.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500`}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Inbox
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md ${
              gap ? "mt-9" : "mt-2"
            }`}
          >
            <img
              src="Folder.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Files
            </h1>
          </li>
          <li
            className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-900 rounded-md `}
          >
            <img
              src="Setting.png"
              onClick={() => setIsOpen(!isOpen)}
              className={`cursor-pointer duration-500 `}
            />
            <h1
              className={`text-white origin-left font-medium text-md duration-300 ${
                !isOpen && "scale-0"
              }`}
            >
              Setting
            </h1>
          </li>
        </ul>
      </div>
      <div className="p-8 text-2xl font-semibold flex-1 h-screen">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default SideBar;
