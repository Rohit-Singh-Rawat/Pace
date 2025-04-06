import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ProgressTrackingLayout() {
	const colorScheme = useColorScheme();

	return (
		<Stack
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors[colorScheme ?? 'light'].background,
				},
				headerTintColor: Colors[colorScheme ?? 'light'].text,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
				animation: 'slide_from_right',
			}}
		>
			<Stack.Screen
				name='weight-progress'
				options={{
					title: 'Weight Progress',
				}}
			/>
			<Stack.Screen
				name='strength-progress'
				options={{
					title: 'Strength Progress',
				}}
			/>
			<Stack.Screen
				name='body-measurements'
				options={{
					title: 'Body Measurements',
				}}
			/>
			<Stack.Screen
				name='workout-history'
				options={{
					title: 'Workout History',
				}}
			/>
			<Stack.Screen
				name='progress-photos'
				options={{
					title: 'Progress Photos',
				}}
			/>
			<Stack.Screen
				name='add-progress'
				options={{
					title: 'Add Progress',
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
}
