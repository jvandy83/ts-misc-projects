import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      // split entire file on newline character
      .split('\n')
      // 1 match = 1 row
      // create array for each match
      .map((row) => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
