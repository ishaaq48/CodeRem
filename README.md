# CodeRem

**CodeRem** is an automated weekly notifier that reviews GitHub commit history and sends notifications via Telegram. It dynamically checks commits made within the current week and provides a concise summary of file changes to keep you updated on project progress.

---

## Features

- **Automated Weekly Summary**: Fetches and reviews commits made during the week and notifies via Telegram.
- **GitHub Integration**: Uses GitHub GraphQL API to fetch commit details.
- **Telegram Notifications**: Sends summarized updates directly to a specified Telegram chat.
- **Scheduled Tasks**: Automates commit reviews using `node-cron`.

---

## Tech Stack

- **Node.js**: Server-side framework.
- **Express.js**: Simplified server management.
- **GitHub GraphQL API**: Retrieve commit data.
- **Telegram Bot API**: For notifications.
- **Node-Cron**: Schedule weekly checks.
- **Dotenv**: Manage sensitive environment variables.

---

## Prerequisites

Before running the project, ensure the following:

1. **Node.js** is installed on your system.
2. A **GitHub Personal Access Token** with repository read access.
3. A **Telegram bot** and **chat ID** (create via [BotFather](https://core.telegram.org/bots#botfather)).

---

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ishaaq48/coderem.git
   cd coderem
2. **Install Dependencies:
   ```bash
   npm install
3. **Set Up Environment Variables:
   TELEGRAM_BOT_TOKEN=your_telegram_bot_token
   CHAT_ID=your_telegram_chat_id
   GITHUB_API_TOKEN=your_github_api_token
4. **Start the Server:
    ```bash
    npm start

---

## Future Enhancements

- **Multi-Repo Support**: Monitor commits across multiple repositories.
- **Enhanced Analytics**: Include LOC changes and commit messages in notifications.
- **Dashboard Integration**: Include LOC changes and commit messages in notifications.
- **Email Notifications**: Add an alternative to Telegram alerts.

---

## Project Structure
  ```bash
  CodeRem/
  │
  ├── src/
  │   ├── config/
  │   │   ├── constants.js        API tokens and repository details
  │   │   └── cronConfig.js       Cron job setup
  │   ├── services/
  │   │   ├── githubService.js    Fetch commit history from GitHub
  │   │   └── telegramService.js  Send notifications
  │   ├── utils/
  │   │   └── dateUtils.js        Date range helper functions
  │   └── app.js                  Main application logic
  │
  ├── .env                        Environment variables
  ├── .gitignore                  Ignore unnecessary files
  ├── package.json                Project metadata and dependencies
  ├── README.md                   Project documentation
  └── server.js                   Application entry point

```
