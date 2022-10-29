import { Dropdown } from "../components/Dropdown";
import { useOutletContext } from "react-router-dom";

export default function Training() {
  const {activeChar} = useOutletContext();
    return (
        <div className="detail-av Training"> 
                <div className="avatar-img">
                  <div className="arrows">
                    <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg></div>
                    <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg> </div>
                  </div>
                  <div className="img-av"><img className="avatar-main" src={require(`../assets/img/icon_character/avatar/${activeChar.img.avatar}`)} alt=""/></div>
                </div>
                <div className="name">
                  <p>{activeChar.name.avatarName}</p>
                </div>
                <div className="status">
                  <div className="Evolve">
                    <p className="desc-Evolve">You need 8 evolving stones to upgrade {activeChar.name.avatarName} to level {activeChar.lvl + 1}.</p>
                    <div className="line"></div>
                    <p className="desc-t-days">Send to training for:</p>
                    <div className="select char">
                      <div className="select_mate">
                        <Dropdown/>
                      </div>
                      <div className="desc-time">Training Achilles 1 for <span>3 days</span> will give you between <span>60 and 240</span> evolving powder.</div>
                      <div className="btn-def">
                        <button>Send to training</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    )
}