import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyle,
  BoxHead,
  Container,
  Header,
  Text,
  Title,
  Subtitle,
  ModeDarkLight,
  Card,
  LinkUser,
  Nick,
  Followers,
  FollowersText,
  Recently,
  Today,
  Color,
  CardContainer,
  ContentOverview,
  ContainerOverview,
  BlockOverview,
  Titleoverview,
  TypeView,
  TotalView,
  Number,
  Percent,
  PercentIcon,
  SwitchContainer,
  Circle,
  ModeContainer
} from "./styles";

const IconSocialNetwork = styled.i.attrs(props => ({
  className: `${props.pack} fa-${props.iconSocialNetwork}`
}))`
  color: ${({ color }) => color};
`;

const Icon = styled.i.attrs(props => ({
  className: `${props.pack} fa-${props.icon}`
}))`
  color: ${({ colorAngle }) => colorAngle};
`;

const lightTheme = {
  bgColor: "#e3e3e3",
  headCardColor: "#f0f2fa",
  blockOverviewCard: "#f0f2fa",
  followersNum: "#000",
  overviewNum: "#000",
  title: "#000",
  subtitle: "#24272F",
  modeColor: "#000"
};
const darkTheme = {
  bgColor: "#1d2029",
  headCardColor: "#252b43",
  blockOverviewCard: "#252b43",
  followersNum: "#fff",
  overviewNum: "#fff",
  title: "#fff",
  subtitle: "#8489a7",
  modeColor: "#fff"
};

const Stats = props => {
  const {
    nick,
    followers,
    recently,
    color,
    colorAngle,
    iconSocialNetwork,
    icon
  } = props;
  return (
    <Card>
      <Color color={color} />
      <LinkUser>
        <IconSocialNetwork
          iconSocialNetwork={iconSocialNetwork}
          color={color}
          pack="fab"
        />
        <Nick>{nick}</Nick>
      </LinkUser>
      <Followers>{followers}</Followers>
      <FollowersText>Followers</FollowersText>
      <Recently>
        <Icon pack="fas" icon={icon} colorAngle={colorAngle} />
        <Today>{recently} Today</Today>
      </Recently>
    </Card>
  );
};

const YouTubeFollowers = 964;
const TwitterFollowers = 136;
const FacebookFollowers = 925;
const VkFollowers = 11321;

const total = YouTubeFollowers + TwitterFollowers + FacebookFollowers + VkFollowers;
const str = '' + total;
const result = str.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");

const Item = props => {
  const {
    title,
    iconSocialNetwork,
    color,
    percent,
    number,
    icon,
    colorAngle
  } = props;
  return (
    <BlockOverview>
      <TypeView>
        <Titleoverview>{title}</Titleoverview>
        <IconSocialNetwork
          iconSocialNetwork={iconSocialNetwork}
          color={color}
          pack="fab"
        />
      </TypeView>
      <TotalView>
        <Number>{number}</Number>
        <PercentIcon>
          <Icon pack="fas" icon={icon} colorAngle={colorAngle} />
          <Percent>{`${percent}%`}</Percent>
        </PercentIcon>
      </TotalView>
    </BlockOverview>
  );
};

