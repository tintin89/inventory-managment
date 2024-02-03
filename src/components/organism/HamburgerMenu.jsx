import { useState } from "react";
import styled from "styled-components";
import { LinksArray, SecondarylinksArray } from "../../utils/staticData";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { ToogleTheme } from "./ToogleTheme";

export function HamburgerMenu() {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <Navbar>
        <section>
          <HamburgerMenuSpan onClick={() => setClick(!click)}>
            <label
              className={click ? "toggle active" : "toggle"}
              htmlFor="checkbox"
            >
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>
          </HamburgerMenuSpan>
        </section>
        <Menu $click={click.toString()}>
          {LinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <Divider />
          {SecondarylinksArray.map(({ icon, label, to }) => (
            <div
              onClick={() => setClick(!click)}
              className="LinkContainer"
              key={label}
            >
              <NavLink to={to} className="Links">
                <div className="Linkicon">{icon}</div>
                <span>{label}</span>
              </NavLink>
            </div>
          ))}
          <ToogleTheme />
          <Divider />
        </Menu>
      </Navbar>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${({ theme }) => theme.body};
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;
const HamburgerMenuSpan = styled.span`
  position: fixed;
  top: 2rem;
  z-index: 100;

  #checkbox {
    display: none;
  }

  .toggle {
    position: relative;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition-duration: 0.5s;
    &.active {
      transition-duration: 0.5s;
      transform: rotate(180deg);
      .bars {
        position: absolute;
        transition-duration: 0.5s;
      }
      #bar2 {
        transform: scaleX(0);
        transition-duration: 0.5s;
      }
      #bar1 {
        width: 100%;
        transform: rotate(45deg);
        transition-duration: 0.5s;
      }
      #bar3 {
        width: 100%;
        transform: rotate(-45deg);
        transition-duration: 0.5s;
      }
    }
  }

  .bars {
    width: 100%;
    height: 4px;
    background-color: ${(props)=>props.theme.text};
    border-radius: 4px;
  }

  #bar2 {
    transition-duration: 0.8s;
  }

  #bar1,
  #bar3 {
    width: 70%;
  }
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  z-index: 10;
  flex-direction: column;
  position:fixed;
  inset: 0 0 0 0;
  width: 100vw;
  background-color: ${({theme})=>`rgba(${theme.bodyRgba},0.85)`};
  backdrop-filter:blur(3px);
  transform:${(props)=>props.$click == "true" ? "translateY(0)" : "translateY(1000%)"};
  transition:all 0.3s ease;
  .LinkContainer{
    &:hover{
      background:${(props)=>props.theme.bgAlpha};
    }
    .Links{
      width:100vw;
      display:flex;
      align-items:center;
      text-decoration:none;
      color:${(props)=>props.theme.text};
      height:80px;
      .Linkicon{
        padding:${v.smSpacing} ${v.mdSpacing};
        display:flex;
        svg{
          font-size:25px;
        }
      }
    }
  }
`;
const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
