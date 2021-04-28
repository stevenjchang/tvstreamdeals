import { useRouter } from 'next/router';
import { tw, css } from 'twind/css';
import styled from 'styled-components';

const Team = ({ children }: any) => (
  <h1 className={tw(`font-sans font-bold text-4xl sm:text-6xl lg:text-7xl text-center leading-snug text-gray-800`)}>
    {children}
  </h1>
);

const TeamLogo = styled.img`
  width: 75px;
  margin-left: 16px;
  margin-right: 16px;
`;

const Teams = ({ teams }) => {
  const router = useRouter();
  const { show } = router.query;
  const showTeams = show; //change this for quick toggle
  const [team1, team2] = teams;
  const img1 = showTeams ? team1.imgUrl : 'images/placeholder.svg';
  const img2 = showTeams ? team2.imgUrl : 'images/placeholder.svg';
  return (
    <div className="flex justify-center items-center">
      <TeamLogo src={img1} />
      <Team>{team1.name}</Team>

      <p className={tw(`text-xl mx-6`)}>@</p>
      <Team>{team2.name}</Team>
      <TeamLogo src={img2} />
    </div>
  );
};

export default Teams;
