import React from 'react'
import PropTypes, { InferProps } from "prop-types";

//type Props = {
//  magicNumber: number
//}

const Props = {
  magicNumber: PropTypes.number.isRequired
}

type ChildTypeScriptTypes = InferProps<typeof Props>;

const ChildTypeScript = ({magicNumber}: ChildTypeScriptTypes) => {
  return (
    <div>Magic number squared is {magicNumber ** 2}</div>
  )
}

ChildTypeScript.propTypes = Props;


export default ChildTypeScript