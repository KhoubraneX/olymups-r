import {Dropdown}  from "../components/Dropdown"

export default function Foundry() {
    return (
        <div className="content">
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
                  <Dropdown />
                  </div>
                  <div className="btn-def">
                    <button>Start</button>
                  </div>
                </div>
              </div>
              <div className="Stone-progress">
                <p className="title">Stone Progress</p>
                <div className="info">
                  <div className="process-box">
                    <div className="content">
                      <p>4 stones completed</p>
                      <div className="btn-def">
                        <button>Claim</button>
                      </div>
                    </div>
                    <div className="process-f">
                      <div className="process-line-f"></div>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="process-box">
                    <div className="content">
                      <p>6 stones completed</p>
                      <div className="btn-def">
                        <button>Claim</button>
                      </div>
                    </div>
                    <div className="process-f">
                      <div className="process-line-f"></div>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="process-box">
                    <div className="content">
                      <p>1 stones completed</p>
                      <div className="btn-def">
                        <button>Claim</button>
                      </div>
                    </div>
                    <div className="process-f">
                      <div className="process-line-f"></div>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="process-box">
                    <div className="content">
                      <p>2 stones completed</p>
                      <div className="btn-def">
                        <button>Claim</button>
                      </div>
                    </div>
                    <div className="process-f">
                      <div className="process-line-f"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="evolving-stones-detail">
              <p>Evolving Stones (6)</p>
              <div className="stones"> 
                <div className="arrows">
                  <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg></div>
                  <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144"/></svg> </div>
                </div>
                <div className="stone"><img src={require("../assets/img/icon_foundry/Asset 1@4x 7.png")} alt="" />
                  <div className="btn-def">
                    <button>Sell</button>
                  </div>
                </div>
                <div className="stone"><img src={require("../assets/img/icon_foundry/Asset 1@4x 7.png")} alt="" />
                  <div className="btn-def">
                    <button>Sell</button>
                  </div>
                </div>
                <div className="stone"><img src={require("../assets/img/icon_foundry/Asset 1@4x 7.png")} alt="" />
                  <div className="btn-def">
                    <button>Sell</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}