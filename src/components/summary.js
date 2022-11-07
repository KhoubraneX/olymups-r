import { Link, useOutletContext } from "react-router-dom";
import ImgAvatar from "./ImgAvatar";
export default function Summary() {

  const { activeChar , N_ChangeValue , isChnaged , onHandel_N_Change , onHandel_N_Click , onHandel_N_Valid } = useOutletContext()
  const { name , lvlInfo , stateInfo , img }  = activeChar

  return (
      <div className="detail-av Summary"> 
              <ImgAvatar img={img.avatar} />
              <div className="name">
                {isChnaged == false && <><p>{name.avatarName}</p><img className="icon-edit" onClick={onHandel_N_Click} src={require("../assets/img/pen@4x 1.png")} /></>}
                {isChnaged == true && <div className="Ch-name">
                  <input className="chAvatar-name" onChange={onHandel_N_Change} placeholder={name.avatarName} type="text" />
                  <button style={{opacity: N_ChangeValue ? N_ChangeValue.trim() == "" ? 0.2 : 1 : 0.2}}><img src={require("../assets/img/Asskdjadet 1@4x 1.png")} onClick={onHandel_N_Valid}/></button>
                  <button><img src={require("../assets/img/x icon@4x 1.png")} onClick={onHandel_N_Click}/></button>
                </div>}
              </div>
              <div className="process-detail">
                <div className="level-process">
                  <p>LVL {lvlInfo.lvl}</p>
                  <p>{lvlInfo.progress.pross}/{lvlInfo.progress.total}</p>
                </div>
                <div className="line-process">
                  <div style={{width:`${(lvlInfo.progress.pross/lvlInfo.progress.total)*100}%`}} className="process"></div>
                </div>
              </div>
              <div className="status">
                <p>Type:{stateInfo.type}</p>
                <p>Rarity:{stateInfo.Rarity}</p>
                <p>Status:{stateInfo.Status}</p>
                <div className="btn-sell btn-def">
                  <button><Link to={'/Marketplace'}>Sell on the Marketplace</Link></button>
                </div>
              </div>
            </div>
  )
}