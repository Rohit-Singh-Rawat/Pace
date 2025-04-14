import React, { useRef, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { cn } from '../../lib/utils';

export interface DayItem {
	day: string;
	date: number;
	current: boolean;
	fullDate: Date;
}

interface DaySelectorProps {
	days: DayItem[];
	selectedDay: number;
	onSelectDay: (index: number) => void;
}

export function DaySelector({ days, selectedDay, onSelectDay }: DaySelectorProps) {
	const scrollViewRef = useRef<FlatList<DayItem>>(null);

	return (
		<FlatList
			ref={scrollViewRef}
			data={days}
			horizontal
			decelerationRate='fast'
			snapToInterval={7 * 56}
			showsHorizontalScrollIndicator={false}
			renderItem={({ item, index }) => (
				<TouchableOpacity
					onPress={() => onSelectDay(index)}
					className={cn(
						'items-center  w-14 h-14 flex flex-col justify-center',
						index === selectedDay
							? 'bg-primary rounded-2xl  text-black'
							: 'bg-transparent rounded-2xl  text-white'
					)}
				>
					<Text
						className={cn('text-white font-bold text-lg', index === selectedDay && 'text-black')}
					>
						{item.date}
					</Text>
					<Text
						className={cn('text-white text-xs font-medium', index === selectedDay && 'text-black')}
					>
						{item.day}
					</Text>
				</TouchableOpacity>
			)}
			keyExtractor={(item, index) => index.toString()}
			initialScrollIndex={days.findIndex((day) => day.current)}
			getItemLayout={(data, index) => ({
				length: 50,
				offset: 50 * index,
				index,
			})}
		/>
	);
}
