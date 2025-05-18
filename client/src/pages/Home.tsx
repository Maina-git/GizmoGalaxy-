import React from 'react'
import LandingPage from '../components/LandingPage';
import Items from '../components/Items';

const Home:React.FC = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      <LandingPage/>
      <Items/>
    </div>
  )
}

export default Home;
