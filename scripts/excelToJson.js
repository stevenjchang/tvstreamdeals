/* eslint-disable */

const fs = require('fs');

const transformData = (data) => {
  return data.map((row) => {
    return {
      team1: row.team1,
      team2: row.team2,
      tv: row.TV,
      date: row.Date,
      time: row['ET Standard'],
    };
  });
};

const writeFile = (data) => {
  fs.writeFile('./src/data/games.json', data, (err) => console.log('writeFile Error ==>', err));
};

const rawToFormattedGameData = () => {
  const rawData = fs.readFileSync('./src/data/raw/rawGames.json');
  const jsonData = JSON.parse(rawData);
  const newData = transformData(jsonData.rawData);
  writeFile(JSON.stringify(newData, null, 4));
  console.log('excelToJson successful ==>');
};

const formatTeamMapping = () => {
  const rawData = fs.readFileSync('./src/data/raw/rawTeam.json');
  // console.log('nbaTeamMapping ==>', nbaTeamMapping);
  const jsonData = JSON.parse(rawData).data;
  const newData = jsonData.map((item) => {
    const abbr = item.abbreviation.toLowerCase();
    return {
      abbr,
      fullName: item.teamName,
      name: item.simpleName,
      city: item.location,
      imgUrl: `/images/teams/${abbr}.svg`,
    };
  });
  fs.writeFile('./src/utils/gameUtils/teamMapping.json', JSON.stringify({ data: newData }, null, 2), (err) =>
    console.log('writeFile error ==>', err),
  );
  console.log('formatTeamMapping successful ==>', formatTeamMapping);
};

// rawToFormattedGameData();
formatTeamMapping();
