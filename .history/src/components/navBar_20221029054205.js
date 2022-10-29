import { NavLink } from "react-router-dom"

// icon
import descord_icon from "../assets/img/descord 1@4x 1.svg"
import telegram_icon from "../assets/img/telegram@4x 1.svg"
import twitter_icon from "../assets/img/Twitter_icon 1.svg"

export default function NavBar({showNavBar , showDropdown}) {
    return (
        <div className={`navBar ${showNavBar ? "active-nav" : ""}`}>
        <div className="section container">
          <div className="header">
            <div className="content-header">
              <div className="nav-btn" onClick={showDropdown}>
                <button className="nav-button cross-button" type="button" id="toggle-button" aria-label="open/close navigation"></button>
              </div>
              <div className="gold">
                <img src={require("../assets/img/Oly_Gold_Coin_Transparent_Shine 1.png")} alt=""/>
                <p>3700</p>
              </div>
              <div className="green-diamond">
                <img src={require("../assets/img/Asset 1@4x 1.png")} alt=""/>
                <p>6</p>
              </div>
              <div className="blueviolet-diamond">
                <img src={require("../assets/img/Asset 3@4x 2.png")} alt=""/>
                <p>460</p>
              </div>
              <div className="id"> 
                <p>0xf7ds...654e</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line-nav">
          <div className="line"></div>
        </div>
        <div className="nav-fillter">
          <div className="btn-fillter">
              <NavLink className="btn" to="home" >
                <p>home</p>
              </NavLink>
              <NavLink className="btn" to="characters">
                <p>my characters</p>
              </NavLink>
              <NavLink className="btn" to="chests">
                <p>my chests</p>
              </NavLink>
              <NavLink className="btn" to="foundry">
                <p>the foundry</p>
              </NavLink>
              <NavLink className="btn" to="marketplace">
                <p>marketplace</p>
              </NavLink>
          </div>
        </div>
        <div className="line-nav">
          <div className="line"></div>
        </div>
        <div className="smm-box">
          <div className="smm">
            <a href="#">
                <img src={descord_icon} alt=""/>
            </a>
            <a href="#">
                <img src={telegram_icon} alt=""/>
            </a>
            <a href="#">
                <img src={twitter_icon} alt=""/>
            </a>
            </div>
          <div className="btn-disc">
            <p>Disconnect</p>
            <ion-icon name="power"></ion-icon>
          </div>
        </div>
      </div>
    )
}