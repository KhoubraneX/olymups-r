import { Link, useOutletContext } from "react-router-dom";
import ImgAvatar from "./ImgAvatar";

export default function Evolving() {
  const { activeChar, status } = useOutletContext();
  const { name, lvlInfo, img } = activeChar
  const [characters, setCharacters] = status()

  function handelLevelUp(e) {
    if ((lvlInfo.progress.pross / lvlInfo.progress.total) == 1) {
      let activeCharupdate = { ...activeChar }
      let newCharacters = [...characters]
      activeCharupdate.lvlInfo.lvl = activeCharupdate.lvlInfo.lvl + 1
      activeCharupdate.lvlInfo.progress.pross = 0
      activeCharupdate.lvlInfo.progress.total = activeCharupdate.lvlInfo.progress.total * 2
      setCharacters(newCharacters)
      window.localStorage.characters = JSON.stringify(characters)
    }
  }

  return (
    <div className="detail-av Evolving">
      <ImgAvatar img={img.avatar} />
      <div className="name">
        <p>{name.avatarName}</p>
      </div>
      <div className="process-detail">
        <div className="level-process">
          <p>LVL {lvlInfo.lvl}</p>
          <p>{lvlInfo.progress.pross}/{lvlInfo.progress.total}</p>
        </div>
        <div className="line-process">
          <div className="process" style={{ width: `${(lvlInfo.progress.pross / lvlInfo.progress.total) * 100}%` }}></div>
        </div>
      </div>
      <div className="status">
        <div className="btn-Evolve btn-def">
          <button className={(lvlInfo.progress.pross / lvlInfo.progress.total) == 1 ? "active" : "desactive"} onClick={handelLevelUp}>Evolve to Level {lvlInfo.lvl + 1}</button>
        </div>
        <div className="Evolve">
          <p className="desc-Evolve">You need {lvlInfo.progress.total} evolving stones to upgrade {name.avatarName} to level {lvlInfo.lvl + 1}.</p>
          <div className="line"></div>
        </div>
        <div className="stones">
          <p>Speed up evolving:</p>
          <div className="btn-stones btn-def">
            <Link to={"/foundry"}><button className="make">Make Stones</button></Link>
            <Link to={"/foundry"}><button className="purchase">Purchase Stones</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}