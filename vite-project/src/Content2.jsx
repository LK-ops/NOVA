import React from 'react'
import back from './assets/blue_background.svg'
import grow from './assets/grow_together.svg'

const Content2 = () => {
  return (
    <div style={{display:'flex',width:'100%',paddingTop:'171px',backgroundImage: `url(${back || './assets/blue_background.svg'})`
    ,backgroundSize:'cover',paddingBottom:'200px',}} > 
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
      <div style={{width: '32%'}}>
        <div style={{color: '#00252E' ,fontFamily: 'Poppins', fontSize: '40px',  fontWeight: '700',paddingBottom:'20px'}}>Grow Together</div>
        <div style={{color: '#00252E', fontFamily: "Open Sans",fontSize: '16px', fontWeight: '400'}}>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </div>
      </div>

      <div style={{width: '517.222px', height: '423.111px'}}>
        <img src={grow} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Content2