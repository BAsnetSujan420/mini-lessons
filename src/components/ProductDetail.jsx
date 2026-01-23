import React from "react";
import styled from "styled-components";

export default function ProductCard() {
  return (
    <Page>
      <Card>
        <ProductPhoto>
          <ProductImage
            src="https://courses.joshwcomeau.com/cfj-mats/watch-rachit-tank.jpg"
            alt="Product photo of a minimal watch"
          />
        </ProductPhoto>

        <Flag>New and Improved!</Flag>

        <Title>
          Novus Watch <Subtitle>Series IV</Subtitle>
        </Title>

        <Description>
          The pinnacle of fashion and tech. This wearable piece is an homage to
          gilded palaces and minimal regalia, combining nouveau-deco and
          brutalism influences in a compact, Swiss-made watch.
        </Description>
      </Card>
    </Page>
  );
}

const Page = styled.div`
  background: hsl(238deg 28% 73%);
  padding: 48px;
  color: black;
`;

const Card = styled.article`
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 0px 2px 8px hsl(238deg 28% 50% / 0.5);
`;

const ProductPhoto = styled.div`
  margin: -16px;
  margin-bottom: 12px;
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 8px 8px 0 0;
`;

const Flag = styled.div`
  position: absolute;
  top: 8px;
  left: -8px;
  padding-left: 8px;
  padding-right: 16px;
  font-size: 1rem;
  line-height: 2;
  font-weight: 500;
  background: hsl(50deg 95% 85%);
  box-shadow: 0px 1px 2px hsl(50deg 45% 45% / 0.2);
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5em;
`;

const Subtitle = styled.span`
  font-size: 1rem;
  color: hsl(0deg 0% 30%);
  font-weight: 300;
  margin-left: 4px;
`;

const Description = styled.p`
  line-height: 1.5;
`;
