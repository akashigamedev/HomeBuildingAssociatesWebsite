import React from 'react'
import './card.css';

export default function Card() {
  return (
    <div style={{marginLeft:'100px', marginRight:'100px'}}>
      <div style={{marginBottom:'50px'}}>
      <h2 style={{textAlign:'center', marginBottom:'10px' }}>Why Choose Us?</h2>
      <h4 style={{textAlign:'center',marginLeft:'120px', marginRight:'120px' }}>Partner with us for expert consultation, personalized designs
        , and cutting-edge 3D visualizations. We ensure sustainable, 
        cost-effective solutions to bring your vision to life.</h4>
        </div>

<div style={{display:'flex', flexDirection:'column', gap:'2rem'}}>

<div style={{display:'flex', flexDirection:'row', gap:'2rem'}}>
    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div><img src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>expert consultation</h4>
        </div>  
    </div>


    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div><img src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>Custmized Designs</h4>
        </div>   
    </div>


    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div><img style={{marginRight:'50px', marginLeft:'70px'}} src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>3D Visulization</h4>
        </div>   
    </div>
 </div>


 <div>
 <div style={{display:'flex', flexDirection:'row', gap:'2rem', marginBottom:"100px"}}>
    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div><img style={{marginLeft:'120px'}} src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>Comprehensive Planning</h4>
        </div>  
    </div>


    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div><img src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>Sustaniable Solution</h4>
        </div>   
    </div>


    <div className='container' style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
        <div ><img style={{marginRight:'50px'}} src = "/assets/images/1.jpeg" alt="this is an image"/>
        <h4>Budget Optimization</h4>
        </div>   
    </div>
 </div> 
 </div>

 </div>

    </div>
  )
}
 