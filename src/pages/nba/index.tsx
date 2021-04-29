import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { tw, css } from 'twind/css';
import styled from 'styled-components';

import Button, { CtaLargeButtonWrapper } from '@/components/button';

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
import Text from '@/components/text';
import Teams from '@/components/Teams';

import { GameUtils } from 'utils/';

const headerStyle = css`
  background-color: rgb(255, 255, 255, 0.93);
  min-height: calc(100vh - 6rem);
  text-align: center;
  padding-left: 16px;
  padding-right: 16px;
`;

const spanStyle = css`
  text-align: center;
  background-color: lightgray;
  opacity: 0.7;
  padding: 2px 16px;
`;

const Team = ({ children }: any) => (
  <h1 className={tw(`font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-center leading-snug text-gray-800`)}>
    {children}
  </h1>
);

const TestStyledComponentsWithTailwind = styled.h1.attrs<any>({ className: `${tw('bg-red-200')}` })``;

const NBAGamePage = () => {
  const router = useRouter();
  const { game, isRandom } = router.query;
  if (!game) {
    console.log('***** NO GAME DATA LOADED ==>');
    return null;
  }
  const [team1, setTeam1] = useState('');
  const [team2, setTeam2] = useState('');
  console.log('game ==>', game);

  const { date, team1: t1, team2: t2, time } = GameUtils.parseGameParamKey(game);

  useEffect(() => {
    setTeam1(t1);
    setTeam2(t2);
  }, [t1, t2]);

  GameUtils.toLocalTime();

  const handleRandomTeams = () => {
    const new1 = GameUtils.getRandomTeam();
    const new2 = GameUtils.getRandomTeam();
    setTeam1(new1);
    setTeam2(new2);
  };

  return (
    <>
      <Page>
        <NextSeo title="" description="" />
        <header className={tw(headerStyle)}>
          <div className={tw(`max-w-4xl mx-auto py-16 flex flex-col`)}>
            <Teams teams={[team1, team2]} />

            <div id="steaming-time-text" className={tw(`mt-6 max-w-xl mx-auto`)}>
              <p className={tw(`text-gray-700 text-sm md:text-lg mr-2`)}>Streaming Live Today</p>
              <p className={tw(`text-gray-700 text-sm md:text-lg`)}>at {time} on ESPN</p>
            </div>
            <br />
            <button type="button" className={tw('text-indigo-500')} onClick={handleRandomTeams}>
              randomize teams
            </button>
            <br />
            <br />
            <br />
            <br />
            <Text.Info>TV Stream Deal of The Month: VIDGO</Text.Info>
            <div className={tw(`flex justify-center items-center w-full mx-auto`)}>
              <CtaLargeButtonWrapper>
                <Button primary large>
                  WATCH LIVE - $10 FIRST MONTH
                </Button>
              </CtaLargeButtonWrapper>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CtaLargeButtonWrapper>
            <Button primary large>
              WATCH NBA GAMES LIVE
            </Button>
          </CtaLargeButtonWrapper>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className={tw(`text-3xl`)}>FEATURED TV STREAMING APP OF THE MONTH</h2>
          <br />
          <br />
          <div style={{ padding: '40px' }}>
            <div
              id="vidgo-img-mobile"
              className={tw(`md:hidden flex flex-col justify-center items-center`)}
              style={{ margin: '0 auto' }}
            >
              <img alt="vidgo" src="/images/vidgo-mobile1.png" />
              <img alt="vidgo" src="/images/vidgo-mobile2.png" />
            </div>
            <div
              id="vidgo-img-desktop"
              className={tw(`hidden md:block flex justify-center items-center`)}
              style={{ margin: '0 auto' }}
            >
              <img alt="vidgo" src="/images/vidgo-desktop.png" />
            </div>
          </div>
          <br />
          <br />

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
          <div className="flex flex-col justify-center items-center">
            <Text.Info>Special Deal of The Month:</Text.Info>
            <Text.Info>Access Live Stream App VIDGO for only $10 first month!</Text.Info>
            <CtaLargeButtonWrapper>
              <Button primary large>
                LIVE STREAM NOW!
              </Button>
            </CtaLargeButtonWrapper>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </header>

        <main>
          {/* <span className={tw(spanStyle)}>Video Section</span> */}
          {/* <VideoSection /> */}
          {/* <span className={tw(spanStyle)}>List Section</span> */}
          {/* <ListSection /> */}
          {/* <span className={tw(spanStyle)}>Feature Section</span> */}
          {/* <FeatureSection /> */}
          {/* <span className={tw(spanStyle)}>Cases Section</span> */}
          {/* <CasesSection /> */}
          {/* <span className={tw(spanStyle)}>SocialProof Section</span> */}
          {/* <SocialProof /> */}
          {/* <span className={tw(spanStyle)}>Pricing Section</span> */}
          {/* <PricingTable /> */}
        </main>
        <Footer />
      </Page>
    </>
  );
};

export default NBAGamePage;
