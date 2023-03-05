import React, { useEffect, useState } from 'react';
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function CircularProgressBar({lang1, lang2,lang3, lang4, lang5}) {
    
   
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (percentage < lang1 || percentage < lang2 || percentage < lang3 || percentage < lang4 || percentage < lang5) {
        setPercentage(percentage + 1);
      }
    }, 50);
  }, [percentage]);

  return (
    <div>
      <div style={{ width: 100} }>
        <CircularProgressbar value={percentage} text={`${percentage}%`} styles= {buildStyles({
                pathColor: percentage == lang1 ? "red" : percentage == lang2 ? "blue" : percentage == lang3 ? "green" : percentage == lang4 ? "black": percentage == lang5 ? "navy":"",

                textColor:"white"})} />
      </div>
    </div>
  );
}
export default CircularProgressBar;