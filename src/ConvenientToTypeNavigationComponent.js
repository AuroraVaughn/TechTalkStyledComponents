import React from "react";
import { render } from "react-dom";
import { NavLink} from "react-router-dom"
import { ThemeProvider } from "styled-components";
import styled, { keyframes } from "styled-components";
const Title = styled.h1`
  height: 100%;
  font-size: 45px;
  padding: 4px;
  margin: 4px;
  color: ${props => (props.theme ? props.theme.textColor : "pink")};
  background-color: ${props => props.theme ? props.theme.bannerColor : "#4AA045"};
  align-self: center;
  justify-self: center;
`

// "http://www.clker.com/cliparts/L/o/0/6/B/W/watermelon-md.png"


const NavBar = styled.nav`
  position: relative;
  display: flex;
  width:100%;
  max-height: 80px
  width: 100%
  border: solid;
  border-color: ${props => (props.theme ? props.theme.textColor : "pink")}
  background: ${props => (props.theme ? props.theme.textColor : "pink")}
`
/***** ANIMATION!?!? ******/
// https://www.styled-components.com/docs/basics#animations
const flip = keyframes`
  from{transform: rotate(0deg);}
  to {
    transform: rotate(180deg);
  }
`;

const unflip = keyframes`
from{transform: rotate(180deg);}
to {transform: rotate(0deg);}
`
const ImageButton = styled.img`
posistion: relative;
width: 100px;

animation: ${unflip} ;
 animation-duration: 500ms;
    animation-iteration-count: 1;
     animation-fill-mode: back;
  &:hover {
 animation: ${flip} ;

    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
`
const ImageText = styled.span`
text-shadow: -1px 0px 8px rgba(138, 129, 150, 1);
font-weight: bold;
    color:${props=>props.color ? props.color : "white"};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`
/*************   STYLE ANY COMPONENT   ******************/
const UnstyledButton = props => (
  <ThemeProvider theme={props.theme ? props.theme : {}}>
  <NavLink style={{ position: "relative"}}to={props.to ? props.to : "/melons"}>
    <ImageButton 
    alt={`Nav item for ${props.children}`} 
      src={props.image} />
    <ImageText color={props.color}>{props.children} </ImageText>
  </NavLink>
  </ThemeProvider>
  )

const FruitButton = styled(UnstyledButton)`
 position: relative;
 align-self: center;
 justify-self: center;
 max-height: 90px;
 max-width: 80px;
 &:hover {
    &:hover {
 animation: ${flip} ;

    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  }
`
 
/*************   EXTEND AN EXISTING STYLED COMPONENT   ******************/
const LemonButton = FruitButton.extend`
  color: yellow;
     
  }
`
/*************   Adding new props to the component  ******************/
const Input = styled.input.attrs({
  type: 'seeds',
  // or we can define dynamic ones
  margin: props => props.size || '1em',
  padding: props => props.size || '1em'
})`
color: yellow;
`

/******** ********/


const themeObject = {
  lemon: {
    mainColor: "yellow",
    bannerColor: "yellow",
    textColor: "black"
  },
  watermelon: {
    mainColor: "pink",
    bannerColor: "green",
    textColor: "pink"
  }
};

const watermelon = "https://uploads.codesandbox.io/uploads/user/df28d622-9111-4101-974d-def6c8307655/IDul-watermelon-md.png"
const lemon = 'https://uploads.codesandbox.io/uploads/user/df28d622-9111-4101-974d-def6c8307655/q3Rm-lemon.svg'
const ConvenientToTypeNavigationComponent = props =>(
  <ThemeProvider theme={() => (props.themeObject ? props.themeObject : {})}>
    <NavBar>
    <Title>Aurora's Example</Title>
      <FruitButton to={"/melons"} image={watermelon }> Melon Theme</FruitButton>
      <LemonButton to={"/lemons"} image={lemon}> Lemon Theme</LemonButton>
    </NavBar>
  </ThemeProvider>
)

export default ConvenientToTypeNavigationComponent