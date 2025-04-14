import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import CalendarIcon from '../icons/home/calendar';
import { RoutinesIcon } from '../icons/tabs';

// Mock data since the actual stores are not available
const mockRoutines = [
	{
		id: '1',
		name: 'Strength Training',
	},
];

const mockWorkoutTemplates = [
	{
		id: '1',
		name: 'Full Body Workout',
		exercises: [{ id: '1' }, { id: '2' }],
	},
	{
		id: '2',
		name: 'Upper Body',
		exercises: [{ id: '1' }, { id: '2' }, { id: '3' }],
	},
];

// Mock functions
const getWeekdayShort = (day: number) => {
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	return days[day % 7];
};

export function StartWorkoutOptions() {
	// Using mock data instead of actual store
	const routines = mockRoutines;
	const activeRoutineId = '1';
	const workoutTemplates = mockWorkoutTemplates;
	const [selectedOption, setSelectedOption] = useState<'routine' | 'template' | 'empty'>('routine');

	const activeRoutine = routines.find((r) => r.id === activeRoutineId) || null;
	const todayRoutineDay = {
		name: 'Leg Day',
		exercises: [{ id: '1' }, { id: '2' }],
		dayNumber: new Date().getDay(),
	};

	return (
		<View className='flex-1 w-full '>
			<ScrollView
				className='flex-1 my-4 h-full w-full'
				showsVerticalScrollIndicator={false}
			>
				{/* Today's Routine Option */}
				{todayRoutineDay && activeRoutine ? (
					<TouchableOpacity
						className={cn(
							'w-full bg-[#1a1a1a] rounded-2xl mb-4 overflow-hidden border',
							selectedOption === 'routine' ? 'border-[#D4FB54]' : 'border-[#2F2F2F]'
						)}
						onPress={() => setSelectedOption('routine')}
						activeOpacity={0.7}
					>
						<View className='flex-row items-center p-4'>
							<View className='w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#2A2A2A] items-center justify-center mr-4'>
								<CalendarIcon
									width={24}
									height={24}
									color='#D4FB54'
								/>
							</View>
							<View className='flex-1'>
								<Text className='text-lg font-semibold text-white mb-1'>Today's Workout</Text>
								<Text className='text-sm text-gray-400'>Continue your active program</Text>
							</View>
							<View className='ml-3'>
								{selectedOption === 'routine' ? (
									<View className='w-6 h-6 rounded-full bg-[#D4FB54] items-center justify-center'>
										<Ionicons
											name='checkmark'
											size={16}
											color='#000'
										/>
									</View>
								) : (
									<View className='w-6 h-6 rounded-full border-2 border-[#2F2F2F]' />
								)}
							</View>
						</View>

						{selectedOption === 'routine' && (
							<View className='px-4 pb-4 pt-0 border-t border-[#2F2F2F]'>
								<View className='flex-row items-center justify-between bg-[#2A2A2A] rounded-md p-2 mt-3'>
									<View className='flex-row items-center'>
										<Text className='text-[#D4FB54] font-bold mr-2'>{todayRoutineDay.name}</Text>
										<Text className='text-xs text-gray-400'>{activeRoutine.name}</Text>
									</View>
									<View className='flex-row items-center'>
										<Ionicons
											name='barbell-outline'
											size={12}
											color='#D4FB54'
										/>
										<Text className='text-xs text-gray-400 mx-1'>
											{todayRoutineDay.exercises.length}
										</Text>
										<Ionicons
											name='time-outline'
											size={12}
											color='#D4FB54'
										/>
										<Text className='text-xs text-gray-400 ml-1'>
											{getWeekdayShort(todayRoutineDay.dayNumber)}
										</Text>
									</View>
								</View>
							</View>
						)}
					</TouchableOpacity>
				) : (
					<View className='bg-[#1a1a1a] rounded-2xl mb-4 border border-[#2F2F2F] p-3'>
						<View className='flex-row items-center justify-center'>
							<CalendarIcon
								width={24}
								height={24}
								color='#666'
							/>
							<Text className='text-sm font-semibold text-white mx-2'>No Active Workout</Text>
							<Text className='text-xs text-gray-400'>Set up a workout in Workouts tab</Text>
						</View>
					</View>
				)}

				{/* Template Option */}
				<TouchableOpacity
					className={cn(
						'w-full bg-[#1a1a1a] rounded-2xl mb-4 overflow-hidden border',
						selectedOption === 'template' ? 'border-[#D4FB54]' : 'border-[#2F2F2F]'
					)}
					onPress={() => setSelectedOption('template')}
					activeOpacity={0.7}
				>
					<View className='flex-row items-center p-4'>
						<View className='w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#2A2A2A] items-center justify-center mr-4'>
							<RoutinesIcon
								size={24}
								focused={true}
							/>
						</View>
						<View className='flex-1'>
							<Text className='text-lg font-semibold text-white mb-1'>Workout Template</Text>
							<Text className='text-sm text-gray-400'>Start from a saved template</Text>
						</View>
						<View className='ml-3'>
							{selectedOption === 'template' ? (
								<View className='w-6 h-6 rounded-full bg-[#D4FB54] items-center justify-center'>
									<Ionicons
										name='checkmark'
										size={16}
										color='#000'
									/>
								</View>
							) : (
								<View className='w-6 h-6 rounded-full border-2 border-[#2F2F2F]' />
							)}
						</View>
					</View>
				</TouchableOpacity>

				{/* Empty Workout Option */}
				<TouchableOpacity
					className={cn(
						'w-full bg-[#1a1a1a] rounded-2xl mb-4 overflow-hidden border',
						selectedOption === 'empty' ? 'border-[#D4FB54]' : 'border-[#2F2F2F]'
					)}
					onPress={() => setSelectedOption('empty')}
					activeOpacity={0.7}
				>
					<View className='flex-row items-center p-4'>
						<View className='w-12 h-12 rounded-xl border border-[#2F2F2F] bg-[#2A2A2A] items-center justify-center mr-4'>
							<Ionicons
								name='add'
								size={24}
								color='#D4FB54'
							/>
						</View>
						<View className='flex-1'>
							<Text className='text-lg font-semibold text-white mb-1'>New Workout</Text>
							<Text className='text-sm text-gray-400'>Start from scratch</Text>
						</View>
						<View className='ml-3'>
							{selectedOption === 'empty' ? (
								<View className='w-6 h-6 rounded-full bg-[#D4FB54] items-center justify-center'>
									<Ionicons
										name='checkmark'
										size={16}
										color='#000'
									/>
								</View>
							) : (
								<View className='w-6 h-6 rounded-full border-2 border-[#2F2F2F]' />
							)}
						</View>
					</View>
				</TouchableOpacity>
			</ScrollView>

			<View className={cn('pt-2 border-t border-border ', Platform.OS === 'ios' ? 'pb-2' : 'pb-4')}>
				<Button
					title='Start Workout'
					className='w-full bg-[#D4FB54] rounded-3xl h-14'
					textClassName='text-black font-bold text-lg'
				/>
			</View>
		</View>
	);
}
