import React from 'react'
import grow from './assets/grow_together2.svg'



const Content3 = () => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',paddingBottom:'120px',paddingTop:'150px'}}>
        <div><img style={{width: '531px', height: '378px'}}src={grow} alt="" /></div>
        <div style={{width:'35%'}}>
            <div style={{color: '#00252E', fontFamily: 'Poppins', fontSize: '40px',fontWeight: '700'}}>Flowing Conversations</div>
            <div style={{width:'90%',color: '#00252E', fontFamily: "Open Sans", fontSize: '16px',fontWeight: '400',paddingTop:'25px'}}>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</div>
            
        </div>
    </div>
  )
}

export default Content3