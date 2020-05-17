import * as React from "react";
import Modal from "../../../components/Modal/Modal";
import chevronLeft from "../../../assets/images/chevronLeft.png";
import chevronRight from "../../../assets/images/chevronRight.png";

import "./index.scss";
import { Button } from "../../../components";

interface Props {}

const Slider = (props: Props) => {
  return (
    <Modal>
      <div className="slider_container">
        <div className="slider_contentWrapper">
          <div className="slider_leftChevron">
            <img className="slider_leftChevronIcon" src={chevronLeft} />
          </div>
          <div className="slider_mainCamera"></div>
          <div className="slider_leftChevron">
            <img className="slider_leftChevronIcon" src={chevronRight} />
          </div>
        </div>

        <div className="slider_footer">
          <span className="slider_date">05-05-2020 13:58:01</span>
          <Button
            handler={() => null}
            customStyle={{ background: "#EBEBEB", border: "1px solid #DEDEDE" }}
          >
            DOWMLOAD
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Slider;
