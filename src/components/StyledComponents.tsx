import styled from "styled-components";

interface StyledSmallTitleProps {
  center?: boolean;
  noMarginTop?: boolean;
  dashed?: boolean;
}

interface StyledLabelProps {
  bold?: boolean;
  noSpace?: boolean;
  responsive?: boolean;
}

interface StyledIconProps {
  big?: boolean;
  circle?: boolean;
}

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const StyledTitle = styled.span`
  padding: 10px 0px;
  color: ${({ theme }) => theme.titleColor};
  font-size: 32px;
  font-weight: bold;
  display: block;
  width: 100%;
  text-align: center;
`;

export const StyledSmallTitle = styled.span<StyledSmallTitleProps>`
  padding: 5px 0px;
  color: ${({ theme }) => theme.titleColor};
  font-size: 17px;
  font-weight: bold;
  width: 100%;
  text-align: ${({ center }) => (center === true ?  "center" : "start")};
  @media screen and (max-width: 1199px) {
    margin-top:  ${({ noMarginTop }) => (noMarginTop === true ?  "0px" : "15px")};
    padding-top: 10px;
    border-top: ${({ dashed }) =>
      dashed === true ? "1px solid rgb(97 218 251)" : ""};
  }
`;

export const StyledLabel = styled.span<StyledLabelProps>`
  font-weight: ${({ bold }) => (bold === true ? "bold" : "400")};
  padding: ${({ noSpace }) => (noSpace === true ? "0px" : "5px 0px")};
  color: ${({ theme }) => theme.titleColor};
  width: 100%;
  display: block;
  text-align: ${({ responsive }) => (responsive === true ?  "center" : "start")};
`;

export const StyledSmallLabel = styled.span<{ bold?: boolean; responsive?: boolean }>`
  font-weight: ${({ bold }) => (bold === true ? "bold" : "400")};
  font-size: 14px;
  color: ${({ theme }) => theme.titleColor};
  width: 100%;
  @media screen and (min-width: 768px) {
    text-align: ${({ responsive }) =>
      responsive === true ? "start" : "center"};
  }
`;

export const StyledDraftLabel = styled.span`
  color: ${({ theme }) => theme.strongColor};
`;

export const StyledA = styled.a`
  fill: ${({ theme }) => theme.titleColor};
  text-align: -webkit-center;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover svg {
    fill: ${({ theme }) => theme.strongColor};
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px;
`;

export const StyledIcon = styled.img<StyledIconProps>`
  width: ${({ big }) => (big === true ? "100%" : "35px")};
  max-width: 90px;
  margin: 12px 0px;
  border-radius: ${({ circle }) => (circle === true ? "50%" : "0px")};
`;

export const StyledBadge = styled.img`
  padding: 3px;

  &:hover {
    transform: scale(1.05);
  }
`;
