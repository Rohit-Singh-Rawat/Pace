import React from 'react';
import { View, Text } from 'react-native';
import { cn } from '../../lib/utils';
import { Colors } from '@/constants/Colors';
interface StatCardProps {
	label: string;
	value: string | number;
	color?: string;
	className?: string;
}

export function StatCard({
	label,
	value,
	color = Colors.tabIconSelected,
	className,
}: StatCardProps) {
	return (
		<View className={cn('rounded-lg p-2 flex-1 items-center justify-center', className)}>
			<Text
				className={cn('text-2xl font-bold')}
				style={{ color }}
			>
				{value}
			</Text>
			<Text className={cn('text-gray-500 text-xs mb-1')}>{label}</Text>
		</View>
	);
}
