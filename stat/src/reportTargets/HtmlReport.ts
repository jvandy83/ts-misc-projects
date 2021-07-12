import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Html Report</title>
        </head>
        <body>
          <div>
            <h1>Analysis Output</h1>
            <p>Team Man United won 18 games.</p>
          </div>
        </body>
      </html>
    `;

    fs.writeFile('report.html', html, (err) => {
      if (err) {
        console.error(`Error: ${err.message} \nmessage: ${err.message}`);
      } else {
        console.log(`report.html file created successfully!!!`);
      }
    });
  }
}
