import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    transition: all 0.5s ease-in-out;
  }
  body{
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  user-select: none;
  background: ${({ theme }) => theme.bgColor};

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
 }
  `;
export const BoxHead = styled.div`
  display: flex;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0));
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 250px;
  z-index: -1;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const Title = styled.div`
  display: flex;
  font-size: 30px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.title};
`;
export const Subtitle = styled.div`
  display: flex;
  font-size: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.subtitle};
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 15px;
  }
`;
export const ModeContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ModeDarkLight = styled.div`
  display: flex;
  color: ${({ theme }) => theme.modeColor};
  font-size: 1em;
  font-weight: 700;
  margin-right: 20px;
`;
export const SwitchContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 29px;
  padding: 10px;
  border-radius: 50px;
  overflow: hidden;
  background: linear-gradient(to right, #378fe6, #3eda82);
`;
export const Circle = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  :before {
    position: absolute;
    content: "";
    height: 23px;
    width: 23px;
    left: ${({ dark }) => (dark ? "34px" : "4px")};
    right: ${({ dark }) => (dark ? "4px" : "34")};
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transition: 0.4s;
  }
`;
export const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background: ${({ theme }) => theme.headCardColor};
  border-radius: 5px;
  align-items: center;
  font-size: 14px;
  height: 190px;
  width: 180px;
  margin-bottom: 10px;
  margin-right: 10px;
  :last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 0;
  }
`;
export const Color = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4px;
  border-radius: 3px 3px 0px 0px;
  background-color: ${({ color }) => color};
  @media (max-width: 768px) {
    position: absolute;
    width: inherit;
    top: 1%;
  }
`;
export const LinkUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  margin-top: 10px;
`;
export const Nick = styled.div`
  display: flex;
  color: #838cad;
  font-size: 1em;
  text-decoration: none;
`;
export const Followers = styled.div`
  display: flex;
  color: ${({ theme }) => theme.followersNum};
  font-size: 40px;
`;
export const FollowersText = styled.div`
  display: flex;
  margin: 0;
  font-size: 1em;
  color: #838bb2;
  text-transform: uppercase;
  letter-spacing: 5px;
  margin-bottom: 20px;
`;
export const Recently = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  text-align: center;
  justify-content: center;
  i {
    color: ${({ colorAngle }) => colorAngle};
    margin-right: 5px;
  }
`;
export const Today = styled.div`
  display: flex;
  color: #41a597;
`;
export const CardContainer = styled.div`
  display: flex;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const ContentOverview = styled.div`
  display: flex;
  font-size: 20px;
  color: ${({ theme }) => theme.subtitle};
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const ContainerOverview = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 120px 1fr 1fr;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
export const BlockOverview = styled.div`
  display: flex;
  height: 120px;
  width: 100%;
  border-radius: 5px;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.blockOverviewCard};
`;
export const Titleoverview = styled.div`
  display: flex;
  color: #838bb2;
  font-size: 0.7em;
`;
export const TypeView = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const TotalView = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
export const Number = styled.div`
  display: flex;
  font-size: 2em;
  font-weight: 600;
  color: ${({ theme }) => theme.overviewNum};
`;
export const Percent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 0.6em;
  color: #41a597;
`;
export const PercentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    margin-right: 5px;
    color: ${({ colorAngle }) => colorAngle};
    font-size: 0.6em;
  }
`;
