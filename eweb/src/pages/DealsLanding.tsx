import React from 'react'

interface Props{
    redirect:()=>void;
}


const DealsLanding:React.FC <Props>= ({redirect}) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
        <div className="w-1/2 bg-blue-500 p-5 h-screen">
        <h1 className="text-white m-10 text-5xl font-bold">Get Our Favourite Deals</h1>
        <p className="text-white m-10 text-xl">Gizmo offers you the best Delas with a 50% off Guarantee</p>

<div className="p-10 bg-white rounded-full m-y-10 text-center  text-blue-500 text-6xl font-bold">
    Expore Deals
</div>
        </div>

        <div className="w-1/2 bg-white flex items-center justify-center">
<img src="/images/gamepad-6392045_1280.jpg" className="w-100 h-100 rounded-full" alt="deals image"/>
        <button onClick={redirect} className="fixed bg-blue-500 text-white px-5 py-3 rounded-lg bottom-10 right-5"> Get a Deal</button>
        </div>
    </div>
  )
}

export default DealsLanding;