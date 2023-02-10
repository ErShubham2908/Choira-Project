import React from 'react'
import "./Style.css"
import video1 from './Asset/1.mp4'
import video2 from './Asset/2.mp4'
const Component3 = () => {
    return (
        <div>
            <p className='host'>(Host)</p>
            <div className='component3'>
                <video className='thirdpage1' controls autoPlay="true">
                    <source src={video1} type='video/mp4' />
                </video>
                <video className='thirdpage2' controls  autoPlay="true">
                    <source src={video2} type='video/mp4' />
                </video>
                <video className='thirdpage3' controls autoPlay="true">
                    <source src={video1} type='video/mp4' />
                </video>
            </div>

        </div>
    )
};

export default Component3