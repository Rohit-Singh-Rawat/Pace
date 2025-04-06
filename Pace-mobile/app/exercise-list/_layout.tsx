import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ExerciseListLayout() {
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
					title: 'Exercises',
					headerBackTitle: 'Back',
				}}
			/>
			<Stack.Screen
				name='[id]'
				options={{
					title: 'Exercise Details',
				}}
			/>
			<Stack.Screen
				name='filter'
				options={{
					title: 'Filter Exercises',
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
}
