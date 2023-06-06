import React from "react";
import styled from "styled-components";
import { StyledDraftLabel } from "./StyledComponents";
import Bebidas from "../assets/img/bebidas.png";
import Deliverize from "../assets/img/deliverize.png";
import Cv from "../assets/img/meu_cv_project.png";
import Tasks from "../assets/img/minhas_tarefas.png";
import Pharm from "../assets/img/pharm_inc.png";

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
  color: var(--brand-primary-color);
  border-radius: 2px;
  text-align: center;
  height: 300px;
  background-image: ${(props) => (props.img ? `url(${props.img})` : null)};
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
  const projects = [
    {
      name: "Minhas Tarefas",
      description: "Projeto para organização pessoal. Em construção!",
      link: "https://minhas-tarefas.vercel.app/home",
      img: Tasks,
    },
    {
      name: "Meu_Curriculo",
      description: "Projeto de um currículo responsivo online",
      github: "https://github.com/MoisesMed/Meu_Curriculo",
      link: "https://moises-portfolio.vercel.app/",
      img: Cv,
    },
    {
      name: "E-commerce",
      description: "Projeto de simulação de uma página de E-commerce",
      github: "https://github.com/MoisesMed/Ecommerce",
      link: "https://teamsoft.vercel.app/compra",
      img: Deliverize,
    },
    {
      name: "Pharma Inc",
      description: "Front-End Challenge by coodesh 🏅 2021",
      github: "https://github.com/MoisesMed/Pharma_Inc",
      link: "https://pharma-inc-zeta.vercel.app/",
      img: Pharm,
    },
    {
      name: "ProjetoBebidas",
      description: "E-commerce de bebidas feito em 2 aulas da faculdade",
      link: "https://github.com/MoisesMed/ProjetoBebidas",
      img: Bebidas,
    },
  ];
  return (
    <StyledProjectCardMain>
      {projects.map((item) => (
        <StyledProjectCard img={item.img}>
          <a href={item.link} target="_blank">
            <StyledDraftLabel>Click here to see!</StyledDraftLabel>
          </a>
        </StyledProjectCard>
      ))}
    </StyledProjectCardMain>
  );
}
