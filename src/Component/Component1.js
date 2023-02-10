import React from 'react'
import video1 from './Asset/1.mp4'
import "./Style.css"
const Component1 = () => {
  return (
    <>
     <p className='host'>(Host)</p>
        <video className='firstpage' controls autoPlay="true">
            <source src={video1} type='video/mp4'/>
        </video>
    </>
  )
}

export default Component1;