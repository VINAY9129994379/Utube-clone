import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLbraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';






function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      <hr/>
      
      <SidebarRow  Icon={VideoLbraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your video" />
      <SidebarRow  Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked Video"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more" />
      <hr/>

    </div>
  );
}

export default Sidebar;
