import dayjs from 'dayjs';

export function getRemainingDaysCountForThisMonth() {
    return dayjs().daysInMonth() - dayjs().date();
}

export function getDateAsStringForIndex(index: number) {
    return dayjs().add(index + 1, 'day').format('DD/MM/YYYY').toString()
}

export function getTimestampForIndex(index: number) {
    return dayjs().add(index + 1, 'day').unix();
}