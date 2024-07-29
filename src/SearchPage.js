import React from 'react'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import './SearchPage.css'

function SearchPage() {
  return (
    <div className="seaarchPage">
        <div>
            <TuneIcon/>
            <h2>FILTER</h2>
        </div>
        <hr/>
        <ChannelRow
          image=""
          channel=""
          verified
          subs=""
          noOfVideos=""
          description=""
        
        />
       
    </div>
  )
}

export default SearchPage