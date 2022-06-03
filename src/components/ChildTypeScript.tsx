import React from "react";
import PropTypes, { InferProps } from "prop-types";
import * as css from "./ChildTypeScript.css";

//type Props = {
//  magicNumber: number
//}

const Props = {
  magicNumber: PropTypes.number.isRequired,
};

type ChildTypeScriptTypes = InferProps<typeof Props>;

const ChildTypeScript = ({ magicNumber }: ChildTypeScriptTypes) => {
  return (
    <div className={css["container"]}>
      Magic number squared is <span>{magicNumber ** 2}</span>
    </div>
  );
};

ChildTypeScript.propTypes = Props;

export default ChildTypeScript;
