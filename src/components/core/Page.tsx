import { FC } from 'react';
import { s, screen } from 'services/style';
import { useBootstrap } from 'services/utils';

const PageContainer = s('div')`
  position: relative;
  min-height: 100vh;
  background-color: ${({ theme }) => theme!.colors.background};
  transition: background-color 400ms;
`;

const ContentContainer = s('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  ${screen.mobile} {
    min-height: unset;
  }
`;

const InnerContentContainer = s('main')`
  position: relative;
  width: 80vw;
  max-width: 510px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Page: FC = ({ children }) => {
  useBootstrap();
  return (
    <PageContainer>
      <ContentContainer>
        <InnerContentContainer>{children}</InnerContentContainer>
      </ContentContainer>
    </PageContainer>
  );
};