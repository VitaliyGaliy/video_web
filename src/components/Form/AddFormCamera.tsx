import * as React from "react";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
import ToggleButton from "../ToggleButton/ToggleButton";
import { Button } from "..";

interface Props {
  handleSubmit: () => void;
}

const renderToggleInput = (field) => {
  return (
    <ToggleButton checked={field.input.value} onChange={field.input.onChange} />
  );
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const AddFormCamera = (props: InjectedFormProps) => {
  const {
    handleSubmit,
    pristine,
    reset,
    submitting,
    onSubmit,
    pageTitle,
  } = props;

  return (
    <div className="addForm_container">
      <span className="addForm_title">{pageTitle}</span>
      <form onSubmit={handleSubmit}>
        <p>
          <b className="addFormInput_title">Name</b>
          <br />
          <Field
            className="addForm_input"
            name="name"
            component={renderField}
            type="text"
            placeholder="input text"
          />
        </p>
        <p>
          <b className="addFormInput_title">RTSP URL</b>
          <br />
          <Field
            className="addForm_input"
            name="source"
            component={renderField}
            type="text"
            placeholder="input text"
          />
        </p>
        <p>
          <b className="addFormInput_title">Target</b>
          <br />
          <Field
            className="addForm_input"
            name="target"
            component={renderField}
            type="text"
            placeholder="input text"
          />
        </p>
        <div className="addForm_amallFieldWrapper">
          <p>
            <b className="addFormInput_title">Width</b>
            <br />
            <Field
              className="addForm_input"
              name="width"
              component={renderField}
              type="text"
              placeholder="input text"
            />
          </p>
          <p className="addFormInput_middle">
            <b className="addFormInput_title">Height</b>
            <br />
            <Field
              className="addForm_input"
              name="height"
              component={renderField}
              type="text"
              placeholder="input text"
            />
          </p>
          <p>
            <b className="addFormInput_title">Bitrate</b>
            <br />
            <Field
              className="addForm_input"
              name="bitrate"
              component={renderField}
              type="text"
              placeholder="input text"
            />
          </p>
        </div>
        <div className="header_controllItem">
          <span className="header_controllItemTitle">Rebroadcast</span>
          <Field
            name="rebroadcast"
            id="Rebroadcast"
            component={renderToggleInput}
            type="switch"
          />
        </div>
        <div className="header_controllItem">
          <span className="header_controllItemTitle">Thumbnails</span>
          <Field
            name="thumbnails"
            id="thumbnails"
            component={renderToggleInput}
            type="switch"
          />
        </div>
        <div className="header_controllItem">
          <span className="header_controllItemTitle">Recording</span>
          <Field
            name="recording"
            id="recording"
            component={renderToggleInput}
            type="switch"
          />
        </div>
        <div className="addFormInput_btnContainer">
          <Button
            type="submit"
            // disabled={pristine || submitting}
            handler={() => null}
            customStyle={{
              backgroundColor: "#EBEBEB",
              border: " 1px solid #DEDEDE",
            }}
          >
            SAVE
          </Button>
          <Button handler={() => null} customStyle={{ marginLeft: "24px" }}>
            CANCEL
          </Button>
        </div>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors: { name?: string; source?: string; target?: string } = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.source) {
    errors.source = "Required";
  }
  if (!values.target) {
    errors.target = "Required";
  }
  return errors;
};

export default reduxForm({
  form: "addForm", // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  // warn, // <--- warning function given to redux-form
  //   onSubmit,
  initialValues: { rebroadcast: false, thumbnails: false, recording: false },
})(AddFormCamera);
