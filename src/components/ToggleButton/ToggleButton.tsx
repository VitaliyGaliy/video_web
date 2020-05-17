import * as React from "react";
import "./index.scss";

interface Props {
  checked?: boolean;
  onChange?: () => void;
  isToggled?: boolean;
}

const ToggleButton = ({ checked, onChange, isToggled }: Props) => {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          onClick={onChange}
          id="togBtn"
          checked={isToggled}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
