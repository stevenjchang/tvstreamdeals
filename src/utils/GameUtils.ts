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

class GameUtils {
  static parseGameParamKey = (key: string) => {
    const date = key.substring(0, 6);
    const t1 = key.substring(6, 9);
    const t2 = key.substring(9, 12);
    const team1 = GameUtils.getTeam(t1);
    const team2 = GameUtils.getTeam(t2);
    return { date, team1, team2 };
  };

  static getTeam(abbr: string): Record<string, any> {
    return teamMapping[abbr] || { name: abbr, city: abbr };
  }

  static getDateTime() {}
}

export default GameUtils;
