import React from 'react'
import DealsLanding from './DealsLanding';
import DealsPage from './DealsPage';
import { useState } from 'react';

const Deals:React.FC = () => {

    const [deals, setToDeals]=useState<boolean>()

    function redirect(){
        setToDeals(prev=>!prev);
    }

    if(deals) return <DealsPage/>

  return (
    <div>
        <DealsLanding redirect={redirect}/>
    </div>
  )
}

export default Deals;