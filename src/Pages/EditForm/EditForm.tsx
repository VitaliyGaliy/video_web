import * as React from "react";
import { InjectedFormProps } from "redux-form";
import { withRouter, RouteComponentProps } from "react-router";
import { connect, useDispatch } from "react-redux";

import "./index.scss";
import { updateCamera, getCamera } from "../../Redux/camera/actions";
import FormCamera from "../../components/Form/EditFormCamera";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

type allProps = InjectedFormProps & RouteComponentProps;

const EditForm = (props: allProps) => {
  const { camId } = useParams<{ camId: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCamera(camId));
  }, []);

  const onHandleSubmit = ({ thumbnail, _id, ...data }) => {
    props.updateCamera(_id, data, props.history);
  };

  return (
    <div className="editForm_wrapper">
      <FormCamera onSubmit={onHandleSubmit} pageTitle="Edit Camera" />
    </div>
  );
};

export default withRouter(connect(null, { updateCamera })(EditForm));
