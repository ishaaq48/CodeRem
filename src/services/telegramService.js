const axios = require('axios');
const { TELEGRAM_BOT_TOKEN, CHAT_ID } = require('../config/constants');

const sendTelegramNotification = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await axios.post(url, { chat_id: CHAT_ID, text: message });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error(
      'Error sending Telegram message:',
      error.response?.data?.description || error.message
    );
  }
};

module.exports = { sendTelegramNotification };
