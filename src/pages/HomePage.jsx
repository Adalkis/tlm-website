import MenuIcon from "../components/MenuIcon"
import Music from "../components/Music"
import SocialMedia from "../components/SocialMedia"

import {useEffect, useState} from "react"
function Home() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(function() {
   
    if (window.navigator.userAgent.match(/Android/i)
      || window.navigator.userAgent.match(/webOS/i)
      || window.navigator.userAgent.match(/iPhone/i)
      || window.navigator.userAgent.match(/iPad/i)
      || window.navigator.userAgent.match(/iPod/i)
      || window.navigator.userAgent.match(/BlackBerry/i)
      || window.navigator.userAgent.match(/Windows Phone/i)) {
      setIsMobile(true)
    } 
    else {
      setIsMobile(false)
    }
  }, [])
  return (
    <div>
      <MenuIcon isMobile={isMobile}/>
      <Music isMobile={isMobile}/>
      <SocialMedia/>
    </div>
  )
}

export default Home