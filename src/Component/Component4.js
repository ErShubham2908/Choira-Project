import React from 'react'
import video2 from './Asset/2.mp4'
import video1 from './Asset/1.mp4'

import "./Style.css"
const Component4 = () => {
    return (

        <div>
            <p className='host'>(Host)</p>
            <div className='component4'>
                <video className='fourthpage1' controls autoPlay="true">
                    <source src={video1} type='video/mp4' />
                </video>
                <video className='fourthpage2' controls autoPlay="true">
                    <source src={video2} type='video/mp4' />
                </video>
                <video className='fourthpage3' controls autoPlay="true">
                    <source src={video2} type='video/mp4' />
                </video>
                <video className='fourthpage3' controls autoPlay="true">
                    <source src={video1} type='video/mp4' />
                </video>
            </div>

        </div>
    )
}

export default Component4