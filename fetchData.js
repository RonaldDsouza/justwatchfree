// fetchData.js
const fs = require('fs');
const https = require('https');

const url = 'https://dlhd.so/schedule/schedule-generated.json';
const filePath = './public/sports-schedule.json';

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    fs.writeFileSync(filePath, data);
    console.log('Data saved to sports-schedule.json');
  });
}).on('error', (err) => {
  console.error('Error fetching data:', err);
});
