import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';
import { stringToDate } from './utils';

export class MatchReader extends CsvFileReader {
  mapRow(row: string[]): MatchData {
    return [
      stringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6]
    ];
  }
}
