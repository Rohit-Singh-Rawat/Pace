import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function ProfileLayout() {
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
				name='personal-info'
				options={{
					title: 'Personal Information',
				}}
			/>
			<Stack.Screen
				name='fitness-goals'
				options={{
					title: 'Fitness Goals',
				}}
			/>
			<Stack.Screen
				name='achievements'
				options={{
					title: 'Achievements',
				}}
			/>
			<Stack.Screen
				name='edit-profile'
				options={{
					title: 'Edit Profile',
				}}
			/>
			<Stack.Screen
				name='settings'
				options={{
					title: 'Settings',
				}}
			/>
			<Stack.Screen
				name='help-support'
				options={{
					title: 'Help & Support',
				}}
			/>
		</Stack>
	);
}
