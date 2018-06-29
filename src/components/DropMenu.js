import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import posed from "react-pose";

import {menuPageOptions, contactOptions} from "../data/configOptions.js";


const MenuButton = posed.div({
  closed: {
    scale: 1,
    rotate: 45,
    afterChildren: true
  },
  open: {
    scale: 1.2,
    rotate: 0,
    delayChildren: 50,
    staggerChildren: 100,
  }
});

const MenuLink = posed.div({
  closed: {
    opacity: 0,
    scale: 0,
    x: -50,
    transition: {
      x: { delay: 50 }
    }
  },
  open: {
    opacity: 1,
    scale: 1,
    x: 0
  },
});

const MenuLinkBg = posed.div({
  closed: {
    width: 0,
  },
  hovered: {
    width: ({length}) => length * 8
  },
});

const Menu = styled(MenuButton)`
  width: 2.5em;
  height: 2.5em;
  background-color: #56C6DF;
  opacity: 0.8;
  position: relative;
  z-index: 100; // Allow menu to always be on top for navigation

  outline: 2px solid #fff;
  outline-offset: -0.7em;
  float: right;

  grid-area: menu;

  &:hover {
    cursor: pointer;
  }
`

const NavLink = styled(MenuLink)`
  color: white;
  text-decoration: none;
  text-align: justify;
  direction: rtl;
  padding-top: 0.5em;
  float: right;

  &:first-child {
    margin-top: 2.5em;
  }

  .navLinkText {
    text-decoration: none;
    color: #545454;
  }
`;

const NavLinkBg = styled(MenuLinkBg)`
  background-color: ${props => props.colour};
  opacity: 0.6;
  position: absolute;
  float: right;
  margin-top: 0.45em;
  height: 0.9em;
`;



class DropMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      menuLink: null
    };
  }

  render() {
    const isMobile = "ontouchstart" in document.documentElement;
    return (
      <Menu
        pose={this.state.menuOpen ? 'open' : 'closed'}
        onMouseEnter={() => this.setState({ menuOpen: true })}
        onMouseLeave={() => this.setState({ menuOpen: false })} >
          { menuPageOptions.map((option, i) => {
              return <NavLink key={i} pose={this.state.menuOpen ? 'open' : 'closed'}>
                       <Link
                         to={option.route}
                         className="navLinkText"
                         onMouseEnter={() => this.setState({ menuLink: option.text })}
                         onMouseLeave={() => this.setState({ menuLink: null })} >
                         <NavLinkBg
                           initialPose = 'closed'
                           pose={((this.state.menuLink === option.text || isMobile) && this.state.menuOpen) ? 'hovered' : 'closed'}
                           colour={option.colour}
                           length={option.text.length} />
                         <div style={{ position: 'relative', paddingRight: '5px' }}>{option.text}</div>
                       </Link>
                     </NavLink>;
           })}
      </Menu>
    );
  }
}

export default DropMenu;