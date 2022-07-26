import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";

import loadingIMage from '../public/img/Running_heart.gif'

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

  console.log('image', loadingIMage)

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="col-md-6 col-lg-4"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1}}
        transition={{
          type: "tween",
          stiffness: 100,
          delay: index * 0.1,
          opacity: { ease: "linear" },
          ease: [0.17, 0.67, 0.83, 0.67] 
        }}
      >
        <div className={`proj-imgbx`}>
          <Image
            src={image}
            alt={name}
            placeholder="blur"
            blurDataURL={loadingIMage.src}
            style={{ width: "100%", height: "100%" }}
            width= "100%" height= "60%"
            layout="responsive"
            priority
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
