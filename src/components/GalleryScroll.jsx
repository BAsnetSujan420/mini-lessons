import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: auto;
  border: 3px solid;
  padding: 16px;
`;

const CatImage = styled.img`
  display: revert;
  width: 32%;
`;

export default function GalleryScroll() {
  return (
    <Wrapper>
      <CatImage
        src="https://courses.joshwcomeau.com/cfj-mats/cat-300px.jpg"
        alt="Cat licking itself"
      />
      <CatImage
        src="https://courses.joshwcomeau.com/cfj-mats/cat-two-300px.jpg"
        alt="Curious cat with bright blue background"
      />
      <CatImage
        src="https://courses.joshwcomeau.com/cfj-mats/cat-three-300px.jpg"
        alt="Majestic white cat with piercing blue eyes"
      />
      <CatImage
        src="https://courses.joshwcomeau.com/cfj-mats/cat-four-300px.jpg"
        alt="The grumpiest cat you've ever seen"
      />
    </Wrapper>
  );
}
