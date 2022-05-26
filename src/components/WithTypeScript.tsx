import React from "react";
import ChildTypeScript from "./ChildTypeScript";
import RegularComponent from "./RegularComponent.js"

type Props = {
  magicNumber: number;
};

const WithTypeScript = ({ magicNumber }: Props) => {
  return (
    <div>
      <div>This component has TypeScript! Magic number is {magicNumber}</div>
      <ChildTypeScript magicNumber={magicNumber} />
      <RegularComponent />
    </div>
  );
};

export default WithTypeScript