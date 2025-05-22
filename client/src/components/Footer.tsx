import React from "react";
import { Link } from "react-router-dom";
interface Links {
  id: number;
  name: string;
  path: string;
}
const Footer: React.FC = () => {
  const NavItmes: Links[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Categories",
      path: "/c",
    },
    {
      id: 3,
      name: "Deal`s",
      path: "/d",
    },
    {
      id: 4,
      name: "What`s New",
      path: "/w",
    },
    {
      id: 5,
      name: "Delivery",
      path: "/dl",
    },
    {
      id: 6,
      name: "Sample Page",
      path: "/sp",
    },
  ];
  return (
    <div className="w-full h-[28vh] bg-slate-800 text-slate-300 ">
      {NavItmes.map((item) => (
        <div className="flex flex-col items-start space-y-4">
          <Link
            className="hover:text-blue-500 cursor-pointer text-xs slate-399 m-2 ml-30"
            to={item.path}
            key={item.id}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Footer;
