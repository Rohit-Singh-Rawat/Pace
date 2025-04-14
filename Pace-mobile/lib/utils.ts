import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * A utility function that combines clsx and tailwind-merge
 * It allows for conditional class names with proper Tailwind conflict resolution
 */
export function cn(...inputs: ClassValue[]): string {
	return twMerge(clsx(inputs));
}
