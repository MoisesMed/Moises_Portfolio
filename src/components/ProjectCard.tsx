import React from "react";
import styled from "styled-components";
import { projects } from "../data/projects";

const StyledProjectCardMain = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  margin: 24px 0;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const StyledProjectCard = styled.article`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.strongColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};
  color: ${({ theme }) => theme.titleColor};
`;

const StyledProjectImage = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top;
`;

const StyledProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
`;

const StyledProjectStatus = styled.span`
  color: ${({ theme }) => theme.strongColor};
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const StyledProjectName = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.titleColor};
  font-size: 24px;
  font-weight: 700;
`;

const StyledProjectDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.titleColor};
  line-height: 1.6;
`;

const StyledProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  padding: 0 16px;
  border: 1px solid ${({ theme }) => theme.strongColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.strongColor};
  font-weight: 600;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.strongColor};
    color: ${({ theme }) => theme.backgroundColor};
    text-decoration: none;
  }
`;

export default function ProjectCard() {
  return (
    <StyledProjectCardMain>
      {projects.map((project) => (
        <StyledProjectCard key={project.id}>
          <StyledProjectImage src={project.image} alt={`${project.name} landing page`} />
          <StyledProjectDetails>
            <StyledProjectStatus>In production</StyledProjectStatus>
            <StyledProjectName>{project.name}</StyledProjectName>
            <StyledProjectDescription>
              {project.description}
            </StyledProjectDescription>
            <StyledProjectLink
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              Visit product website
            </StyledProjectLink>
          </StyledProjectDetails>
        </StyledProjectCard>
      ))}
    </StyledProjectCardMain>
  );
}
