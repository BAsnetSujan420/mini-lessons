import styled from "styled-components";

function Card() {
  return (
    <Wrapper>
      <p>
        Otters have long, slim bodies and relatively short limbs. Their most
        striking anatomical features are the powerful webbed feet used to swim,
        and their seal-like abilities holding breath underwater.
      </p>
      <ImageWrapper>
        <img
          alt="A cute otter in water"
          src="https://courses.joshwcomeau.com/cfj-mats/otter.jpg"
        />
      </ImageWrapper>
      <p>
        More importantly, otters are glorious water dogs, playful and curious.
        The otter, no other, is the best animal.
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: white;
  padding: 32px;
  color: black;
  border-radius: 8px;
  margin: 32px;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageWrapper = styled.div`
  margin-inline: -32px;
`;

export default Card;
