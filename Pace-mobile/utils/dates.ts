import { DayItem } from '../components/training/DaySelector';

const DAYS_OF_WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/**
 * Generates two weeks of day data (previous and current week)
 * @returns Array of DayItem objects
 */
export function generateTwoWeeks(): DayItem[] {
	const today = new Date();
	const currentDay = today.getDay();
	const result: DayItem[] = [];

	// Generate both weeks in a single loop
	for (let i = -7; i < 7; i++) {
		const date = new Date(today);
		date.setDate(today.getDate() - currentDay + i);
		
		result.push({
			day: DAYS_OF_WEEK[date.getDay()],
			date: date.getDate(),
			current: i === 0,
			fullDate: date,
		});
	}

	return result;
}

/**
 * Gets the index of the current day in the days array
 * @param days Array of DayItem objects
 * @returns Index of current day or 0
 */
export function getCurrentDayIndex(days: DayItem[]): number {
	const index = days.findIndex((day) => day.current);
	return index !== -1 ? index : 0;
}
