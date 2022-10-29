import { useOutletContext } from "react-router-dom";
export default function Evolving() {
  const {activeChar} = useOutletContext();
    return (
        <div className="detail-av Evolving"> 
                <div className="avatar-img">
                  <div className="arrows">
                    <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg></div>
                    <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg> </div>
                  </div>
                  <div className="img-av"><img className="avatar-main" src={require(`../assets/img/icon_character/avatar/${activeChar.img.avatar}`)} alt=""/></div>
                </div>
                <div className="name">
                  <p>{activeChar.name.avatarName}</p>
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
                  <div className="btn-Evolve btn-def">
                    <button>Evolve to Level {activeChar.lvlInfo.lvl + 1}</button>
                  </div>
                  <div className="Evolve">
                    <p className="desc-Evolve">You need 8 evolving stones to upgrade {activeChar.name.avatarName} to level {activeChar.lvlInfo.lvl + 1}.</p>
                    <div className="line"></div>
                  </div>
                  <div className="stones">
                    <p>Speed up evolving:</p>
                    <div className="btn-stones btn-def">
                      <button className="make">Make Stones</button>
                      <button className="purchase">Purchase Stones</button>
                    </div>
                  </div>
                </div>
              </div>
    )
}