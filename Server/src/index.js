require('dotenv').config()
require('./database')
const app = require('./app');

async function main() {
    await app.listen(2700);
    console.log('app running on port 2700');
}


main();