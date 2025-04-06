import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Routines() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<Text style={styles.title}>Routines</Text>
					<Text style={styles.subtitle}>Your workout schedules</Text>
				</View>

				<View style={styles.cardContainer}>
					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Weekly Split</Text>
						<Text style={styles.cardDescription}>
							Monday: Upper, Tuesday: Lower, Thursday: Full
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>30-Day Challenge</Text>
						<Text style={styles.cardDescription}>Progressive workouts for a month</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Morning Routine</Text>
						<Text style={styles.cardDescription}>Quick 15-minute morning workout</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.card}>
						<Text style={styles.cardTitle}>Weekend Warrior</Text>
						<Text style={styles.cardDescription}>Intense weekend-only workout plan</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={[styles.card, styles.createCard]}
						onPress={() => router.push('/create-routine')}
					>
						<Text style={styles.createCardText}>Create New Routine</Text>
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
