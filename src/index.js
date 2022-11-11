const app = require('./app');
app.listen(app.get('port'));
console.log('server listeng on port',app.get('port'));
