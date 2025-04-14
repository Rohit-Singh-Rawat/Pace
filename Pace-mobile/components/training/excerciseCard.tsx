import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cn } from '../../lib/utils';

type SetData = {
	weight: number;
	reps: number;
};

type ExerciseCardProps = {
	name: string;
	sets: SetData[];
};

const styles = StyleSheet.create({
	setRow: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#2A2A2A',
		padding: 10,
		marginVertical: 1,
	},
	roundedTop: {
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	roundedBottom: {
		borderBottomLeftRadius: 8,
		borderBottomRightRadius: 8,
	},
});

export const ExerciseCard: React.FC<ExerciseCardProps> = ({ name, sets }) => {
	const [expanded, setExpanded] = useState(false);
	const [rotateAnim] = useState(new Animated.Value(0));

	const toggleExpand = () => {
		setExpanded(!expanded);
		Animated.timing(rotateAnim, {
			toValue: expanded ? 0 : 1,
			duration: 200,
			useNativeDriver: true,
		}).start();
	};

	const rotate = rotateAnim.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '180deg'],
	});

	// Format sets as a simple string
	const setsString = sets.map((set) => `${set.weight}kg × ${set.reps}`).join(', ');

	return (
		<View className='bg-backgroundSecondary rounded-xl mt-3 overflow-hidden border border-border '>
			<TouchableOpacity
				className='p-4'
				onPress={toggleExpand}
				activeOpacity={0.7}
			>
				<View className='flex-row justify-between items-center'>
					<Text className='text-white font-semibold text-lg'>{name}</Text>
					<Animated.View style={{ transform: [{ rotate }] }}>
						<Ionicons
							name='chevron-down'
							size={18}
							color='#666666'
						/>
					</Animated.View>
				</View>

				{!expanded && (
					<Text
						className='text-gray-400 text-sm mt-1'
						numberOfLines={1}
					>
						{setsString}
					</Text>
				)}
			</TouchableOpacity>

			{expanded && (
				<View className='px-4 pb-4 pt-0'>
					{sets.map((set, index) => (
						<View
							key={index}
							style={[
								styles.setRow,
								index === 0 && styles.roundedTop,
								index === sets.length - 1 && styles.roundedBottom,
							]}
						>
							<View className='flex-row flex-1'>
								<Text className='text-white'>{set.weight} kg</Text>
								<Text className='text-gray-500 mx-2'>•</Text>
								<Text className='text-white'>{set.reps} reps</Text>
							</View>
						</View>
					))}
				</View>
			)}
		</View>
	);
};
