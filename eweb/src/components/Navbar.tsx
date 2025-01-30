import React from "react";
import { FaShoppingCart, FaSearch, FaCartPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

interface Links{
    id:number,
    name:string,
    path:string
}

interface Links2{
  id:number,
  name:string,
  path:string,
  icon:JSX.Element
}


const Navbar: React.FC = () => {

const NavItmes:Links[]=[
    {
    id:1,
    name:'Home',
    path:"/"
    },
    {
    id:2,
    name:'Categories',
    path:"/c"
    },
    {
    id:3,
    name:'Deal`s',
    path:"/d"
    },
    {
    id:4,
    name:'What`s New',
    path:"/w"
    },
    {
    id:5,
    name:'Delivery',
    path:"/dl"
    },
];


const navItems2:Links2[]=[
  {
    id:1,
    name:"Account",
    icon:<MdAccountCircle className="mr-1 text-xl"/>,
    path:"acc"
  },
  {
    id:2,
    name:"Cart",
    icon:<FaCartPlus   className="mr-1 text-xl"/>,
    path:"/crt"
  }
]

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center text-xl font-bold text-blue-500">
          <FaShoppingCart className="mr-2" />
          <span>Shopcart</span>
        </div>
{
    NavItmes.map((item)=>(
        <div className="hidden md:flex gap-2 text-gray-700 font-medium">
        <Link className="hover:text-blue-500 cursor-pointer text-xs" to={item.path} key={item.id}>{item.name}</Link>
    </div>
    ))
}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-md">
            <input
              type="text"
              placeholder="Search Product"
              className="bg-transparent outline-none text-sm text-gray-700 w-full"
            />
            <FaSearch className="text-gray-500 ml-2" />
          </div>
          <div className="flex items-center space-x-4 text-gray-700">
           
              {
                navItems2.map((item)=>( 
 <Link to={item.path}><span  className="flex items-center hover:text-blue-500 cursor-pointer">{item.icon}
   {item.name}</span>
   </Link>
                ))
}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
