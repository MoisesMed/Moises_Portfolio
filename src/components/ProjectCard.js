import React from "react";
import styled from "styled-components";
import { StyledDraftLabel } from "./StyledComponents";
import { projects } from "../data/projects";

const StyledProjectCardMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 32px;
  margin: 16px 0 20px 0;

  @media screen and (max-width: 1000px) {
    gap: 16px;
  }
`;

const StyledProjectCard = styled.div`
  border: 2px solid ${({ theme }) => theme.strongColor};
  width: 45%;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  color: ${({ theme }) => theme.titleColor};
  border-radius: 2px;
  text-align: center;
  height: 300px;
  background-image: ${({ img }) => (img ? `url(${img})` : null)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1000px) {
    width: 48%;
  }

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 400px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
    height: 350px;
  }

  button,
  a {
    display: none;
  }

  &:hover a {
    display: flex;
    z-index: 2;
    background-color: black;
    opacity: 0.8;
    height: 100%;
    font-weight: 600;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
`;

export default function ProjectCard() {
  return (
    <StyledProjectCardMain>
      {projects.map((project) => (
        <StyledProjectCard key={project.id} img={project.image}>
          <a href={project.url} target="_blank" rel="noreferrer noopener">
            <StyledDraftLabel>Click here to see!</StyledDraftLabel>
          </a>
        </StyledProjectCard>
      ))}
    </StyledProjectCardMain>
  );
}
