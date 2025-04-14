import React, { useCallback, useRef, ReactNode, cloneElement, isValidElement } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
	BottomSheetBackdrop,
	BottomSheetBackdropProps,
	BottomSheetModal,
	BottomSheetView,
} from '@gorhom/bottom-sheet';
import { cn } from '../../lib/utils';
import { Button } from '../ui/Button';
import { useRouter } from 'expo-router';
interface StartWorkoutModalProps {
	onDismiss?: () => void;
	title?: string;
	description?: string;
	children: ReactNode;
	trigger: ReactNode;
	snapPoints?: (string | number)[];
}

export function StartWorkoutModal({
	onDismiss,
	title = 'Start Workout',
	description = 'Choose your workout type and get started with your fitness journey',
	children,
	trigger,
	snapPoints = ['50%'],
}: StartWorkoutModalProps) {
	const router = useRouter();
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	const handleSheetChanges = useCallback(
		(index: number) => {
			if (index === -1) {
				onDismiss?.();
			}
		},
		[onDismiss]
	);
	const renderBackdrop = useCallback(
		(props: BottomSheetBackdropProps) => (
			<BottomSheetBackdrop
				pressBehavior={'close'}
				{...props}
			/>
		),
		[]
	);
	const handleOpen = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);

	const triggerWithHandler = isValidElement(trigger)
		? cloneElement(trigger, {
				onPress: handleOpen,
				...trigger.props,
		  })
		: trigger;

	return (
		<>
			{triggerWithHandler}

			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={1}
				enablePanDownToClose={true}
				snapPoints={snapPoints}
				backdropComponent={renderBackdrop}
				detached={true}
				bottomInset={24}
				onChange={handleSheetChanges}
				backgroundStyle={{
					backgroundColor: '#121212',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#2F2F2F',
					marginHorizontal: 24,
					paddingHorizontal: 24,
					borderRadius: 20,
				}}
				handleIndicatorStyle={{ backgroundColor: '#666' }}
			>
				<BottomSheetView style={styles.contentContainer}>
					<View className={cn('p-6 py-0 flex-1 w-full space-y-6')}>
						{(title || description) && (
							<View>
								{title && <Text className={cn('text-white text-2xl font-bold mb-2')}>{title}</Text>}
								{description && (
									<Text className={cn('text-gray-400 text-base')}>{description}</Text>
								)}
							</View>
						)}
						{children}
					</View>
				</BottomSheetView>
			</BottomSheetModal>
		</>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		margin: 10,
		padding: 10,
		paddingVertical: 0,
		alignItems: 'center',
	},
});

// Export the present function to be used by other components
export function useStartWorkoutModal() {
	const modalRef = useRef<BottomSheetModal>(null);

	const present = useCallback(() => {
		modalRef.current?.present();
	}, []);

	const dismiss = useCallback(() => {
		modalRef.current?.dismiss();
	}, []);

	return {
		Modal: StartWorkoutModal,
		present,
		dismiss,
		modalRef,
	};
}
