import moment from 'moment';

export const lastUserUpdate = (oldUpdate, newUpdate) => {
  const diffInSeconds = moment(newUpdate).diff(moment(oldUpdate), 'seconds');
  const diffInMinutes = moment(newUpdate).diff(moment(oldUpdate), 'minutes');
  const diffInHours = moment(newUpdate).diff(moment(oldUpdate), 'hours');
  const diffInDays = moment(newUpdate).diff(moment(oldUpdate), 'days');

  if (diffInSeconds <= 0) {
    return `just now`;
  }

  if (diffInSeconds < 3) {
    return `a few seconds ago`;
  }

  if (diffInSeconds > 3 && diffInSeconds < 59) {
    return `${diffInSeconds} seconds ago`;
  }

  if (diffInMinutes && diffInMinutes < 60) {
    return `${diffInMinutes} minutes ago`;
  }

  if (diffInHours && diffInHours < 24) {
    return `${diffInHours} hours ago`;
  }

  if (diffInHours >= 24 && diffInDays < 30) {
    return `${diffInDays} days ago`;
  }
};
