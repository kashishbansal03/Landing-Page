import React from 'react';
import styled from 'styled-components';
import cont1 from '../../images/cover_not_found.jpg';
import cont2 from '../../images/cover_not_found.jpg'
import cont3 from '../../images/cover_not_found.jpg'
import cont4 from '../../images/cover_not_found.jpg'




const Contributors = styled.section`
  padding: 30px;
  background-color: #C06C84;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 42px;
  color: #F5F0F0;
  margin-bottom: 48px;
`;

const ContributorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto;
  gap: 24px;
`;

const ContributorBox = styled.div`
  padding: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: #ffffff;
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 180px;
  margin: 5px;
`;

const Heading = styled.h3`
  font-size: 24px;
  color: #000000;
  margin: auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #000000;
  margin: auto;
`;


const ContributorsSection = () => {
  return (
    <Contributors>
      <Title>Contributors</Title>
      <ContributorGrid>
        <ContributorBox>
          <Image src={cont1} />
          <Heading>1</Heading>
          <Paragraph>
          Efficient Coder | Embracing Diligence and Critical Thinking | Mindset for Growth, Honesty at Core.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={cont2} />
          <Heading>2</Heading>
          <Paragraph>
          Diligent Coder | Embracing hardwork and Analytical Thinking | Believe in learning and growth.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={cont3}  />
          <Heading>3</Heading>
          <Paragraph>
          Proficient Coder | Incorporating Perseverance and Critical Thinking | Confident and Patient.
          </Paragraph>
        </ContributorBox>
        <ContributorBox>
          <Image src={cont4} alt="Contributor Icon" />
          <Heading>4L</Heading>
          <Paragraph>
          Agile programmer | Encompassing Self Confidence and Meticulousness | Punctual and Generous.
          </Paragraph>
        </ContributorBox>
      </ContributorGrid>
    </Contributors>
  );
};

export default ContributorsSection;
