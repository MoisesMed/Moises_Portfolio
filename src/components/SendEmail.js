import React from "react";
import emailjs from "@emailjs/browser";
import { StyledLabel, StyledTitle } from "./StyledComponents";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledSendEmailDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 8px 25px 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundSecondaryColor};

  span {
    padding: 8px 20px;
  }

  div {
    gap: 4px;
  }
`;

const StyledDualSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledEmailSectionDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  width: 100%;
  color: var(--brand-primary-color);

  input {
    border: 3px solid transparent;
    border-radius: 4px;
    height: 40px;
    padding: 2px 8px;

    &:focus-visible {
      outline: 0;
      border-bottom: 3px solid ${({ theme }) => theme.strongColor};
    }
  }

  textarea {
    border: 3px solid transparent;
    border-radius: 4px;
    height: 80px;
    padding: 2px 8px;

    &:focus-visible {
      outline: 0;
      border-bottom: 3px solid ${({ theme }) => theme.strongColor};
    }
  }
`;

const StyledButtonSend = styled.button`
  font-size: 18px;
  height: 35px;
  margin-top: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.strongColor};
  border: 1px solid ${({ theme }) => theme.strongColor};
  transition: 0.85s;

  &:hover {
    color: ${({ theme }) => theme.backgroundColor};
    font-weight: 600;
    box-shadow: inset 100vw 0 0 0 ${({ theme }) => theme.strongColor};
  }
`;

export default function SendEmail() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wq6e8kf",
        "template_mc50o9i",
        e.target,
        "28sbfdcsxPPKz_OgD"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
        },
        (error) => {
          toast.success("Error sending email");
        }
      );
    e.target.reset();
  }

  return (
    <StyledSendEmailDiv>
      <StyledTitle>Send an email</StyledTitle>
      <StyledLabel>
        If you have any opportunities, questions or want to get in touch, do not
        hesitate to send me an email.
      </StyledLabel>
      <form id="contact-form" onSubmit={sendEmail}>
        <StyledDualSection>
          <StyledEmailSectionDiv>
            <input required placeholder={"Your name"} type="text" name="name" />
          </StyledEmailSectionDiv>
          <StyledEmailSectionDiv>
            <input
              required
              placeholder={"Your email"}
              type="email"
              name="email"
            />
          </StyledEmailSectionDiv>
        </StyledDualSection>
        <StyledEmailSectionDiv>
          <input placeholder={"Title"} type="title" name="title" />
        </StyledEmailSectionDiv>
        <StyledEmailSectionDiv>
          <textarea required placeholder={"Message"} name="message" />
          <StyledButtonSend type="submit" value="Send">
            Send
          </StyledButtonSend>
        </StyledEmailSectionDiv>
      </form>
      <ToastContainer />
    </StyledSendEmailDiv>
  );
}
