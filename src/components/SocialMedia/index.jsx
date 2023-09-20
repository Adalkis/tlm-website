import facebook from "../../assets/facebook.png"
import tiktok from "../../assets/tiktok.png"
import instagram from "../../assets/instagram.png"

import "./index.css"
function index() {
  return (
    <div className="wrapperSocialMedia">
        <a 
            href="https://www.instagram.com/tellmysons/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img src={facebook}/>
        </a>
        <a 
            href="https://www.tiktok.com/@tellmysons" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img src={tiktok}/>
        </a>
        <a 
            href="https://www.instagram.com/tellmysons/" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <img src={instagram}/>
        </a>
    </div>
  )
}

export default index