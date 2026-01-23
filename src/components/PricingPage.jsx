import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  height: 60px;
  line-height: 60px;
  background: #eee;
  color: #444444;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
`;

const Pricing = styled.section`
  margin-top: 80px;
  display: flex;
  gap: 16px;
  padding: 16px;
  padding-top: 80px;
  color: black;
  min-height: 1000px;
  isolation: isolate;
`;

const Card = styled.article`
  position: relative;
  z-index: 1;
  background: white;
  padding: 24px 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px hsl(0deg 0% 0% / 0.15);
`;

const PrimaryCard = styled(Card)`
  z-index: 2;
  margin: -32px -16px;
`;

export default function App() {
  return (
    <>
      <Header>Synergistic Inc.</Header>

      <Pricing>
        <Card>
          <h2>Starter</h2>
          <div className="price">$29</div>
          <p>For personal projects.</p>
          <ul>
            <li>3 projects</li>
            <li>100gb monthly transfer</li>
            <li>20gb storage</li>
            <li>No support</li>
          </ul>
          <button>Buy Now</button>
        </Card>

        <PrimaryCard>
          <h2>Pro</h2>
          <div className="price">$99</div>
          <p>
            For small businesses looking to grow. Our most popular plan for
            ambitious organizations.
          </p>
          <ul>
            <li>10 projects</li>
            <li>500gb monthly transfer</li>
            <li>1tb storage</li>
            <li>Email customer support</li>
          </ul>
          <button>Buy Now</button>
        </PrimaryCard>

        <Card>
          <h2>Enterprise</h2>
          <div className="price">Contact Us</div>
          <p>For large orgs.</p>
          <ul>
            <li>Unlimited projects, transfers, storage.</li>
            <li>Dedicated phone & email support</li>
          </ul>
          <button>Buy Now</button>
        </Card>
      </Pricing>
    </>
  );
}
