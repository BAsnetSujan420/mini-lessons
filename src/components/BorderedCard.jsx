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
`;

const MediumCircle = styled.div``;
const BigCircle = styled.div``;
const SmallCircle = styled.div``;

export default BorderedCard;
