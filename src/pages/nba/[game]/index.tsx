import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { tw, css } from 'twind/css';
import Button from '@/components/button';

import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import VideoSection from '@/components/video-section';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';

import { GameUtils } from 'utils/';

const headerStyle = css`
  background-color: #ffffff;
  min-height: calc(100vh - 6rem);
  text-align: center;
`;

const spanStyle = css`
  text-align: center;
  background-color: lightgray;
  opacity: 0.7;
  padding: 2px 16px;
`;

const Team = ({ children }: any) => (
  <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800`)}>
    {children}
  </h1>
);

const NBAGamePage = () => {
  const router = useRouter();
  const { game } = router.query;
  if (!game) {
    return null;
  }

  const { date, team1, team2 } = GameUtils.parseGameParamKey(game);

  GameUtils.toLocalTime();

  return (
    <>
      <Page>
        <NextSeo title="" description="" />
        <header className={tw(headerStyle)}>
          <div className={tw(`max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8 flex flex-col`)}>
            <Team>{team1.name}</Team>
            <p className={tw(`text-xl`)}>vs</p>
            <Team>{team2.name}</Team>
            <div className={tw(`max-w-xl mx-auto`)}>
              <p className={tw(`mt-10 text-gray-500 text-xl lg:text-3xl`)}>4:05 PM Today | Apr 24</p>
            </div>
            <div className={tw(`mt-10 flex justify-center items-center w-full mx-auto`)}>
              <Button primary large>
                Stream Game Live{' '}
              </Button>
            </div>
          </div>
          {/* <div className={tw(`flex justify-center w-full`)}>
            <div className={tw(`mt-4 w-full`)}>
              <p className={tw(`font-mono uppercase text-center font-medium text-sm text-gray-600`)}>
                These folks get it
              </p>
              <div className={tw(`flex items-center justify-center mx-auto flex-wrap`)}>
                <Aws className={tw(`m-12 mb-8`)} width={120} />
              <Netlify className={tw(`m-12`)} width={140} />
              <Nike className={tw(`m-12`)} width={140} />
              <Figma className={tw(`m-12`)} width={140} />
              </div>
            </div>
          </div> */}
        </header>
        <main>
          {/* <span className={tw(spanStyle)}>Video Section</span> */}
          {/* <VideoSection /> */}
          <span className={tw(spanStyle)}>List Section</span>
          <ListSection />
          <span className={tw(spanStyle)}>Feature Section</span>
          <FeatureSection />
          <span className={tw(spanStyle)}>Cases Section</span>
          <CasesSection />
          <span className={tw(spanStyle)}>SocialProof Section</span>
          <SocialProof />
          <span className={tw(spanStyle)}>Pricing Section</span>
          <PricingTable />
        </main>
        <Footer />
      </Page>
    </>
  );
};

export default NBAGamePage;
