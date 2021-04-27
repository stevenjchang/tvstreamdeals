import * as teams from './teamMapping.json';

function toDisplayTime(timeAsString: any) {
  const h = timeAsString.substring(0, 2);
  const hour = h[0] === '0' ? h[1] : h;
  const minute = timeAsString.substring(2, 4);
  return `${hour}:${minute} PM`;
}

function toDisplayDate(str: any) {
  const d = new Date(str);
}
export class GameUtils {
  static parseGameParamKey = (key: string | any) => {
    if (key.length !== 16) console.log('param key wrong length ==>');
    const date = key.substring(0, 6);
    const time = key.substring(6, 10);
    const t1 = key.substring(10, 13);
    const t2 = key.substring(13, 16);
    const team1 = GameUtils.getTeam(t1);
    const team2 = GameUtils.getTeam(t2);
    console.log('t1 ==>', t1);
    console.log('t2 ==>', t2);

    const test = toDisplayDate(date);

    return { date, team1, team2, time: toDisplayTime(time) };
  };

  static getTeam(abbr: string): Record<string, any> {
    const teamMapping = teams.data;
    const teamObject: any = teamMapping.find((item) => item.abbr === abbr);
    return teamObject;
  }

  static toLocalTime() {
    const offset = new Date().getTimezoneOffset() / 60;
  }
}

export default GameUtils;
