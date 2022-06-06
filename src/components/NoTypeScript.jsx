import React from "react";
import * as css from "./NoTypeScript.module.css";
import ChildTypeScript from "./ChildTypeScript";

const NoTypeScript = ({ magicNumber }) => {
  return (
    <div className={css["container"]}>
      <div>
        This component has no TypeScript at all! Magic number is {magicNumber}
      </div>
      <ChildTypeScript magicNumber={magicNumber} />
    </div>
  );
};

export default NoTypeScript;
