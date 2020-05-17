import * as React from "react";

import "./index.scss";
import { CamsList } from "./CamsList";
import { Button } from "../components";
import { Link } from "react-router-dom";

interface Props {}

const Sidebar = (props: Props) => {
  return (
    <div className="containet">
      <div className="title">Cams Title</div>
      <CamsList />
      <Button
        handler={() => null}
        customStyle={{ padding: 0, marginBottom: "140px" }}
      >
        <Link to="/add-cam" className="buttonsContent">
          <span>ADD CAMERA</span>
          <span className="plusSign">+</span>
        </Link>
      </Button>
    </div>
  );
};

export default Sidebar;
