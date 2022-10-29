export default function Headers() {
    return (
        <div className="header">
          <div className="content-header">
            <div className="nav-btn def">
              <button className="nav-button cross-button" type="button" id="toggle-button" aria-label="open/close navigation"></button>
            </div>
            <div className="gold"><img src={require("../assets/img/Oly_Gold_Coin_Transparent_Shine 1.png")} alt=""/>
              <p>3700</p>
            </div>
            <div className="green-diamond"><img src={require("../assets/img/Asset 1@4x 1.png")} alt=""/>
              <p>6</p>
            </div>
            <div className="blueviolet-diamond"><img src={require("../assets/img/Asset 3@4x 2.png")} alt=""/>
              <p>460</p>
            </div>
            <div className="id"> 
              <p>0xf7ds...654e</p>
            </div>
          </div>
        </div>
    )
}