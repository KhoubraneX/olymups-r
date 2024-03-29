import { Dropdown } from "../components/Dropdown"
import { useEffect, useState } from "react";
import API from "../util/ApiChar"

export default function Foundry() {
  const dataStoneF = [
    { id: 0, stone: 1, houres: 2, label: "1 stone", active: true },
    { id: 1, stone: 2, houres: 4, label: "2 stone", active: true },
    { id: 2, stone: 3, houres: 6, label: "3 stone", active: true },
    { id: 3, stone: 4, houres: 8, label: "4 stone", active: true }]


  if (window.localStorage.taskesStone == undefined) {
    window.localStorage.setItem("taskesStone", JSON.stringify(API.taskesStone))
  }

  const [daySelect, setdaySelect] = useState(dataStoneF[0])
  const [stones, setStones] = useState([{}, {}, {}, {}, {}, {}])
  const [taskesStoneR, setTaskesStoneR] = useState(JSON.parse(window.localStorage.taskesStone))

  const [popUpActive, setPopUpActive] = useState(false)

  function handelSell() {
    setPopUpActive(!popUpActive)
  }

  function sellItem() {
    setPopUpActive(!popUpActive)

    let stoneU = [...stones]
    stoneU.length = stoneU.length - 1
    setStones(stoneU)
  }

  // useEffect(() => {
  //   let charactersh = [...characters];
  //   setTimeout(() => {
  //     charactersh.map(({ trainingInfo }) => {
  //       if (trainingInfo.isTrainig) {
  //         let dateNow = new Date()
  //         let dateExteped = new Date(trainingInfo.dateExteped)
  //         let dateDiff = dateExteped - dateNow
  //         let dataDate = getDate(dateDiff)

  //         let timeTrainig = { ...dataDate, ...trainingInfo.timeTrainig }
  //         let process = Math.floor(((60 / timeTrainig.minute)) * 100)
  //         trainingInfo.timeTrainig = { ...timeTrainig }
  //         trainingInfo.process = process
  //         setCharacters(charactersh)
  //         window.localStorage.characters = JSON.stringify(charactersh)

  //         if (dateDiff <= 0) {
  //           trainingInfo.isTrainig = null
  //           trainingInfo.p_givenToCh = Math.floor(Math.random() * (trainingInfo.daySelect.p_givenToCh.end - trainingInfo.daySelect.p_givenToCh.start + 1)) + trainingInfo.daySelect.p_givenToCh.start
  //           trainingInfo.timeTrainig = { ...timeTrainig }
  //           trainingInfo.process = 100
  //           setCharacters(charactersh)
  //           window.localStorage.characters = JSON.stringify(charactersh)
  //         }
  //       }
  //     })
  //   }, 1000);
  // }, [characters])

  function handelClaim(element) {
    let stoneU = [...stones]
    let taskesStoneU = [...taskesStoneR]
    let index = taskesStoneU.indexOf(element)
    taskesStoneU[index].claimed = true
    for (let i = 0; i < taskesStoneU[index].stone; i++) {
      stoneU.push({})
    }
    setTaskesStoneR(taskesStoneU)
    setStones(stoneU)
  }

  const [isStoneEvol, setIsStoneEvol] = useState(false)
  const [process, setProcess] = useState(0)
  const [timeprocess, setTimeprocess] = useState({})

  function handelStoneE() {
    if (isStoneEvol == false) {
      setIsStoneEvol(!isStoneEvol)

      let taskesStoneU = [...taskesStoneR]
      taskesStoneU.push({ id: Math.random() * 100, stone: daySelect.stone, process: { start: 0, total: daySelect.stone }, isTimeTrainig: true, timeTrainig: { houres: 0, minute: 0 }, timeExteped: null, claimed: false })

      setTaskesStoneR(taskesStoneU)

      let date = new Date(), dateDown = new Date()

      dateDown.setHours(date.getHours() + daySelect.houres)

      const countre = setInterval(() => {
        let dateNow = new Date()

        let dateDiff = dateDown - dateNow

        let houres = Math.floor(dateDiff / (1000 * 60 * 60))
        let minute = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60))
        let timeTrainigs = { houres, minute }
        taskesStoneU[taskesStoneU.length - 1].timeTrainig = timeTrainigs
        setTaskesStoneR(taskesStoneU)

        setProcess(Math.floor(((60 / timeTrainigs.minute)) * 100))

        if (dateDiff <= 0) {
          clearInterval(countre)
          setIsStoneEvol(!isStoneEvol)
        }
      }, 1000)
    }
  }

  return (
    <>
      <div className="content">
        <div className={`popup popup--icon -success js_success-popup ${popUpActive && "popup--visible"}`}>
          <div className="popup__background"></div>
          <div className="popup__content">
            <h3 className="popup__content__title">
              you want to sell this stone ?
            </h3>
            <p>
              <button className="button button--success" onClick={sellItem} data-for="js_success-popup">YES</button>
              <button className="button button--falid" onClick={handelSell} data-for="js_success-popup">NO</button>
            </p>
          </div>
        </div>

        <div className="main-foundry">
          <div className="foundry-box">
            <div className="foundry">
              <p className="title">The Foundry</p><img src={require("../assets/img/icon_foundry/Asset 1@4x 7.png")} alt="" />
              <div className="info">
                <div className="process-box">
                  <p>460/100</p>
                  <div className="process-f">
                    <div className="process-line-f"></div>
                  </div>
                  <p className="desc">You need 100 Powder to create 1 Evolving stone.</p>
                  <p className="desc-n">The Foundry takes <span>8 hours</span> to create from 1 to 10 stones.</p>
                </div>
              </div>
              <div className="line"> </div>
              <div className="stone-create-box">
                <p>Create:</p>
                <div className="select_mate">
                  <Dropdown data={dataStoneF} stateDay={[daySelect, setdaySelect]} />
                </div>
                <div className="btn-def">
                  <button className={`${isStoneEvol && "desctive"}`} onClick={handelStoneE}>Start</button>
                </div>
              </div>
            </div>
            <div className="Stone-progress">
              <p className="title">Stone Progress</p>
              {taskesStoneR.map((e) => {
                return (
                  <div key={e.id} className={`info ${e.claimed && "claimed"}`}>
                    <div className="process-box">
                      <div className="content">
                        {!e.isTimeTrainig ? <p>{e.stone} stones completed</p> : <p>{e.stone} stones in progress</p>}
                        {!e.isTimeTrainig ? <div className="btn-def">
                          {e.claimed ? <button>Claimed</button> : <button onClick={() => handelClaim(e)}>Claim</button>}
                        </div> : <div className="time">{e.timeTrainig.houres} : {e.timeTrainig.minute}</div>}
                      </div>
                      <div className="process-f">
                        <div className="process-line-f" style={{ width: `${(e.process.start / e.process.total) * 100}%` }}></div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="evolving-stones-detail">
            <p>Evolving Stones ({stones.length})</p>
            <div className="stones">
              {stones.length != 0 && <div className="arrows">
                <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg></div>
                <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg> </div>
              </div>}
              {stones.map((e, i) => {
                return (
                  <div className="stone" key={i}><img src={require("../assets/img/icon_foundry/Asset 1@4x 7.png")} alt="" />
                    <div className="btn-def">
                      <button onClick={handelSell}>Sell</button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}