import React from "react";
import Client from "../componets/Client";
import AddClientModel from "../componets/AddClientModel";
import Projects from "../componets/Projects";
import AddProjectModal from "../componets/AddProjectModal";
const Home = () => {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientModel />
        <AddProjectModal />
      </div>
      <div>
        <Projects />
        <hr />
        <Client />
      </div>
    </>
  );
};

export default Home;
