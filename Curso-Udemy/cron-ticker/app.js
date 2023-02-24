const cron = require('node-cron')
const { syncDB } = require('./tasks/sync-db')

console.log('Inicio')

//Cada asterisco significa: segundo, minuto, hora, dia, mes y dia de la semana
cron.schedule('1-59/5 * * * * *', syncDB)
