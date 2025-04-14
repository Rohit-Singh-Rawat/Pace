/**
 * Below are the colors that are used in the app. The app uses a single dark theme.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColor = '#D4FB54'; // Yellow color for focused items
const unfocusedColor = '#FFFFFF'; // White for unfocused items

export const Colors = {
	text: '#FFFFFF',
	background: '#000000',
	tint: tintColor,
	icon: unfocusedColor,
	tabIconDefault: unfocusedColor,
	border: '#1F1F1F',
	tabIconSelected: tintColor,

	// Keeping these for backward compatibility with existing code
	light: {
		text: '#FFFFFF',
		background: '#000000',
		tint: tintColor,
		icon: unfocusedColor,
		tabIconDefault: unfocusedColor,
		tabIconSelected: tintColor,
	},
	dark: {
		text: '#FFFFFF',
		background: '#000000',
		tint: tintColor,
		icon: unfocusedColor,
		tabIconDefault: unfocusedColor,
		tabIconSelected: tintColor,
	},
};
