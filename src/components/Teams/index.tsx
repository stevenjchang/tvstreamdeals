import { useRouter } from 'next/router';
import { tw, css } from 'twind/css';
import styled from 'styled-components';

const Team = ({ children }: any) => (
  <h1 className={tw(`font-sans font-bold text-4xl sm:text-6xl lg:text-7xl  leading-snug text-gray-800`)}>{children}</h1>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TeamLogo = styled.img`
  width: 75px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Teams = ({ teams }: any) => {
  const router = useRouter();
  const { show } = router.query;
  const showTeams = show; //change this for quick toggle
  const [team1, team2] = teams;
  const img1 = showTeams ? team1.imgUrl : 'images/placeholder.svg';
  const img2 = showTeams ? team2.imgUrl : 'images/placeholder.svg';
  return (
    <Wrapper>
      <div className={tw(`flex justify-center items-center`)}>
        <TeamLogo src={img1} />
        <Team>{team1.name}</Team>
      </div>

      <p className={tw(`text-3xl mx-6`)}>@</p>

      <div className={tw(`flex justify-center items-center flex-row-reverse md:flex-row`)}>
        <Team>{team2.name}</Team>
        <TeamLogo src={img2} />
      </div>
    </Wrapper>
  );
};

export default Teams;
