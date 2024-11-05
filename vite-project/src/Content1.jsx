import React from 'react'
import img2 from './assets/Group40.svg'
import img1 from './assets/Group10.svg'
import logo2 from './assets/message_logo.svg'
import logo1 from './assets/people_logo.svg'

const Content1 = () => {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',gap:'40px',paddingBottom:'171px'}}>
        <div style={{color: '#00252E',fontFamily: 'Poppins',fontSize: '48px',fontWeight: '700'}}> 
        Build The Community Your Fans Will Love
        </div>

        <div style={{width:'600px',color: '#00252E' ,fontFamily: "Open Sans", fontSize: '20px',  fontWeight: '400',textAlign:'center'}}>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. 
        </div>
        <button style={{width:'400px',height:'80px',background:'#FF52C1',color: '#FFF', fontFamily: 'Open Sans', fontSize: '20px',fontWeight: '700',borderRadius:'40px',border:'none',filter: 'dropShadow(0px 6px 13px rgba(0, 37, 46, 0.22))'
        }}>Get Started For Free</button>
        <div style={{position:'relative'}}>
            <img style={{position:'relative'}}src={img1} alt="" />
            <img style={{position:'absolute',right:'-50px',top:'210px'}} src={img2} alt="" />
        </div>

        <div style={{width: '880px',height: '222px',display:'flex',justifyContent:'center',gap:'341px',alignItems:'center',paddingTop:'200px'}}> 
            <div style={{display:'flex',flexDirection:'column'}}>
              <img style={{width:'50px',height:'50px'}} src={logo1} alt="" />

              <div style={{color: '#00252E', fontFamily: "Open Sans", fontSize: '96px' ,fontWeight: '700'}}>
                1.4k+</div>
                <div style={{color: '#808E9A',  fontFamily: "Open Sans", fontSize: '24px', fontWeight: '400', }}>Messages Sent</div>
            </div>
            <div style={{display:'flex',flexDirection:'column'}}>
              <img style={{width:'50px',height:'50px',background: 'linear-gradient(151deg, #FF52C1 10.29%, #9952FF 103.77%)'
}} src={logo2} alt="" />

              <div style={{color: '#00252E', fontFamily: "Open Sans", fontSize: '96px' ,fontWeight: '700'}}>
                2.7m+</div>
              <div style={{color: '#808E9A',  fontFamily: "Open Sans", fontSize: '24px', fontWeight: '400', }}>Messages Sent</div>
            </div>
        </div>


    </div>
  )
}

export default Content1