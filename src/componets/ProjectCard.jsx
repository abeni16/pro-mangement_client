import React from "react";

const ProjectRow = ({ project }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title text-uppercase bg-light">
              {project.name}
            </h5>
            <a className="btn btn-dark" href={`/project/${project.id}`}>
              view
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;
