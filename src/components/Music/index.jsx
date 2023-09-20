import youtube from "../../assets/youtube.png"
import appleMusic from "../../assets/appleMusic.png"
import spotify from "../../assets/spotify.png"

import "./index.css"
function index({isMobile}) {
  return (
    <div className="wrapperMusic">
        {!isMobile && <h1 className="title">LISTEN NOW</h1>}
        <div className="wrapperMusicIcon">
            {isMobile && <h1 className="title">LISTEN NOW</h1>}
            <div>
              <a 
                href="https://www.youtube.com/channel/UCIQxxIBb2xXdxGYGoABbhXQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={youtube}/>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCIQxxIBb2xXdxGYGoABbhXQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={appleMusic}/>
              </a>
              <a 
                href="https://www.youtube.com/channel/UCIQxxIBb2xXdxGYGoABbhXQ" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={spotify}/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default index