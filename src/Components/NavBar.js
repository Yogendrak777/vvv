import React from 'react'
import './Style.css'
import { Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
        <div className='navBar'>
        <img className='RoundCard' src="https://static.wixstatic.com/media/c4ea42_e074f4e4fc8e4deea4dc184b87c5bca7~mv2_d_3000_3000_s_4_2.png/v1/fill/w_102,h_102,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo_Round.png" alt="Greendzine Logo" width="50" height="50"/>
      <span className='GreendzineHead' >Greendzine VVV Platform</span>
      </div>
      <Outlet/>

    </div> 
  )
}
