import * as React from "react";
import NoTypeScript from "../components/NoTypeScript";
import WithTypeScript from "../components/WithTypeScript";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <br />
        <span>— you just made a Gatsby site! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <div>
        <NoTypeScript magicNumber={42} />
        <WithTypeScript magicNumber="test" />
      </div>
    </main>
  );
};

export default IndexPage;
