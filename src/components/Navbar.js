import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "open",
            })
          : this.setState({
              navBarActiveClass: "",
            });
        this.props.handleIsOpen(this.state.active);
      }
    );
  };

  render() {
    return (
      <header className="u-clearfix u-header u-header" id="sec-89c2">
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <nav
            className={`u-align-left u-menu u-menu-dropdown u-offcanvas u-menu-1 u-enable-responsive ${this.state.navBarActiveClass}`}
            data-responsive-from="XL"
          >
            <div className="menu-collapse">
              <a
                className="u-button-style u-nav-link"
                href="#"
                onClick={this.toggleHamburger}
                style={{ padding: "4px 0px", fontSize: "calc(1em + 8px)" }}
              >
                <svg
                  className="u-svg-link"
                  preserveAspectRatio="xMidYMin slice"
                  viewBox="0 0 302 302"
                >
                  <use xlinkHref="#svg-5c50"></use>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="svg-5c50"
                  x="0px"
                  y="0px"
                  viewBox="0 0 302 302"
                  style={{ enableBackground: "new 0 0 302 302" }}
                  xmlSpace="preserve"
                  className="u-svg-content"
                >
                  <g>
                    <rect y="36" width="302" height="30"></rect>
                    <rect y="236" width="302" height="30"></rect>
                    <rect y="136" width="302" height="30"></rect>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </svg>
              </a>
            </div>
            <div className="u-custom-menu u-nav-container">
              <ul className="u-nav u-unstyled u-nav-1">
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base active"
                    href="/home.html"
                    data-page-id="124018"
                    style={{ padding: "10px 20px" }}
                  >
                    home
                  </a>
                  <div className="u-nav-popup fake u-hidden">
                    {" "}
                    <ul className="u-nav u-unstyled">
                      <li className="u-nav-item">
                        <a className="u-nav-link">Menu Item 1</a>
                      </li>
                      <li className="u-nav-item">
                        <a className="u-nav-link">Menu Item 2</a>
                      </li>
                      <li className="u-nav-item">
                        <a className="u-nav-link">Menu Item 3</a>
                      </li>{" "}
                    </ul>{" "}
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="u-custom-menu u-nav-container-collapse"
              style={{ width: this.state.active ? "100%" : "0" }}
            >
              <div className="u-align-center u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                <div className="u-sidenav-overflow">
                  <div className="u-menu-close" onClick={this.toggleHamburger}></div>
                  <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                    <li className="u-nav-item">
                      <a
                        className="u-button-style u-nav-link active"
                        href="/home.html"
                        data-page-id="124018"
                        style={{ padding: "10px 20px" }}
                      >
                        home
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="u-black u-menu-overlay u-opacity u-opacity-70"
                onClick={this.toggleHamburger}
                style={{ display: this.state.active ? "block" : "none" }}
              ></div>
            </div>
            <style className="offcanvas-style">
              {`.u-offcanvas .u-sidenav { flex-basis: 250px !important; }            .u-offcanvas:not(.u-menu-open-right) .u-sidenav { margin-left: -250px; }            .u-offcanvas.u-menu-open-right .u-sidenav { margin-right: -250px; }            @keyframes menu-shift-left    { from { left: 0;        } to { left: 250px;  } }            @keyframes menu-unshift-left  { from { left: 250px;  } to { left: 0;        } }            @keyframes menu-shift-right   { from { right: 0;       } to { right: 250px; } }            @keyframes menu-unshift-right { from { right: 250px; } to { right: 0;       } }            `}{" "}
            </style>
          </nav>
        </div>
      </header>
    );
  }
};

export default Navbar;
