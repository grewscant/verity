import React from "react";
import styled from "styled-components";
import theme from "../../theme";
import Link from "next/link";

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 100vw;
  background-color: ${theme.colors["purple-0"]};
  padding: 8px 36px;
  font-family: ${theme.fonts.primary};
  box-shadow: 0px 2px 10px #cdb1ff;

  p {
    margin: 0px;
    font-size: 40px;
    font-weight: ${theme.fontWeights.black};
    color: ${theme.colors["purple-1"]};
  }

  a {
    margin-right: 20px;
    font-size: 20px;
    line-height: 20px;
    text-decoration: none;
    font-weight: ${theme.fontWeights.semibold};
    color: ${theme.colors["grey-1"]};
  }

  a:hover {
    text-decoration: underline;
  }
`;

const StyledDiv = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface NavbarProps {
  title: string;
}

interface NavbarLink {
  label: string;
  href: string;
}

const MENU_LINKS: Array<NavbarLink> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create",
    href: "/create",
  },
  {
    label: "Explore",
    href: "/explore",
  },
];

const Navbar = ({ title }: NavbarProps): JSX.Element => {
  return (
    <React.Fragment>
      <StyledNav>
        <p>{title}</p>
        <StyledDiv>
          <ul>
            {MENU_LINKS.map((link) => (
              <Link key={`${link.href}${link.label}`} href={link.href}>
                {link.label}
              </Link>
            ))}
          </ul>
          <StyledDiv style={{ width: "300px" }}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 40H8C5.79086 40 4 38.2092 4 36V12C4 9.79086 5.79086 8 8 8H40C42.2092 8 44 9.79086 44 12V36C44 38.2092 42.2092 40 40 40ZM8 12V36H40V12H8ZM31 32C28.2386 32 26 29.7614 26 27C26 24.2386 28.2386 22 31 22C33.7614 22 36 24.2386 36 27C36 28.326 35.4732 29.5978 34.5356 30.5356C33.5978 31.4732 32.326 32 31 32ZM23 32C20.2386 32 18 29.7614 18 27C18 24.2386 20.2386 22 23 22C24.0856 22.0008 25.1404 22.361 26 23.024C24.7426 23.9582 24.0012 25.4324 24.0012 26.999C24.0012 28.5656 24.7426 30.0398 26 30.974C25.1406 31.6378 24.0858 31.9986 23 32Z"
                fill="#2B2B2B"
              />
            </svg>
            <Link href="/connect">Connect MetaMask Wallet</Link>
          </StyledDiv>
        </StyledDiv>
      </StyledNav>
    </React.Fragment>
  );
};

export { Navbar };
export type { NavbarProps };
