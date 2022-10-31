import { NavLink } from "react-router-dom"
// icon
import descord_icon from "../assets/img/descord 1@4x 1.svg"
import telegram_icon from "../assets/img/telegram@4x 1.svg"
import twitter_icon from "../assets/img/Twitter_icon 1.svg"

export default function SideNav() {
    return (
        <div className="left-side">
        <div className="logo"><img src={require("../assets/img/Olympus Game Logo 2.png")} alt=""/></div>
        <div className="btn-fillter">
            <NavLink to="/home" className="btn" href="home.html">
                <div className="cercle-btn"></div>
                <p>home</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Apps</title><rect x="64" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="64" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="216" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="64" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="216" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><rect x="368" y="368" width="80" height="80" rx="40" ry="40" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
            </NavLink>
            <NavLink to="/characters" className="btn" href="mycharacters.html">
                <div className="cercle-btn"></div>
                <p>my characters</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Skull</title><path d="M448 225.64v99a64 64 0 01-40.23 59.42l-23.68 9.47A32 32 0 00364.6 417l-10 50.14A16 16 0 01338.88 480H173.12a16 16 0 01-15.69-12.86L147.4 417a32 32 0 00-19.49-23.44l-23.68-9.47A64 64 0 0164 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><circle cx="168" cy="280" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><circle cx="344" cy="280" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 336l-16 48h32l-16-48zM256 448v32M208 448v32M304 448v32"/></svg>
            </NavLink>
            <NavLink to="/chests" className="btn" href="mychests.html">
                <div className="cercle-btn"></div>
                <p>my chests</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>File Tray</title><path d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48V272l-32-152c-5-27-23-40-48-40z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 272h144M320 272h144M192 272a64 64 0 00128 0"/></svg>
            </NavLink>
            <NavLink to="/foundry" className="btn" href="thefoundry.html">
                <div className="cercle-btn"></div>
                <p>the foundry</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Analytics</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M344 280l88-88M232 216l64 64M80 320l104-104"/><circle cx="456" cy="168" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="320" cy="304" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="208" cy="192" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="56" cy="344" r="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
            </NavLink>
            <NavLink to="/marketplace" className="btn" href="marketplace.html">
                <div className="cercle-btn"></div>
                <p>marketplace</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Storefront</title><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48zM32 464h448M136 288h80a24 24 0 0124 24v88h0-128 0v-88a24 24 0 0124-24zM288 464V312a24 24 0 0124-24h64a24 24 0 0124 24v152"/></svg>
            </NavLink>
        </div>
        <div className="smm-box">
        <div className="smm"><a href="#">
            <img src={descord_icon} alt=""/></a><a href="#">
            <img src={telegram_icon} alt=""/></a><a href="#">
            <img src={twitter_icon} alt=""/></a>
        </div>
        <div className="btn-disc">
            <p>Disconnect</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512"><title>Power</title><path d="M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148M256 64v192" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>
        </div>
        </div>
      </div>
    )
}