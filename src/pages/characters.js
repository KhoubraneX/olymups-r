import { useState } from "react";
import { NavLink , Outlet } from "react-router-dom";

export default function Characters() {
  const [charactersInfo , setCharactersInfo] = useState([
    {
      id:0 
      , name:{avatarName:"Achilles 1",className:"Achilles"} 
      , stateInfo: {type: "Achilles" , Status: "Resting" , Rarity: "Common"} 
      , img: { icon: "Mask group-4.png" , avatar: "Achilles.png" } 
      , lvlInfo : {lvl: 2 , progress : { pross: 4 , total: 8 }} 
      , isActive: true
    },
    {
      id:1 
      , name:{avatarName:"Medusa 1" , className:"Medusa" }
      , stateInfo: {type: "Medusa" , Status: "Resting" , Rarity: "Gold"} 
      , img: { icon: "Mask group-3.png" , avatar: "Medusa.png" } 
      , lvlInfo : {lvl: 3 , progress : { pross: 6 , total: 16 }} 
      , isActive: false
    },
    {
      id:2 
      , name:{avatarName :"Medusa 2" ,  className:"Medusa"} 
      , stateInfo: {type: "Medusa" , Status: "Resting" , Rarity: "Gold"} 
      , img: { icon: "Mask group-3.png" , avatar: "Medusa.png" } 
      , lvlInfo : {lvl: 3 , progress : { pross: 4 , total: 4 }} 
      , isActive: false
    },
    {
      id:3 
      , name:{avatarName :"Sbata" , className:"Sbata" }
      , stateInfo: {type: "Sbata" , Status: "Resting" , Rarity: "Gold"} 
      , img: { icon: "Mask group-6.png" , avatar: "sbata.png" } 
      , lvlInfo : {lvl: 4 , progress : { pross: 6 , total: 10 }} 
      , isActive: false
    },
    {
      id:4 
      , name:{avatarName :"Zeus" , className:"Zeus" }
      , stateInfo: {type: "Zeus" , Status: "Resting" , Rarity: "Diamond"} 
      , img: { icon: "Mask group-1.png" , avatar: "Zeus.png" } 
      , lvlInfo : {lvl: 1 , progress : { pross: 4 , total: 6 }} 
      , isActive: false
    },
  ])
  const [activeChar , setActiveChar] = useState(charactersInfo.filter((e) => e.isActive == true)[0])

  function handelSelectChar(id_Select) {
    setActiveChar(charactersInfo.forEach((e)=> (e.id == id_Select) ? e.isActive = true : e.isActive = false))
    setActiveChar(charactersInfo.filter((e) => e.isActive == true)[0])
  }

  return (
    <div className="content">
      <div className="avatar-icons">
      {charactersInfo.map((e) => <div className={`icon ${e.name.className} ${e.isActive == true ? "active" : ""}`} onClick={()=> handelSelectChar(e.id)}><img src={require(`../assets/img/icon_character/${e.img.icon}`)} alt="" /></div>)}
      </div>
      <div className="avatar-info">
        <div className="avatar-img">
          <div className="arrows">
            <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg></div>
            <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg> </div>
          </div>
          <div className="img-av"><img className="avatar-main" src={require(`../assets/img/icon_character/avatar/${activeChar.img.avatar}`)} alt="" /></div>
        </div>
        <div className="info">
          <div className="box">
            <NavLink to={'/characters/summary'}><div className="active">Summary</div></NavLink>
            <NavLink to={'/characters/evolving'}><div className="">Evolving</div></NavLink>
            <NavLink to={'/characters/training'}><div className="">Training</div></NavLink>
          </div>
          <Outlet context={{activeChar}}/>
        </div>
      </div>
    </div>
  )
}