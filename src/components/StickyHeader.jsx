import React from "react";
import styled from "styled-components";

const Page = styled.div`
  height: 150%;
  background: black;
`;

const Header = styled.header`
  height: 66px;
  background: slateblue;
  color: white;
  opacity: 0.96;

  position: sticky;
  top: -16px;
  padding-top: 16px;
`;

const NavList = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 16px;
  line-height: 50px;
`;

const Main = styled.main`
  padding: 32px;
`;

export default function StickyHeader() {
  return (
    <Page>
      <Header>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
      </Header>

      <Main>
        <p>Hello world!</p>
      </Main>
    </Page>
  );
}
