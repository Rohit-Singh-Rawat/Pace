import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function Profile() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<ScrollView style={styles.scrollView}>
				<View style={styles.header}>
					<View style={styles.profileSection}>
						<View style={styles.avatarContainer}>
							<View style={styles.avatar}>
								<IconSymbol
									name='person.fill'
									size={60}
									color='#999'
								/>
							</View>
							<TouchableOpacity style={styles.editAvatarButton}>
								<IconSymbol
									name='pencil'
									size={16}
									color='#fff'
								/>
							</TouchableOpacity>
						</View>
						<Text style={styles.userName}>John Doe</Text>
						<Text style={styles.userStats}>Member since June 2023</Text>
						<View style={styles.statsRow}>
							<View style={styles.stat}>
								<Text style={styles.statNumber}>24</Text>
								<Text style={styles.statLabel}>Workouts</Text>
							</View>
							<View style={styles.stat}>
								<Text style={styles.statNumber}>16</Text>
								<Text style={styles.statLabel}>Hours</Text>
							</View>
							<View style={styles.stat}>
								<Text style={styles.statNumber}>3</Text>
								<Text style={styles.statLabel}>Achievements</Text>
							</View>
						</View>
					</View>
				</View>

				<View style={styles.menuSection}>
					<Text style={styles.sectionTitle}>Account</Text>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/personal-info')}
					>
						<IconSymbol
							name='person.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Personal Information</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/fitness-goals')}
					>
						<IconSymbol
							name='flag.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Fitness Goals</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/achievements')}
					>
						<IconSymbol
							name='trophy.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Achievements</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>
				</View>

				<View style={styles.menuSection}>
					<Text style={styles.sectionTitle}>Settings</Text>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/settings')}
					>
						<IconSymbol
							name='gear'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>App Settings</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/notifications-settings')}
					>
						<IconSymbol
							name='bell.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Notifications</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/privacy-settings')}
					>
						<IconSymbol
							name='lock.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Privacy</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.menuItem}
						onPress={() => router.push('/help-support')}
					>
						<IconSymbol
							name='questionmark.circle.fill'
							size={22}
							color='#333'
							style={styles.menuIcon}
						/>
						<Text style={styles.menuText}>Help & Support</Text>
						<IconSymbol
							name='chevron.right'
							size={16}
							color='#999'
						/>
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.logoutButton}>
					<Text style={styles.logoutText}>Log Out</Text>
				</TouchableOpacity>

				<Text style={styles.versionText}>Pace v1.0.0</Text>
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
		backgroundColor: '#fff',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		marginBottom: 20,
	},
	profileSection: {
		alignItems: 'center',
		padding: 20,
	},
	avatarContainer: {
		position: 'relative',
		marginBottom: 10,
	},
	avatar: {
		width: 100,
		height: 100,
		borderRadius: 50,
		backgroundColor: '#eee',
		justifyContent: 'center',
		alignItems: 'center',
	},
	editAvatarButton: {
		position: 'absolute',
		bottom: 0,
		right: 0,
		backgroundColor: '#007bff',
		width: 30,
		height: 30,
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
		borderColor: '#fff',
	},
	userName: {
		fontSize: 24,
		fontWeight: 'bold',
		marginVertical: 5,
	},
	userStats: {
		color: '#666',
		fontSize: 14,
		marginBottom: 15,
	},
	statsRow: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '100%',
		borderTopWidth: 1,
		borderTopColor: '#eee',
		paddingTop: 15,
	},
	stat: {
		alignItems: 'center',
		flex: 1,
	},
	statNumber: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#333',
	},
	statLabel: {
		fontSize: 12,
		color: '#666',
		marginTop: 2,
	},
	menuSection: {
		backgroundColor: '#fff',
		borderRadius: 10,
		marginHorizontal: 15,
		marginBottom: 20,
		padding: 15,
		paddingBottom: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	sectionTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
		color: '#333',
	},
	menuItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 12,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	menuIcon: {
		marginRight: 15,
	},
	menuText: {
		flex: 1,
		fontSize: 16,
		color: '#333',
	},
	logoutButton: {
		backgroundColor: '#ff3b30',
		borderRadius: 10,
		margin: 15,
		padding: 15,
		alignItems: 'center',
	},
	logoutText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	versionText: {
		textAlign: 'center',
		color: '#999',
		fontSize: 12,
		marginBottom: 20,
	},
});
