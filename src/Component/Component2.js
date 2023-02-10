import React from 'react'
import video1 from './Asset/1.mp4'
import video2 from './Asset/2.mp4'
import "./Style.css"
const Component2 = () => {
    return (
        <>

            <p className='host'>(Host)</p>
            <div className='component2'>
                <video className='secondpage' controls autoPlay="true">
                    <source src={video1} type='video/mp4' />
                </video>
                <video className='secondpage' controls autoPlay="true">
                    <source src={video2} type='video/mp4' />
                </video>
            </div>

        </>
    )
}

export default Component2