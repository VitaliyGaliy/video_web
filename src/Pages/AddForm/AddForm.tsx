import * as React from "react";
import { InjectedFormProps } from "redux-form";
import { withRouter, RouteComponentProps } from "react-router";
import { connect } from "react-redux";

import "./index.scss";
import { addCamera } from "../../Redux/camera/actions";
import FormCamera from "../../components/Form/AddFormCamera";

type allProps = InjectedFormProps & RouteComponentProps;

const AddForm = (props: allProps) => {
  const onHandleSubmit = (data) => {
    props.addCamera(data, props.history);
  };

  return (
    <div className="addForm_wrapper">
      <FormCamera onSubmit={onHandleSubmit} pageTitle="Add Camera" />
    </div>
  );
};

export default withRouter(connect(null, { addCamera })(AddForm));
