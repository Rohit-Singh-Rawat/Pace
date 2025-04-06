import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Progress() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<Text style={styles.title}>Progress</Text>
					<Text style={styles.subtitle}>Track your fitness journey</Text>
				</View>

				<View style={styles.cardContainer}>
					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/weight-progress')}
					>
						<Text style={styles.cardTitle}>Weight Tracking</Text>
						<Text style={styles.cardDescription}>Monitor your weight changes over time</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/strength-progress')}
					>
						<Text style={styles.cardTitle}>Strength Progress</Text>
						<Text style={styles.cardDescription}>Track your strength gains for each exercise</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/body-measurements')}
					>
						<Text style={styles.cardTitle}>Body Measurements</Text>
						<Text style={styles.cardDescription}>Record and track your body measurements</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/workout-history')}
					>
						<Text style={styles.cardTitle}>Workout History</Text>
						<Text style={styles.cardDescription}>View your past workouts and achievements</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/progress-photos')}
					>
						<Text style={styles.cardTitle}>Progress Photos</Text>
						<Text style={styles.cardDescription}>Visual tracking of your body changes</Text>
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
});
