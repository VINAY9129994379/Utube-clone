import React, { useState } from 'react'
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
function Header() {
  const [inputSearch,setInputSearch]=useState("");
  return (
    <div className="header">
        <div className="header-left">
            <MenuIcon/>
            <Link to="/">
            <img src="https://cdn-icons-png.freepik.com/256/3938/3938026.png?ga=GA1.1.873827875.1713185108&semt=ais_hybrid" alt=" "/>
            </Link>
        </div>
        <div className="header-center">
            <input value={inputSearch} onChange={e=>setInputSearch(e.target.value)} placeholder="search..." type="text"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon/>
            </Link>
            <KeyboardVoiceIcon/>
        </div>

        <div className="header-right">
            <VideoCallIcon/>
            <NotificationsIcon/>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

        </div>

        

    </div>
  )
}

export default Header