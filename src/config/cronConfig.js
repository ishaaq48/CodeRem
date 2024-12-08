const cron = require('node-cron');

module.exports.scheduleCronJob = (task) => {
  // Schedule every Monday at midnight
  cron.schedule('0 0 * * 1', task);
};
