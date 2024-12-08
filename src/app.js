const { getCurrentWeekDateRange } = require('./utils/dateUtils');
const { fetchCommitHistory } = require('./services/githubService');
const { sendTelegramNotification } = require('./services/telegramService');

const runTask = async () => {
  console.log('Fetching commit history for the current week...');
  const { startDate, endDate } = getCurrentWeekDateRange();
  console.log(`Date Range: ${startDate.toISOString()} - ${endDate.toISOString()}`);

  const fileNames = await fetchCommitHistory(startDate, endDate);

  if (fileNames.length > 0) {
    const message = `Files committed between ${startDate.toDateString()} and ${endDate.toDateString()}:\n- ${fileNames.join('\n- ')}`;
    console.log('Sending notification...');
    await sendTelegramNotification(message);
  } else {
    console.log('No files committed in the specified date range.');
  }
};

module.exports = { runTask };
