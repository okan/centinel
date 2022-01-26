import dayjs from 'dayjs';

export function getDayOfToday() {
    return dayjs().date();
}

export function getDaysOfThisMonth() {
    return dayjs().daysInMonth();
}

export function getRemainingDaysCountForThisMonth() {
    return getDaysOfThisMonth() - getDayOfToday();
}