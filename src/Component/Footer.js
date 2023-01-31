import './Style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpeaker } from '@fortawesome/free-solid-svg-icons'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

function Footer(){
    return(
        <>
            <div className='Upper'>
                <div className='footer'>
                    <div className='first-footer'>
                        <table className='table'>
                            <td>0004<div>Bar</div></td>
                            <td>0004 <div>Beat</div></td>
                            
                            <td>-  120  + <div>Tempo</div></td>
                            
                            <td>4/4 <div>Cmaj</div> </td>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;