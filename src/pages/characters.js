import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import API from "../util/ApiChar"
import ImgAvatar from "../components/ImgAvatar";

export default function Characters() {

  if (window.localStorage.characters == undefined) {
    window.localStorage.setItem("characters", JSON.stringify(API.characters))
  }

  const [charactersInfo, setCharactersInfo] = useState(JSON.parse(window.localStorage.characters))
  const [activeChar, setActiveChar] = useState(charactersInfo.filter((e) => e.isActive == true)[0])
  // handel name change
  const [N_Change, setN_Change] = useState(false)
  const [N_ChangeValue, setN_ChangeValue] = useState(false)

  function handelSelectChar(id_Select) {
    let Characters = [...charactersInfo]
    Characters.forEach((e) => e.id == id_Select ? e.isActive = true : e.isActive = false)
    setActiveChar(charactersInfo.filter((e) => e.isActive == true)[0])
    setCharactersInfo(Characters)
    
  }


  function handel_N_Click() {
    setN_Change(!N_Change)
  }

  function handel_N_Change({ target: input }) {
    let { value } = input
    setN_ChangeValue(value)
  }

  function handel_N_Valid() {
    let Characters = [...charactersInfo]
    if (N_ChangeValue.trim() != "") {
      Characters.forEach((e) => {
        if (e.id == activeChar.id) {
          e.name.avatarName = N_ChangeValue
        }
      })
      setN_Change(!N_Change)
      setN_ChangeValue("")
    }
    window.localStorage.characters = JSON.stringify(Characters)
  }

  return (
    <div className="content">
      <div className="avatar-icons">
        {charactersInfo.map((e) => <div key={e.id} className={`icon ${e.name.className} ${e.isActive == true ? "active" : ""}`} onClick={() => handelSelectChar(e.id)}>
          <img src={require(`../assets/img/icon_character/${e.img.icon}`)} alt="" />
        </div>)}
      </div>
      <div className="avatar-info">
        <ImgAvatar img={activeChar.img.avatar} />
        <div className="info">
          <div className="box">
            <NavLink to={'/characters/summary'}><div>Summary</div></NavLink>
            <NavLink to={'/characters/evolving'}><div>Evolving</div></NavLink>
            <NavLink to={'/characters/training'}><div>Training</div></NavLink>
          </div>
          <Outlet context={{ activeChar, status: () => [charactersInfo, setCharactersInfo], isChnaged: N_Change, N_ChangeValue, onHandel_N_Valid: handel_N_Valid, onHandel_N_Change: handel_N_Change, onHandel_N_Click: handel_N_Click }} />
        </div>
      </div>
    </div>
  )
}