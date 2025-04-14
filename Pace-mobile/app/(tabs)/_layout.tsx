import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import {
	HomeIcon,
	WorkoutIcon,
	RoutinesIcon,
	ProgressIcon,
	ExercisesIcon,
	ProfileIcon,
} from '@/components/icons/tabs';

export default function TabLayout() {
	const colorScheme = useColorScheme();
	const theme = colorScheme ?? 'light';

	const renderTabIcon = (Icon: React.ComponentType<any>, size: number = 26) => {
		return ({ focused }: { color: string; focused: boolean }) => (
			<Icon
				size={size}
				focused={focused}
			/>
		);
	};

	const tabScreens = [
		{ name: 'index', title: 'Home', Icon: HomeIcon },
		{ name: 'Workouts', title: 'Workouts', Icon: WorkoutIcon },
		{ name: 'Routines', title: 'Routines', Icon: RoutinesIcon },
		{ name: 'Progress', title: 'Progress', Icon: ProgressIcon },
		{ name: 'Exercises', title: 'Exercises', Icon: ExercisesIcon, size: 38 },
		{ name: 'Profile', title: 'Profile', Icon: ProfileIcon },
	];

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[theme].background,
				headerShown: false,
				tabBarShowLabel: false,
				tabBarButton: HapticTab,
				tabBarBackground: TabBarBackground,
				tabBarIconStyle: {
					transform: [{ translateY: 5 }],
				},
				tabBarStyle: Platform.select({
					ios: {
						// Use a transparent background on iOS to show the blur effect
						position: 'absolute',
					},
					android: {
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: Colors[theme].background,
						borderColor: 'rgba(128, 128, 128, 0.7)',
					},
					default: {
						backgroundColor: Colors[theme].background,
					},
				}),
			}}
		>
			{tabScreens.map(({ name, title, Icon, size }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						headerTitle: title,
						title,
						tabBarIcon: renderTabIcon(Icon, size),
					}}
				/>
			))}
		</Tabs>
	);
}
