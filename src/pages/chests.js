export default function Chests() {
    return (
        <div className="content">
          
          <div className="box-chests">
            <div className="chest Common">
              <div className="icon-chest">
                <div className="img">
                <svg className="icon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#9887ce" data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/></g></svg><img src={require("../assets/img/icon_chest/Asset 3@4x 1.png")} alt="" />
                </div>
              </div>
              <div className="detail-chest">
                <p>Common Chest</p>
                <div className="btn-def">
                  <button className="open">Open</button>
                  <button className="sell">Sell</button>
                </div>
              </div>
            </div>
            <div className="chest Uncommon">
              <div className="icon-chest">
                <div className="img">
                <svg className="icon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#49a6d0" data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/></g></svg><img src={require("../assets/img/icon_chest/Asset 5@4x 1.png")} alt="" />
                </div>
              </div>
              <div className="detail-chest">
                <p>Uncommon Chest</p>
                <div className="btn-def">
                  <button className="open">Open</button>
                  <button className="sell">Sell</button>
                </div>
              </div>
            </div>
            <div className="chest Rare">
              <div className="icon-chest">
                <div className="img">
                <svg className="icon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#eebf20" data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/></g></svg><img src={require("../assets/img/icon_chest/Asset 3@4x 1-1.png")} alt="" />
                </div>
              </div>
              <div className="detail-chest">
                <p>Rare Chest</p>
                <div className="btn-def">
                  <button className="open">Open</button>
                  <button className="sell">Sell</button>
                </div>
              </div>
            </div>
            <div className="chest Legendary">
              <div className="icon-chest">
                <div className="img">
                <svg className="icon-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill="#47bac1" data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/></g></svg><img src={require("../assets/img/icon_chest/Asset 3@4x 1-2.png")} alt="" />
                </div>
              </div>
              <div className="detail-chest">
                <p>Legendary Chest</p>
                <div className="btn-def">
                  <button className="open">Open</button>
                  <button className="sell">Sell</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}