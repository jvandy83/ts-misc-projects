import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

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
      });
  }
}
