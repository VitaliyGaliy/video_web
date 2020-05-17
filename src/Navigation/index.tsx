import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar.";
import "./index.scss";
import { CameraPage } from "../Pages/CameraPage";
import AddForm from "../Pages/AddForm/AddForm";
import EmptyPage from "../Pages/EmptyPage/EmptyPage";
import EditForm from "../Pages/EditForm/EditForm";

export default function App() {
  return (
    <Router>
      <div className="appContainer">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <EmptyPage />
          </Route>
          <Route path="/add-cam">
            <AddForm />
          </Route>
          <Route path="/edit-cam/:camId">
            <EditForm />
          </Route>
          <Route path="/cam/:camId">
            <CameraPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
