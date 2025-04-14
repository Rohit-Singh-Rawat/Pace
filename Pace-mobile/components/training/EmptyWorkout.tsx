import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { StartWorkoutModal } from './StartWorkoutModal';
import { StartWorkoutOptions } from './StartWorkoutOptions';

interface EmptyWorkoutProps {
	title?: string;
	description?: string;
}

export function EmptyWorkout({
	title = 'No workouts for this day',
	description = 'Start a new workout to track your progress',
}: EmptyWorkoutProps) {
	const router = useRouter();

	return (
		<View
			className={cn(
				'bg-backgroundSecondary rounded-xl p-6 py-12 mt-6 items-center border border-border'
			)}
		>
			<Ionicons
				name='fitness-outline'
				size={36}
				color='#D4FB54'
				style={{ marginBottom: 16 }}
			/>
			<Text className={cn('text-white text-xl font-bold')}>{title}</Text>
			<Text className={cn('text-gray-400 text-sm text-center mt-1 mb-4')}>{description}</Text>
			<StartWorkoutModal
				title='New Workout'
				snapPoints={['70%',]}
				trigger={
					<Button
						title='Start Workout'
						className='mt-2 w-full text-lg'
						textClassName='text-black text-lg'
					/>
				}
			>
				<StartWorkoutOptions />
			</StartWorkoutModal>

			<View className='flex-row items-center mt-4'>
				<Ionicons
					name='information-circle-outline'
					size={16}
					color='#D4FB54'
				/>
				<Text className='text-gray-400 text-xs ml-1'>Log your sets, reps, and weights</Text>
			</View>
		</View>
	);
}
