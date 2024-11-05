import React from 'react'
import back1 from './assets/Path 5.svg'
import grow from './assets/grow_together3.svg'


const Content4 = () => {
  return (
    <div style={{display:'flex',width:'100%',backgroundImage:`url(${back1})`,backgroundSize: 'cover',paddingTop:'200px',alignItems:'center',justifyContent:'space-around',paddingBottom:'100px'}}>
        <div style={{width:'30%'}}>
            <div style={{color: '#00252E', fontFamily: 'Poppins', fontSize: '40px',fontWeight: '700', }}>Your Users</div>
            <div style={{color: '#00252E', fontFamily: "Open Sans", fontSize: '16px', fontWeight: '400', }}>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</div>
        </div>

        <div>
            <img src={grow} alt="" />
        </div>
    </div>
  )
}

export default Content4