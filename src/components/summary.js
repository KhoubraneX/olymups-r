
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
export default function Summary() {
  const {activeChar} = useOutletContext();
    return (
        <div className="detail-av Summary"> 
                <div className="avatar-img">
                  <div className="arrows">
                    <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg></div>
                    <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg> </div>
                  </div>
                  <div className="img-av"><img className="avatar-main" src={require(`../assets/img/icon_character/avatar/${activeChar.img.avatar}`)} alt=""/></div>
                </div>
                <div className="name">
                  <p>{activeChar.name.avatarName}</p><svg className="icon-edit" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Pencil</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"/></svg>
                </div>
                <div className="process-detail">
                  <div className="level-process">
                    <p>LVL {activeChar.lvlInfo.lvl}</p>
                    <p>{activeChar.lvlInfo.progress.pross}/{activeChar.lvlInfo.progress.total}</p>
                  </div>
                  <div className="line-process">
                    <div className="process"></div>
                  </div>
                </div>
                <div className="status">
                  <p>Type:{activeChar.stateInfo.type}</p>
                  <p>Rarity:{activeChar.stateInfo.Rarity}</p>
                  <p>Status:{activeChar.stateInfo.Status}</p>
                  <div className="btn-sell btn-def">
                    <button>Sell on the Marketplace</button>
                  </div>
                </div>
              </div>
    )
}