/**
 * Below are the colors that are used in the app. The colors are defined for both light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#FFCC00'; // Yellow color for focused items
const tintColorDark = '#FFCC00'; // Same yellow for dark mode
const unfocusedColorLight = '#FFFFFF'; // White for unfocused items
const unfocusedColorDark = '#FFFFFF'; // White for unfocused items in dark mode

export const Colors = {
	light: {
		text: '#000000',
		background: '#FFFFFF',
		tint: tintColorLight,
		icon: unfocusedColorLight,
		tabIconDefault: unfocusedColorLight,
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: '#FFFFFF',
		background: '#000000',
		tint: tintColorDark,
		icon: unfocusedColorDark,
		tabIconDefault: unfocusedColorDark,
		tabIconSelected: tintColorDark,
	},
};
