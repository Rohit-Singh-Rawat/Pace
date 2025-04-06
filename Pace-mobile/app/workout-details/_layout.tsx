import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function WorkoutDetailsLayout() {
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
				name='index'
				options={{
					title: 'Workout Details',
				}}
			/>
			<Stack.Screen
				name='exercise'
				options={{
					title: 'Exercise',
				}}
			/>
			<Stack.Screen
				name='timer'
				options={{
					title: 'Rest Timer',
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
}
