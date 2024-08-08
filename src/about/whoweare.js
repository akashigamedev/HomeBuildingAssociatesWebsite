import React from 'react'

export default function Whoweare() {
  return (
<div>
<h1 style={{textAlign:'center'}}>ABOUT US</h1>
<div style={{margin:'150px', marginBottom:'80px'}} >

  <div style={{display:'flex', flexDirection:'column', gap:'6rem'}}>
        
        <div style={{display:'flex', gap:'10rem'}}>
        
        <div style={{width:'46%'}}>
        
        <h3>Who we are?</h3>
            <h4>Home Building Associates is a team of architects, civil engineers,
             interior designers and a lot of software engineers who love designing, 
             who love construction, who love seeing a idea turn into a beautiful home.
              We are working this field in the last 15 years. We are based on Kanpur, 
              Uttar Pradesh Company and providing Our Services in all over India with very reasonable Costing.
              </h4>
              
    </div>
    <div style={{width:'500px' ,height:'400px', float:'right'}}>
        <img src = "/assets/images/2.png" alt="this is an image"/>
        </div>
    </div>

    <div style={{display:'flex', gap:'10rem'}}>
   
    <div style={{width:'600px' ,height:'400px', float:'right'}}>
        <img src = "/assets/images/3.png" alt="this is an image"/>
        </div>
        <div style={{width:'46%'}}>
        
        <h3>Our mission</h3>
            <h4>One of the biggest achievements in life is considered to be building one’s own house. 
                Whether you are building a home on a plot or have recently purchased an apartment flat, 
                Home Building Associates (HBA) helps you with all your planning and design needs without 
                needing a time consuming and expensive visit to an engineer or a designer.
              </h4>
              
    </div>
    
    </div>
 </div>
    </div>   
    </div>
  )
}
