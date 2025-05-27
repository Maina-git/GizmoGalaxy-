import React from 'react'
import Sidebar from '../components/articles/Sidebar';
import { Outlet } from 'react-router-dom';

const ItemsLayout:React.FC = () => {
  return (
   <>
   <Sidebar/>
   <main>
<Outlet/>
    </main>
    </>
  )
}

export default ItemsLayout;