import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { cn } from '../../lib/utils';
import { generateTwoWeeks, getCurrentDayIndex } from '../../utils/dates';
import { DaySelector } from '../../components/training/DaySelector';
import { EmptyWorkout } from '../../components/training/EmptyWorkout';
import { Button } from '../../components/ui/Button';
import { ActivitySummary, ActivityType } from '../../components/training/ActivitySummary';
import { StartWorkoutModal } from '../../components/training/StartWorkoutModal';
import { ExerciseCard } from '../../components/training/excerciseCard';
import '../../global.css';
import { Training } from '@/components/training/Training';

export default function Home() {
	const router = useRouter();
	const days = generateTwoWeeks();
	const [selectedDay, setSelectedDay] = useState(getCurrentDayIndex(days));
	const [activityType, setActivityType] = useState<ActivityType>('workout');

	const handleDaySelect = (index: number) => {
		setSelectedDay(index);
	};

	const handleActivityTypeChange = (type: ActivityType) => {
		setActivityType(type);
	};

	// Sample workout data with multiple exercises
	const sampleWorkoutData = {
		exercises: [
		
		]
	};

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<BottomSheetModalProvider>
				<SafeAreaView className={cn('flex-1 bg-black')}>
					<StatusBar style='light' />
					<ScrollView className={cn('flex-1')}>
						<View className={cn('p-5 space-y-5')}>
							{/* Header */}
							<View className={cn('flex-row justify-between items-center')}>
								<Text className={cn('text-white text-2xl font-bold')}>TRAINING</Text>
								<TouchableOpacity className={cn('rounded-full bg-gray-800 p-2')}>
									<Ionicons
										name='refresh'
										size={24}
										color='#D4FB54'
									/>
								</TouchableOpacity>
							</View>

							{/* Calendar Days - Scrollable */}
							<View className={cn('mt-4')}>
								<DaySelector
									days={days}
									selectedDay={selectedDay}
									onSelectDay={handleDaySelect}
								/>
							</View>

							{/* Activity Summary Component */}
							<ActivitySummary
								initialActivityType={activityType}
								onActivityTypeChange={handleActivityTypeChange}
							/>
							<Training workoutData={sampleWorkoutData} />
						</View>
					</ScrollView>
				</SafeAreaView>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	);
}
