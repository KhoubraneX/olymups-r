import { Dropdown } from "../components/Dropdown";
import { useOutletContext } from "react-router-dom";
import ImgAvatar from "./ImgAvatar";
import { useEffect, useState } from "react";

export default function Training() {
  const { activeChar, status } = useOutletContext();
  const { name, img, trainingInfo } = activeChar
  const [characters, setCharacters] = status()

  const dataDaysE = [
    { id: 0, day: 1, label: "1 day", p_givenToCh: { start: 10, end: 80 } },
    { id: 1, day: 2, label: "2 days", p_givenToCh: { start: 40, end: 120 } },
    { id: 2, day: 3, label: "3 days", p_givenToCh: { start: 60, end: 240 } }
  ]

  const [daySelect, setdaySelect] = useState(dataDaysE[0])

  function handelTrainigsend() {
    let charactersh = [...characters]
    let index = charactersh.indexOf(activeChar)
    charactersh[index].trainingInfo.isTrainig = true
    setCharacters(charactersh)
  }

  function getDate(dateDiff) {
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24))
    let houres = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minute = Math.floor(dateDiff / 1000 / 60)
    return { days, houres, minute }
  }

  useEffect(() => {
    let charactersh = [...characters];
    setTimeout(() => {
      charactersh.map(({ trainingInfo }) => {
        if (trainingInfo.isTrainig) {
          let dateNow = new Date()
          let dateExteped = new Date(trainingInfo.dateExteped)
          let dateDiff = dateExteped - dateNow
          let dataDate = getDate(dateDiff)

          let timeTrainig = { ...dataDate, ...trainingInfo.timeTrainig }
          let process = Math.floor(((60 / timeTrainig.minute)) * 100)
          trainingInfo.timeTrainig = { ...timeTrainig }
          trainingInfo.process = process
          setCharacters(charactersh)
          window.localStorage.characters = JSON.stringify(charactersh)

          if (dateDiff <= 0) {
            trainingInfo.isTrainig = null
            trainingInfo.p_givenToCh = Math.floor(Math.random() * (trainingInfo.daySelect.p_givenToCh.end - trainingInfo.daySelect.p_givenToCh.start + 1)) + trainingInfo.daySelect.p_givenToCh.start
            trainingInfo.timeTrainig = { ...timeTrainig }
            trainingInfo.process = 100
            setCharacters(charactersh)
            window.localStorage.characters = JSON.stringify(charactersh)
          }
        }
      })
    }, 1000);
  }, [characters])

  function handelTrainig() {
    let charactersh = [...characters]
    let index = charactersh.indexOf(activeChar)
    if (!charactersh[index].trainingInfo.dateExteped) {
      let date = new Date(), dateDown = new Date()
      dateDown.setDate(date.getDate() + daySelect.day)
      charactersh[index].trainingInfo.dateExteped = dateDown
    }

    (() => {
      setInterval(() => {
        let dateNow = new Date()
        let dateDiff = charactersh[index].trainingInfo.dateExteped - dateNow

        let dataDate = getDate(dateDiff)
        let timeTrainig = { ...dataDate, dateDiff }

        charactersh[index].trainingInfo.timeTrainig = { ...timeTrainig }
        charactersh[index].trainingInfo.daySelect = { ...daySelect }
        charactersh[index].trainingInfo.process = Math.floor(((60 / timeTrainig.minute)) * 100)
        setCharacters(charactersh)
        window.localStorage.characters = JSON.stringify(charactersh)
      })
    })()
  }

  function handelClaim_Tr() {
    let charactersh = [...characters]
    let index = charactersh.indexOf(activeChar)
    let trainingInfoREfrech = {
      isTrainig: false,
      timeTrainig: { days: 0, houres: 0 },
      dateExteped: null,
      p_givenToCh: 0,
      process: 0,
      daySelect: { id: null, day: null, label: null, p_givenToCh: { start: null, end: null } }
    }
    charactersh[index].trainingInfo = { ...trainingInfoREfrech }
    setCharacters(charactersh)
    window.localStorage.characters = JSON.stringify(charactersh)
  }

  return (
    <>
      <div className="detail-av Training">
        <ImgAvatar img={img.avatar} />
        <div className="name">
          <p>{name.avatarName}</p>
        </div>
        <div className="status">
          <div className="Evolve">
            <p className="desc-Evolve">Send your character training and he’ll come back with evolving powder.</p>
            <div className="line"></div>
            <p className="desc-t-days">{trainingInfo.isTrainig === false && 'Send to training for:'}</p>
            {trainingInfo.isTrainig === false && <div className="select char">
              <div className="select_mate">
                <Dropdown data={dataDaysE} stateDay={[daySelect, setdaySelect]} />
              </div>
              <div className="desc-time">Training {name.avatarName} for <span>{daySelect.label}</span> will give you between <span>{daySelect.p_givenToCh.start} and {daySelect.p_givenToCh.end}</span> evolving powder.</div>
              <div className="btn-def">
                <button onClick={() => { handelTrainig(); handelTrainigsend(); }}>Send to training</button>
              </div>
            </div>}

            {trainingInfo.isTrainig === true && <div className="training-status">
              <div className="process-detail">
                <div className="level-process">
                  <p>Training</p>
                  <p>{trainingInfo.timeTrainig.days > 0 && trainingInfo.timeTrainig.days + "d"} {trainingInfo.timeTrainig.houres > 0 && trainingInfo.timeTrainig.houres + "h"}</p>
                </div>
                <div className={trainingInfo.isTrainig ? "line-process active" : "active"}>
                  <div style={{ width: `${trainingInfo.process <= 100 ? trainingInfo.process : 100}%` }} className="process"></div>
                </div>
              </div>
              
              {trainingInfo.timeTrainig.houres >= 0 && <div className="desc-time">Training {name.avatarName} for <span>{daySelect.label}</span> will give you between <span>{daySelect.p_givenToCh.start} and {daySelect.p_givenToCh.end}</span> evolving powder.</div>}
            </div>}
            {trainingInfo.isTrainig === null && <div className="training-status">
              <div className="process-detail">
                <div className="level-process">
                  <p>{`You got ${trainingInfo.p_givenToCh} powder`}</p>
                  <div className="btn-def">
                    <button onClick={handelClaim_Tr}>Claim</button>
                  </div>
                </div>
                <div className="line-process">
                  <div style={{ width: `${trainingInfo.process <= 100 ? trainingInfo.process : 100}%` }} className="process"></div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}