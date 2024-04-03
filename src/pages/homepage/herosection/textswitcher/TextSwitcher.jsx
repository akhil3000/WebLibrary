import React, { useEffect, useLayoutEffect, useState } from "react";
import "./TextSwitcher.css";

function TextSwitcher({ fixed, switchingList, switchColors }) {
  const switchingText = [];
  for (let i = 0; i < switchingList.length; i++) {
    switchingText.push({
      text: switchingList[i],
      color: switchColors == null ? "#000" : switchColors[i],
    });
  }
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setIndex((index) => (index + 1) % (switchingText.length));
    }, 2000);
    return () => clearInterval(intervalID);
  });
  return (
    <div className="text-switcher">
      <p className="fixed">{fixed}&nbsp;</p>
      <p className="switching">
        <div className="switching-content" style={{
            "top":index * -1 * 3.55 + "ch"
        }}>
          {switchingText.map((item) => {
            return <span style={{color:item.color}}>{item.text}</span>;
          })}
        </div>
      </p>
    </div>
  );
}

export default TextSwitcher;
