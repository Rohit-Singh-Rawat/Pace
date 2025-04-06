import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<Text style={styles.title}>Welcome to Pace</Text>
					<Text style={styles.subtitle}>Your fitness journey starts here</Text>
				</View>

				<View style={styles.cardContainer}>
					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/workouts')}
					>
						<Text style={styles.cardTitle}>Workouts</Text>
						<Text style={styles.cardDescription}>Browse and start workouts</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/progress')}
					>
						<Text style={styles.cardTitle}>Progress</Text>
						<Text style={styles.cardDescription}>Track your fitness journey</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.card}
						onPress={() => router.push('/profile')}
					>
						<Text style={styles.cardTitle}>Profile</Text>
						<Text style={styles.cardDescription}>View and edit your profile</Text>
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
