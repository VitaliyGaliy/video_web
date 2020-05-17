import * as React from "react";
import "./index.scss";
import ScreenShotList from "../ScreenShotList/ScreenShotList";

interface Props {}

const RecordedClips = (props: Props) => {
  return (
    <div className="recordedClips_container">
      <h1 className="recordedClips_title">Recorded clips</h1>
      <div className="recordedClips_content">
        {/* <ScreenShotList screenshots={[]} /> */}
      </div>
    </div>
  );
};

export default RecordedClips;
