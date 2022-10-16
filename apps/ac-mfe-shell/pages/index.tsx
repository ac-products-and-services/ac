import { IHeroSection } from '@ac/ui-shared/components/HeroSection/types';
import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Suspense } from 'react';

const StyledPage = styled.div`
  .page {
  }
`;

//@ts-ignore --> TODO
const HeroSection: IHeroSection = dynamic(() => import('profile/HeroSection'), {
  suspense: true,
});

export const getStaticProps = () => {
  const remoteUrl = process.env['NEXT_PUBLIC_REMOTE_URL_PROFILE'] as string;
  return {
    props: {
      title: '4200:ac-mfe-shell',
      remoteUrl,
    },
  };
};

export function Index({ title, remoteUrl }) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.@emotion/styled file.
   */
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <StyledPage>
        <div className="wrapper">
          <div className="container">
            <Suspense>
              <HeroSection remoteUrl={remoteUrl} />
            </Suspense>
          </div>
        </div>
      </StyledPage>
    </>
  );
}

export default Index;
