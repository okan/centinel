import dayjs from 'dayjs';

export function getRemainingDaysCountForThisMonth() {
    return dayjs().daysInMonth() - dayjs().date();
}