const fs = require('fs');
const path = require('path');


fs.rmdir(path.join(__dirname , '..', 'node_modules', '.cache', 'babel-loader'), {
	recursive: true,
}, () => console.log('cleared cache'))

