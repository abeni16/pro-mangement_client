import React from "react";
import Spinner from "./Spinner";
import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectsQueries";

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>something went wrong</p>;
  return (
    <>
      {!loading && !error && (
        <>
          <div className="r row">
            {data.projects.length > 0 ? (
              data.projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p>No Projects</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
