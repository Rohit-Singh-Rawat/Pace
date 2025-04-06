import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function RoutinesLayout() {
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
					title: 'Routines',
				}}
			/>
			<Stack.Screen
				name='[id]'
				options={{
					title: 'Routine Details',
				}}
			/>
			<Stack.Screen
				name='create-routine'
				options={{
					title: 'Create Routine',
				}}
			/>
			<Stack.Screen
				name='edit-routine'
				options={{
					title: 'Edit Routine',
				}}
			/>
			<Stack.Screen
				name='add-workouts'
				options={{
					title: 'Add Workouts',
					presentation: 'modal',
				}}
			/>
		</Stack>
	);
}
