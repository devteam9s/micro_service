import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedDownIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total tasks</h1>
        <MoreVertIcon fontSize='small'/>
      </div>
      <div className="bottom">
        <div className="featuredchart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5}/>
        </div>
        <p className="title">Total Tasks Completed</p>
        <p className="number">12</p>
        <p className="desc">
          Previous tasks are progressing.  Last completed task may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize='small'/>
              <div className="resultNumber">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedDownIcon fontSize='small'/>
              <div className="resultNumber">15</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedDownIcon fontSize='small'/>
              <div className="resultNumber">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured