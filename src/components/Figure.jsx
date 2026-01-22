import React from "react";
import styled from "styled-components";

function Figure() {
  return (
    <div>
      <Wrapper style={{ "--img-width": "200px" }}>
        <ImageWrapper>
          <Image
            alt="A hallway with rainbow-colored lighting"
            src="https://courses.joshwcomeau.com/cfj-mats/wall-art.jpg"
          />
        </ImageWrapper>
        <figcaption>
          Photo by Efe Kurnaz in Camp Nou, Barcelona, Spain. Found on Unsplash.
        </figcaption>
      </Wrapper>

      <Wrapper style={{ "--img-width": "250px" }}>
        <ImageWrapper>
          <Image
            alt="A yawning kitten"
            src="https://courses.joshwcomeau.com/cfj-mats/cat-avatar-250px.jpg"
          />
        </ImageWrapper>
        <figcaption>Unknown photographer. Found on Unsplash.</figcaption>
      </Wrapper>
    </div>
  );
}

export const Wrapper = styled.figure`
  padding: 8px;
  border: 1px solid;
  margin-bottom: 32px;
  margin-inline: 32px;

  figcaption {
    text-align: center;
    color: #888888;
  }
`;

const Image = styled.img`
  width: var(--img-width);
`;

const ImageWrapper = styled.div`
  width: max-content;
`;

export default Figure;
