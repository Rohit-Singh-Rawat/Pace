import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Exercises() {
	const router = useRouter();
	const [searchQuery, setSearchQuery] = useState('');

	const exerciseCategories = [
		{ title: 'Chest', icon: 'figure.arms.open' },
		{ title: 'Back', icon: 'figure.walk' },
		{ title: 'Legs', icon: 'figure.walk' },
		{ title: 'Arms', icon: 'figure.arms.open' },
		{ title: 'Shoulders', icon: 'figure.arms.open' },
		{ title: 'Core', icon: 'figure.core.training' },
		{ title: 'Cardio', icon: 'heart.fill' },
		{ title: 'Stretching', icon: 'figure.flexibility' },
		{ title: 'All Exercises', icon: 'list.bullet' },
	];

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<View style={styles.header}>
				<Text style={styles.title}>Exercises</Text>
				<View style={styles.searchContainer}>
					<IconSymbol
						name='magnifyingglass'
						size={20}
						color='#666'
						style={styles.searchIcon}
					/>
					<TextInput
						style={styles.searchInput}
						placeholder='Search exercises...'
						value={searchQuery}
						onChangeText={setSearchQuery}
					/>
				</View>
			</View>

			<ScrollView style={styles.scrollView}>
				<View style={styles.categoriesContainer}>
					{exerciseCategories.map((category, index) => (
						<TouchableOpacity
							key={index}
							style={styles.categoryCard}
							onPress={() => router.push(`/exercise-list?category=${category.title}`)}
						>
							<View style={styles.iconContainer}>
								<IconSymbol
									name={category.icon}
									size={32}
									color='#333'
								/>
							</View>
							<Text style={styles.categoryTitle}>{category.title}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View style={styles.recentContainer}>
					<Text style={styles.sectionTitle}>Recently Viewed</Text>
					<View style={styles.exerciseList}>
						<TouchableOpacity style={styles.exerciseItem}>
							<Text style={styles.exerciseName}>Bench Press</Text>
							<Text style={styles.exerciseCategory}>Chest</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.exerciseItem}>
							<Text style={styles.exerciseName}>Squat</Text>
							<Text style={styles.exerciseCategory}>Legs</Text>
						</TouchableOpacity>

						<TouchableOpacity style={styles.exerciseItem}>
							<Text style={styles.exerciseName}>Pull-Up</Text>
							<Text style={styles.exerciseCategory}>Back</Text>
						</TouchableOpacity>
					</View>
				</View>

				<TouchableOpacity
					style={styles.createButton}
					onPress={() => router.push('/create-exercise')}
				>
					<Text style={styles.createButtonText}>Create Custom Exercise</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	header: {
		padding: 20,
		paddingBottom: 10,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#333',
		marginBottom: 15,
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 10,
		marginVertical: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 2,
	},
	searchIcon: {
		marginRight: 10,
	},
	searchInput: {
		flex: 1,
		fontSize: 16,
	},
	scrollView: {
		flex: 1,
	},
	categoriesContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		padding: 15,
	},
	categoryCard: {
		backgroundColor: '#fff',
		borderRadius: 10,
		width: '31%',
		alignItems: 'center',
		padding: 15,
		marginBottom: 12,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 2,
	},
	iconContainer: {
		marginBottom: 8,
	},
	categoryTitle: {
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	recentContainer: {
		padding: 15,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 15,
		color: '#333',
	},
	exerciseList: {
		backgroundColor: '#fff',
		borderRadius: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	exerciseItem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	exerciseName: {
		fontSize: 16,
		color: '#333',
	},
	exerciseCategory: {
		fontSize: 14,
		color: '#666',
	},
	createButton: {
		backgroundColor: '#007bff',
		borderRadius: 10,
		padding: 15,
		margin: 15,
		alignItems: 'center',
	},
	createButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
