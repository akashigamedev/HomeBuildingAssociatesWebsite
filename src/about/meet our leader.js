import React from 'react'

export default function Leader() {
  return (
<div style={{backgroundColor:"var(--clr-secondary)", paddingTop:'60px'}}>
  
    <div style={{marginLeft:'100px', marginRight:'100px'}}>
        <div>
            <h2 style={{textAlign:'center'}}>
                Meet Our Leader
            </h2>
            <h4 style={{textAlign:'center',marginLeft:'120px', marginRight:'120px', marginBottom:'50px'}}>
            Our leaders are seasoned professionals with a passion for innovative design 
            and a commitment to excellence. They guide our team to deliver outstanding 
            results for every project.
            </h4>
        </div>

        <div style={{display:'flex', gap:'3rem', marginLeft:'100px', paddingBottom:'60px'}}>
        <div style={{width:'20%',textAlign:'center'}}>
          <img style={{marginLeft:'auto', marginRight:'auto'}} src="/assets/images/4.png"/>
          <h4>Jitendra Goyal</h4>
          <p>CEO</p>
        </div>

        <div style={{width:'20%',textAlign:'center'}}>
          <img style={{marginLeft:'auto', marginRight:'auto'}} src="/assets/images/5.png"/>
          <h4>Babita Goyal</h4>
          <p>CEO</p>
        </div>

        <div style={{width:'20%',textAlign:'center'}}>
          <img style={{marginLeft:'auto', marginRight:'auto'}} src="/assets/images/6.png"/>
          <h4>Yogendra Goyal</h4>
          <p>Civil Engineer</p>
        </div>

        <div style={{width:'20%',textAlign:'center'}}>
          <img style={{marginLeft:'auto', marginRight:'auto'}} src="/assets/images/7.png"/>
          <h4>Kritika Shukla</h4>
          <p>3d Artist</p>
        </div>

        </div>        
</div>
    </div>
  )
}
