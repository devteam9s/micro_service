import './widget.scss';
import React, { useState } from 'react';

import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import TaskIcon from '@mui/icons-material/Task';
import StarsIcon from '@mui/icons-material/Stars';
import SpatialTrackingIcon from '@mui/icons-material/SpatialTracking';
import DataUsageIcon from '@mui/icons-material/DataUsage';
function Example() {
  const [data, setData] = useState(null);

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleClick}>See all codes</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}
const Widget = ({type}) => {
  let data;
  
  const number=45;
  const diff=30;
   switch (type) {
    case "overview":
      data={
        title:"OVERVIEW",
        isMoney: false,
        icon:<PropaneTankIcon className="icon" 
        style={{
          color:"crimson",
          backgroundColor:"rgba(255,0,0,0.2)",
        }}/>,
      };
      break;
    case "task":
      data={
        title:"TASK PROGRESS",
        isMoney: false,
        icon:<TaskIcon className="icon"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218,165,32,0.2)",
        }}/>,
      };
      break;
    case "milestones":
      data={
        title:"MILESTONES",
        isMoney: false,
        icon:<StarsIcon className="icon"
        style={{
          color: "green",
          backgroundColor: "rgba(0,128,0,0.2)",
        }}/>,
      };
      break;
    case "risk":
      data={
        title:"RISK AND ISSUE TRACKING",
        isMoney: false,
        icon:<SpatialTrackingIcon className="icon"
        style={{
          color: "purple",
          backgroundColor: "rgba(128,0,128,0.2)",
        }}/>,
      };
      break;
    default:
      break;
    }
  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">
            {data.isMoney && "₹"} {number}
          </span>
          <span className="link">
            {Example()}
          </span>
        </div>
        <div className="right">
          <div className="percentage">
            < DataUsageIcon className="icon"/>
            {diff}%
          </div>
          {data.icon}
          </div>
    </div>
    
  );
};

export default Widget