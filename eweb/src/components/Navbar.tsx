import React from "react";
import { FaShoppingCart, FaSearch, FaCartPlus } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

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

const [showNav, setShowNav] =useState<boolean>(false);

function openNav(){
  setShowNav(prev=>!prev);
}


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
    path:"/lg"
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
          <span>Gizmo Galaxy</span>
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
              className="bg-transparent outline-none text-sm text-gray-700 w-full"/>
            <FaSearch className="text-gray-500 ml-2" />
          </div>
<button onClick={openNav} className="md:hidden  w-10 h-10 text-blue-500 rounded-full text-3xl">{showNav ? <MdClose/> : <MdMenu/>}</button>


          <div className="hidden  md:flex items-center space-x-4 text-gray-700">
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
{
  showNav && (
<div className="fixed flex flex-col gap-5 top-0 left-0  w-50 h-screen bg-blue-500">
  <h1 className="text-xl font-bold m-5 text-white">Gizmo Galaxy</h1>
<div className="m-5 flex flex-col gap-10">
{
    NavItmes.map((item)=>(
        <Link className="text-white cursor-pointer text-xs" to={item.path} key={item.id}>{item.name}</Link>
    ))
}
</div>
  <div className="flex flex-col items-start space-x-4 text-white gap-10 mx-5">
          {
              navItems2.map((item)=>( 
 <Link to={item.path}><span  className="flex items-center cursor-pointer">{item.icon}
   {item.name}</span>
   </Link>
                ))
              }
          </div>


</div>
  )
}



    </nav>
  );
};

export default Navbar;
