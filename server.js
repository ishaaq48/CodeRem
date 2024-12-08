require('dotenv').config();
const express = require('express');
const { scheduleCronJob } = require('./src/config/cronConfig');
const { runTask } = require('./src/app');

const app = express();
const PORT = 3000;

// Schedule weekly notification
scheduleCronJob(runTask);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
