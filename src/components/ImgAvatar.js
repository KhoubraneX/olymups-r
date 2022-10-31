export default function ImgAvatar ({img}) {
    return (
        <div className="avatar-img">
          <div className="arrows">
            <div className="pre"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144" /></svg></div>
            <div className="next"><svg className="icon-arrow ionicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M184 112l144 144-144 144" /></svg> </div>
          </div>
          <div className="img-av"><img className="avatar-main" src={require(`../assets/img/icon_character/avatar/${img}`)} alt="" /></div>
        </div>
    )
}