import React from "react";
import MenuTitle from "../MenuTitle";
import "./CSFundamentals.css";
import { CLanguageData } from "../../util/CLanguagedata";
const CLanguage = () => {
  return (
    <div className="menuitem">
      {CLanguageData.map((doc, idx) => {
        return <MenuTitle title={doc.title} url={doc.url} />;
      })}

      <div></div>
    </div>
  );
};

export default CLanguage;
