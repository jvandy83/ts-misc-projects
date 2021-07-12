import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReport';

const filename = 'football.csv';

const matchReader = MatchReader.fromCsv(filename);
matchReader.load();

const summary = Summary.winsAnalysisAndHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);

// fs.readFile('football.csv', (err, buffer) => {
//   if (err) {
//     throw err;
//   }
//   console.log('success...');
//   const data = buffer.toString();
//   console.log(data);
// });

// fs.open(fileName, 'r', (err, fd) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('file open');
//     fs.fstat(fd, (err, stat) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(stat);
//       }
//     });
//   }
//   fs.close(fd, (err) => {
//     console.log('file closed');
//   });
// });

// fs.open(fileName, 'r', function (err, fd) {
//   console.log('file open...');
//   fs.fstat(fd, function (err, stats) {
//     console.log(stats);
//     var bufferSize = stats.size,
//       chunkSize = 512,
//       buffer = Buffer.alloc(stats.size),
//       bytesRead = 0;

//     while (bytesRead < bufferSize) {
//       if (bytesRead + chunkSize > bufferSize) {
//         chunkSize = bufferSize - bytesRead;
//       }
//       fs.read(fd, buffer, bytesRead, chunkSize, bytesRead, (err, bytesRead) => {
//         if (!err) {
//           bytesRead += chunkSize;
//         }
//       });
//     }
//     console.log(buffer.toString('utf8'));
//     fs.close(fd, (err) => {
//       console.log('file closed...');
//     });
//   });
// });

// fs.open(filename, 'r', (err, fd) => {
//   if (!err) {
//     fs.fstat(fd, (err, stats) => {
//       if (err) {
//         throw err;
//       } else {
//         const buffer = Buffer.alloc(stats.size);
//         fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
//           if (!err) {
//             console.log('***BYTES_READ***', bytesRead);
//             console.log(buffer.toString());
//           } else {
//             console.log(`error: ${err.code} \nmessage: ${err.message}`);
//           }
//         });
//         fs.close(fd, (err) => {
//           console.log('file closed...');
//         });
//       }
//     });
//   } else {
//     throw err;
//   }
// });

// const filename = path.resolve('../', 'football.csv');

// fs.open('football.csv', 'r', (err, fd) => {
//   if (err) {
//     throw err;
//   } else {
//     fs.fstat(fd, (err, stats) => {
//       if (err) {
//         throw err;
//       } else {
//         const options = {
//           flags: 'r',
//           encoding: 'utf-8',
//           fd: fd,
//           autoClose: true,
//           start: 0,
//           end: stats.size,
//           highWaterMark: stats.size,
//         };
//         const file = fs.createReadStream('football.csv');
//         let store: string[] = [];
//         file.on('data', function (chunk: string) {
//           const buf: string[] = chunk.toString().split('\n');
//           console.log(buf);
//         });
//       }
//     });
//   }
//   fs.close(fd, (err) => {
//     console.log('file closed...');
//   });
// });

// console.log('process.argv', process.argv);
