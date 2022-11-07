import { useState } from "react"
import { Link } from "react-router-dom"
import API from "../util/ApiChar"
export default function Chests() {

  if (window.localStorage.chests == undefined) {
    window.localStorage.setItem("chests", JSON.stringify(API.chests))
  }

  const [popUpActive, setPopUpActive] = useState(false)
  const [chests, setChests] = useState(JSON.parse(window.localStorage.chests))
  const [selectBox, setSelectBox] = useState(chests.length != 0 ? chests[0] : [])



  function handelClickPop(e) {
    setPopUpActive(!popUpActive)
    setSelectBox(e)
  }

  function handelunClickPop() {
    let updateChest = [...chests]
    setPopUpActive(!popUpActive)
    updateChest = updateChest.filter((e) => e.name.box != selectBox.name.box)
    window.localStorage.chests = JSON.stringify(updateChest)
    setChests(updateChest)
  }

  if (chests.length != 0) {
    return (
      <div className="content">
        <div className={`popup popup--icon -success js_success-popup ${popUpActive && "popup--visible"}`}>
          <div className="popup__background"></div>
          <div className="popup__content">
            <div className="img-i">
              <img src={require(`../assets/img/icon_chest/${selectBox.img.box}`)} alt="" />
              <img src={require("../assets/img/icon_chest/XZ5V.gif")} alt="" />
            </div>
            <h3 className="popup__content__title">
              {selectBox.name.box}
            </h3>
            <p>
              <button className="button button--success" onClick={handelunClickPop} data-for="js_success-popup">OK</button>
            </p>
          </div>
        </div>

        <div className="box-chests">
          {chests.map(e => {
            return (
              <div key={e.name.class} className={`chest ${e.name.class}`}>
                <div className="icon-chest">
                  <div className="img">
                    <svg className="icon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill={e.color_icon} data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z" /><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z" /></g></svg>
                    <img src={require(`../assets/img/icon_chest/${e.img.box}`)} alt="" />
                  </div>
                </div>
                <div className="detail-chest">
                  <p>{e.name.box}</p>
                  <div className="btn-def">
                    <button className="open" onClick={() => handelClickPop(e)}>Open</button>
                    <Link to="/Marketplace"><button className="sell">Sell</button></Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }else {
    return (
    <div className="content">
      <div className="main-message">
        <h2 className="message-ch">NO CHEST FOUND :)</h2>
      </div>
    </div>
    )
    }
}