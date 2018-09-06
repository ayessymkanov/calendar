export const daysInThisMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

export const getMonth = () => {
  const now = new Date();
  const monthIndex = now.getMonth() + 1
  switch(monthIndex) {
    case 1: return 'January'
    case 2: return 'February'
    case 3: return 'March'
    case 4: return 'April'
    case 5: return 'May'
    case 6: return 'June'
    case 7: return 'July'
    case 8: return 'August'
    case 9: return 'September'
    case 10: return 'October'
    case 11: return 'November'
    case 12: return 'December'
    default: return ''
  }
}