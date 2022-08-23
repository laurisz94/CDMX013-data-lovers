/* eslint-disable no-undef */
import { filterGender, filterSport, filterTeam} from '../src/data.js';
import data from '../src/data/athletes/athletes.js'

const information = data.athletes.map(athlete => [athlete.name, athlete]);
const athletesNoDuplicates = new Map(information);
const athletesNew = [...athletesNoDuplicates.values()];

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  it('return true for "M"', () => {
    expect(filterGender("F", athletesNew)).toHaveLength(876);
  });
  it('return true for "M"', () => {
    expect(filterGender("M", athletesNew)).toHaveLength(979);
  });
});


describe('filterSport', () => {
  it('is a function', () => {
    expect(typeof filterSport).toBe('function');
  });

  //it('returns `anotherExample`', () => {
    //expect(anotherExample()).toBe('OMG');
  //});
});

describe('filterTeam', () => {
  it('is a function', () => {
    expect(typeof filterTeam).toBe('function');
  });
});