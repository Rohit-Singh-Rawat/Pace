import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { cn } from '../../lib/utils';
import WorkoutIcon from '../icons/tabs/workouts';
import { CardioIcon } from '../icons/tabs';
import { StatCard } from './StatCard';

export type ActivityType = 'workout' | 'cardio';

interface ActivitySummaryProps {
	initialActivityType?: ActivityType;
	onActivityTypeChange?: (type: ActivityType) => void;
}

export function ActivitySummary({
	initialActivityType = 'workout',
	onActivityTypeChange,
}: ActivitySummaryProps) {
	const [activityType, setActivityType] = useState<ActivityType>(initialActivityType);

	const handleActivityTypeChange = (type: ActivityType) => {
		setActivityType(type);
		onActivityTypeChange?.(type);
	};

	const toggleActivityType = () => {
		const newType = activityType === 'workout' ? 'cardio' : 'workout';
		handleActivityTypeChange(newType);
	};

	const renderStats = () => {
		if (activityType === 'workout') {
			return (
				<>
					<StatCard
						label='EXERCISES'
						value={3}
						className='mr-2'
					/>
					<View className='w-px h-full bg-border mx-1' />
					<StatCard
						label='SETS'
						value={12}
						className='mr-2'
					/>
					<View className='w-px h-full bg-border mx-1' />
					<StatCard
						label='TOTAL TIME'
						value='45 min'
					/>
				</>
			);
		}

		return (
			<>
				<StatCard
					label='DISTANCE'
					value='5.2 km'
					className='mr-2'
				/>
				<View className='w-px h-full bg-border mx-1' />
				<StatCard
					label='PACE'
					value='5:30'
					className='mr-2'
				/>
				<View className='w-px h-full bg-border mx-1' />
				<StatCard
					label='DURATION'
					value='28 min'
				/>
			</>
		);
	};

	return (
		<View className={cn('bg-backgroundSecondary rounded-xl mt-4 border border-border')}>
			<View className={cn('flex-row justify-between items-center mb-5')}>
				<TouchableOpacity
					style={{
						shadowColor: '#000',
						shadowOffset: { width: 0, height: 2 },
						shadowOpacity: 0.25,
						shadowRadius: 3.84,
						elevation: 5,
					}}
					className={cn(
						'flex-row items-center p-2.5 px-4 bg-backgroundSecondary/30 rounded-br-xl border-r border-b border-border'
					)}
					onPress={toggleActivityType}
				>
					{activityType === 'workout' ? (
						<WorkoutIcon focused={true} />
					) : (
						<CardioIcon color='#D4FB54' />
					)}
				</TouchableOpacity>
				<View className={cn('flex-1 flex-row justify-end items-center p-2 px-4')}>
					<Text className={cn('text-[#D4FB54] text-lg font-bold')}>
						{activityType === 'cardio' ? 'CARDIO' : 'WORKOUT'}
					</Text>
				</View>
			</View>

			<View
				className={cn(
					'flex-row justify-between items-center border-t mx-4 border-border p-2 pt-0 px-4'
				)}
			>
				{renderStats()}
			</View>
		</View>
	);
}
