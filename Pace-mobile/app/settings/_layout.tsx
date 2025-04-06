import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

export default function SettingsLayout() {
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
					title: 'Settings',
				}}
			/>
			<Stack.Screen
				name='appearance'
				options={{
					title: 'Appearance',
				}}
			/>
			<Stack.Screen
				name='notifications'
				options={{
					title: 'Notifications',
				}}
			/>
			<Stack.Screen
				name='privacy'
				options={{
					title: 'Privacy',
				}}
			/>
			<Stack.Screen
				name='about'
				options={{
					title: 'About',
				}}
			/>
		</Stack>
	);
}
