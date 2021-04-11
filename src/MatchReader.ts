import fs from 'fs';
import { dataStringToDate } from './Utils';
import { MatchResult } from './MatchResult';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) { }

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map(
        (row: string): string[] => {
          return row.split(',');
        }
      );
  }
}
