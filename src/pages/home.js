export default function Home() {
  return (
    <div className="content">
          <div className="hero">
            <div className="hero-content">
              <h2 className="title">Hello Olympian!</h2>
              <p className="par">You currently have</p>
              <p className="par">3 700 $OLYMP</p>
              <p className="par">under vesting</p>
              <button><div className="btn-hero">Buy $OLYMP</div></button>
            </div>
          </div>
          <div className="sec-info">
            <div className="info-news">
              <p className="title">Latest News</p>
            </div>
            <div className="info-noti"><img src={require("../assets/img/Chimera_RunningPose 1.png")} alt=""/>
              <div className="content-noti">
                <p className="title">Notifications</p>
                <div className="noti-desc">
                  <p className="time-info">3 hrs ago</p>
                  <p className="noti">Achilles 1 came back from training with 240 powder</p>
                </div>
                <div className="noti-desc">
                  <p className="time-info">6 hrs ago</p>
                  <p className="noti">Evolving stone created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}