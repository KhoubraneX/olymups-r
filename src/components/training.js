import { Dropdown } from "../components/Dropdown";
import { useOutletContext } from "react-router-dom";
import ImgAvatar from "./ImgAvatar";
import { useState } from "react";

export default function Training() {
  const {activeChar} = useOutletContext();
  const { name , lvlInfo , stateInfo , img }  = activeChar

  const dataDaysE = [{id: 0, day:1 , label: "1 day" , p_givenToCh:{start : 10 , end : 80}},
                    {id: 1, day:2 , label: "2 days" , p_givenToCh:{start : 40 , end : 120}} , 
                    {id: 2, day:3 , label: "3 days" , p_givenToCh:{start : 60 , end : 240}}]

  const [kali  , setKali] = useState(0)
    return (
        <div className="detail-av Training"> 
                <ImgAvatar img={img.avatar} />
                <div className="name">
                  <p>{name.avatarName}</p>
                </div>
                <div className="status">
                  <div className="Evolve">
                    <p className="desc-Evolve">You need 8 evolving stones to upgrade {name.avatarName} to level {lvlInfo.lvl + 1}.</p>
                    <div className="line"></div>
                    <p className="desc-t-days">Send to training for:</p>
                    <div className="select char">
                      <div className="select_mate">
                        <Dropdown data={dataDaysE} state={[kali , setKali]}/>
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