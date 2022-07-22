import React from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

export default function ProjectsCard({
  name,
  description,
  url,
  image,
  index,
  folder,
  repo,
  isExtUrl,
}) {
  const githubRepoLink = "https://kemdev.github.io/portfolio/projects/";
  const githubRepo =
    "https://github.com/kemdev/portfolio/tree/main/projects/" + folder + url;

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-md-6 col-lg-4"
        initial={{ opacity: 0, scale: 0 }}
        whileFocus={{ opacity: 1, scale: 1 }}
        // whileInView={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          delay: index * 0.2,
        }}
      >
        <div className={`proj-imgbx`}>
          <img
            src={image}
            alt={name}
            style={{ width: "100%", height: "100%" }}
          />
          <div className="proj-txtx">
            <h4>{name}</h4>
            <span>{description} </span>
            <div className="proj-link">
              <a
                href={(isExtUrl && url) || githubRepoLink + folder + url}
                target="_blank"
                rel="noopener noreferrer"
                className="demoLink"
              >
                <div>
                  Live Demo
                  <span className="icon">
                    <OpenInNewRoundedIcon fontSize="small" />
                  </span>
                </div>
              </a>

              <a
                href={(isExtUrl && repo) || githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="repoLink"
              >
                <div>
                  Github
                  <span className="icon">
                    <OpenInNewRoundedIcon fontSize="small" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
