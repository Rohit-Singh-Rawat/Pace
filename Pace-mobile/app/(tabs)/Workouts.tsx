import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Workouts() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<Text style={styles.title}>Workouts</Text>
					<Text style={styles.subtitle}>Find your perfect workout</Text>
				</View>

				<View style={styles.cardContainer}>
					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Full Body</Text>
						<Text style={styles.cardDescription}>Complete workout for all muscle groups</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Upper Body</Text>
						<Text style={styles.cardDescription}>Focus on chest, arms, and shoulders</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Lower Body</Text>
						<Text style={styles.cardDescription}>Target legs and glutes</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Core</Text>
						<Text style={styles.cardDescription}>Strengthen your core muscles</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.card, styles.createCard]}
						onPress={() => router.push('/create-workout')}
					>
						<Text style={styles.createCardText}>Create Custom Workout</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	scrollView: {
		flex: 1,
	},
	header: {
		padding: 20,
		marginTop: 10,
	},
	title: {
		fontSize: 28,
		fontWeight: 'bold',
		color: '#333',
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		marginTop: 5,
	},
	cardContainer: {
		padding: 15,
	},
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		marginBottom: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	cardTitle: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 5,
		color: '#333',
	},
	cardDescription: {
		fontSize: 14,
		color: '#666',
	},
	createCard: {
		backgroundColor: '#007bff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	createCardText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
