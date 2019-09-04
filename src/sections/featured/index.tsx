import React from "react";
import styled from "styled-components";

import { Text, ContentCard } from "~components/index";
import copy from "~assets/copy";

const sectionCopy = copy.featuredSection;

const Container = styled.div`
  position: relative;
  margin-top: 50px;

  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  position: relative;
  width: 400px;
  max-width: 28%;
`;

const FeaturedCard = styled(ContentCard)`
  position: relative;
  width: 100%;
`;

const LeftCard = styled(FeaturedCard)``;

const CenterCard = styled(FeaturedCard)``;

const RightCard = styled(FeaturedCard)``;

const HeaderText = styled(Text)`
  margin: 30px 0;
`;

const BodyText = styled(Text)`
  margin-bottom: 10px;
`;

const Featured = () => (
  <Container>
    <Column>
      <LeftCard
        title={sectionCopy.cards.first.title}
        linkHref={sectionCopy.cards.first.linkHref}
        linkText={sectionCopy.cards.first.linkText}
        imgSrc={sectionCopy.cards.first.imgSrc}
        imgAlt={sectionCopy.cards.first.imgAlt}
      >
        {sectionCopy.cards.first.desc.map((paragraph, i) => (
          <BodyText variant="body" key={`${paragraph}-${i}`}>
            {paragraph}
          </BodyText>
        ))}
      </LeftCard>
    </Column>

    <Column>
      <HeaderText variant="heading">{sectionCopy.title}</HeaderText>
      <CenterCard
        title={sectionCopy.cards.second.title}
        linkHref={sectionCopy.cards.second.linkHref}
        linkText={sectionCopy.cards.second.linkText}
      >
        {sectionCopy.cards.second.desc.map((paragraph, i) => (
          <BodyText variant="body" key={`${paragraph}-${i}`}>
            {paragraph}
          </BodyText>
        ))}
      </CenterCard>
    </Column>

    <Column>
      <RightCard
        title={sectionCopy.cards.third.title}
        linkHref={sectionCopy.cards.third.linkHref}
        linkText={sectionCopy.cards.third.linkText}
      >
        {sectionCopy.cards.third.desc.map((paragraph, i) => (
          <BodyText variant="body" key={`${paragraph}-${i}`}>
            {paragraph}
          </BodyText>
        ))}
      </RightCard>
    </Column>
  </Container>
);

export default Featured;
