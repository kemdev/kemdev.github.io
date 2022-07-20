import React from "react";
import ProjectCard from "./ProjectsCard";

import { Container } from "react-bootstrap";

export default function ProjectContainer({ projects, folder, isExtUrl }) {
  return (
    <Container fluid style={{ maxWidth: "2000px" }}>
      <div className="row">
        {projects?.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            index={index}
            folder={folder}
            isExtUrl={isExtUrl}
          />
        ))}
      </div>
    </Container>
  );
}
