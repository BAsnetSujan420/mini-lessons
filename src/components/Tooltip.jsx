import React from "react";
import styled from "styled-components";

const Page = styled.div`
  background: #eee;
  min-height: 100vh;
  min-width: 500px;
  color: black;
`;

const Header = styled.header`
  position: relative;
  z-index: 2;

  height: 60px;
  line-height: 60px;
  background: pink;
  text-align: center;
`;

const Main = styled.main`
  position: relative;
  padding: 32px;
`;

const Tooltip = styled.div`
  position: absolute;
  z-index: 999999;
  top: -12px;

  left: 0;
  right: 0;
  margin: 0 auto;

  width: 90px;
  text-align: center;
  padding: 8px;

  background: white;
  box-shadow: 1px 2px 8px hsl(0deg 0% 0% / 0.25);
  border-radius: 6px;
`;

export default function App() {
  return (
    <Page>
      <Header>My Cool Site</Header>

      <Main>
        <Tooltip>A tooltip</Tooltip>
        <p>Some main content</p>
      </Main>
    </Page>
  );
}
