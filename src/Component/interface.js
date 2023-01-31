import './Style.css'
import headimg from './Asset/logo.jpg'

function Interface(){
    return(
        <>
            <div className="heading">
                <img src={headimg} className="img"/>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                <div className='invite'>
                    <span className='plus'>+</span>
                    <span className='plus'>Invite</span>
                </div>
            </div>
        </>
    )
}

export default Interface;