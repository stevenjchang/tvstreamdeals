const teamMapping: any = {
  bos: {
    name: 'Celtics',
    city: 'Boston',
  },
  bkn: {
    name: 'Nets',
    city: 'Brooklyn',
  },
};

function toDisplayTime(timeAsString) {
  const h = timeAsString.substring(0, 2);
  const hour = h[0] === '0' ? h[1] : h;
  const minute = timeAsString.substring(2, 4);
  return `${hour}:${minute} PM`;
}

function toDisplayDate(str) {
  const d = new Date(str);
  console.log('d ==>', d);
}
class GameUtils {
  static parseGameParamKey = (key: string | any) => {
    const date = key.substring(0, 6);
    const time = key.substring(6, 10);
    const t1 = key.substring(10, 13);
    const t2 = key.substring(13, 16);
    const team1 = GameUtils.getTeam(t1);
    const team2 = GameUtils.getTeam(t2);

    const test = toDisplayDate(date);
    console.log('test ==>', test);

    return { date, team1, team2, time: toDisplayTime(time) };
  };

  static getTeam(abbr: string): Record<string, any> {
    return teamMapping[abbr] || { name: abbr, city: abbr };
  }

  static toLocalTime() {
    const offset = new Date().getTimezoneOffset() / 60;
  }
}

export default GameUtils;
