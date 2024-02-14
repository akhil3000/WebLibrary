import React from "react";
import { Footer } from 'flowbite-react';
import { BsDiscord, BsLinkedin, BsYoutube,BsTelegram} from 'react-icons/bs'; 
import "../App.css";   

const Footerx=()=>{
  const getYear=()=> {
    return new Date().getFullYear();
  }
    return(
    <>
    <Footer container>
      <div className="FooterHead">
      <div className="Footer">
          <Footer.Copyright href="#" by="WebLibrary™" year={getYear()} className="year"/>
          <div className="Footer2">
            <Footer.Icon href="https://discord.gg/erSBYrXp84" icon={BsDiscord} />
            <Footer.Icon href="https://www.linkedin.com/in/akhil-polisetty-b09b8b192/" icon={BsLinkedin} />
            <Footer.Icon href="https://www.youtube.com/@akhilpolisetty" icon={BsYoutube} />
            <Footer.Icon href="https://t.me/+4tZnvg47-akyNzY1" icon={BsTelegram} />

          </div>
        </div>
      </div>
    </Footer>

    </>
    )
}
export default Footerx;
