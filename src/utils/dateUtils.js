const getCurrentWeekDateRange = () => {
  const now = new Date();
  const dayOfWeek = now.getUTCDay();
  const startOfWeek = new Date(now);
  startOfWeek.setUTCDate(now.getUTCDate() - dayOfWeek + 1); // Monday
  startOfWeek.setUTCHours(0, 0, 0, 0);

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6); // Sunday
  endOfWeek.setUTCHours(23, 59, 59, 999);

  return { startDate: startOfWeek, endDate: endOfWeek };
};

module.exports = { getCurrentWeekDateRange };