const Dashboard = props => {
  const stats = [
    {
      nick: "@nickname",
      followers: YouTubeFollowers,
      recently: "11",
      color: "#FF0000",
      iconSocialNetwork: "youtube",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      nick: "@nickname",
      followers: TwitterFollowers,
      recently: "24",
      iconSocialNetwork: "twitter",
      color: "#1DA1F2;",
      icon: "angle-down",
      colorAngle: "#FF0000"
    },
    {
      nick: "@nickname",
      followers: FacebookFollowers,
      recently: "136",
      iconSocialNetwork: "facebook",
      color: "#4267B2;",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      nick: "@nickname",
      followers: VkFollowers,
      recently: "48",
      iconSocialNetwork: "vk",
      color: "#4c75a3",
      icon: "angle-up",
      colorAngle: "#41a597"
    }
  ];
  const items = [
    {
      title: "Page Views",
      iconSocialNetwork: "facebook",
      color: "#4267B2",
      percent: "303",
      number: "985",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Likes",
      iconSocialNetwork: "linkedin",
      color: "#4267B2",
      percent: "2",
      number: "46",
      icon: "angle-down",
      colorAngle: "#FF0000"
    },
    {
      title: "Likes",
      iconSocialNetwork: "instagram",
      color: "#E1306C;",
      percent: "2257",
      number: "542",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Profile Views",
      iconSocialNetwork: "vk",
      color: "#4c75a3",
      percent: "553",
      number: "1230",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Page Views",
      iconSocialNetwork: "twitter",
      color: "#1DA1F2",
      percent: "303",
      number: "54",
      icon: "angle-down",
      colorAngle: "#FF0000"
    },
    {
      title: "Likes",
      iconSocialNetwork: "reddit",
      color: "#4267B2",
      percent: "2",
      number: "52",
      icon: "angle-down",
      colorAngle: "#FF0000"
    },
    {
      title: "Likes",
      iconSocialNetwork: "youtube",
      color: "#FF0000",
      percent: "2257",
      number: "5462",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Profile Views",
      iconSocialNetwork: "vimeo",
      color: "#4c75a3",
      percent: "553",
      number: "2124",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Page Views",
      iconSocialNetwork: "telegram",
      color: "#4267B2",
      percent: "303",
      number: "87",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Likes",
      iconSocialNetwork: "spotify",
      color: "#4267B2",
      percent: "2",
      number: "23",
      icon: "angle-down",
      colorAngle: "#FF0000"
    },
    {
      title: "Likes",
      iconSocialNetwork: "flickr",
      color: "#E1306C;",
      percent: "2257",
      number: "3651",
      icon: "angle-up",
      colorAngle: "#41a597"
    },
    {
      title: "Profile Views",
      iconSocialNetwork: "google-plus-square",
      color: "#4c75a3",
      percent: "553",
      number: "12547",
      icon: "angle-up",
      colorAngle: "#41a597"
    }
  ];

  const [dark, light] = useState(false);
  const clickSwitch = () => light(!dark);

  const mode = dark === false ? "Dark" : "Light";
  const theme = dark ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BoxHead />
      <Container>
        <Header>
          <Text>
            <Title>Social Media Dasboard</Title>
            <Subtitle>Total Followers: {result}</Subtitle>
          </Text>
          <ModeContainer>
            <ModeDarkLight>{mode} mode</ModeDarkLight>
            <SwitchContainer onClick={clickSwitch}>
              <Circle dark={dark} />
            </SwitchContainer>
          </ModeContainer>
        </Header>
      </Container>
      <CardContainer>
        {stats.map(stat => {
          const {
            nick,
            followers,
            recently,
            color,
            iconSocialNetwork,
            icon,
            colorAngle
          } = stat;
          return (
            <Stats
              key={stat.iconSocialNetwork}
              nick={nick}
              followers={followers}
              recently={recently}
              color={color}
              colorAngle={colorAngle}
              icon={icon}
              iconSocialNetwork={iconSocialNetwork}
            />
          );
        })}
      </CardContainer>
      <ContentOverview>Overviews - Today</ContentOverview>
      <ContainerOverview>
        {items.map(item => {
          const {
            title,
            iconSocialNetwork,
            color,
            percent,
            number,
            icon,
            colorAngle
          } = item;
          return (
            <Item
              key={item.iconSocialNetwork}
              title={title}
              iconSocialNetwork={iconSocialNetwork}
              color={color}
              percent={percent}
              number={number}
              icon={icon}
              colorAngle={colorAngle}
            />
          );
        })}
      </ContainerOverview>
    </ThemeProvider>
  );
};

export default Dashboard;
