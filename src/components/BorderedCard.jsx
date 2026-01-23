import React from "react";
import styled from "styled-components";

function BorderedCard() {
  return (
    <Box>
      <BigCircle />
      <MediumCircle />
      <SmallCircle />
    </Box>
  );
}

const Box = styled.div`
  height: 250px;
  width: 400px;
  margin: 64px;
  border: 4px solid palevioletred;
  position: relative;
`;

const Circle = styled.div`
  position: absolute;
  border: inherit;
  border-radius: 50%;
  background-color: #242424;
`;

const MediumCircle = styled(Circle)`
  width: 35px;
  height: 35px;
  left: -20px;
  top: 35px;
`;
const BigCircle = styled(Circle)`
  width: 65px;
  height: 65px;
  left: -20px;
  top: -30px;
`;
const SmallCircle = styled(Circle)`
  width: 25px;
  height: 25px;
  left: 55px;
  top: -14px;
`;

export default BorderedCard;
