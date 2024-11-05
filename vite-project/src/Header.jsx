import React from 'react'
import logo_image from './assets/Huddle_logo.svg'

const Header = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-between',padding:'80px 80px 200px 80px'}}>
        <img src={logo_image} alt="photo" />
        <button style={{width:'136px',height:'40px',fontFamily:'Open-sans',fontSize:'16px',fontWeight:'400',color:'#FF52C1',borderRadius:'20px',border:' 1px solid #FF52C1',background:'white',boxShadow: '0px 0px 9px 0px rgba(255, 82, 193, 0.22)'
}}>Try It Free</button>
    
    
    
    
    </div>
  )
}

export default Header