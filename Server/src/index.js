
require('dotenv').config();
require('./database');
const app = require('./app');

const main = async () => {
    await app.listen(app.get('Port'));
    console.log(`app running on port ${app.get('Port')}`);
};


main();
