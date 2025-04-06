import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type SVGComponentProps = {
	focused?: boolean;
	[key: string]: any;
};

const ProgressIcon: React.FC<SVGComponentProps> = (props) => {
	const colorScheme = useColorScheme();
	const strokeColor = props.focused
		? Colors[colorScheme ?? 'light'].tint
		: Colors[colorScheme ?? 'light'].tabIconDefault;

	return (
		<Svg
			width={24}
			height={24}
			viewBox='0 0 24 24'
			fill='none'
			{...props}
		>
			<Path
				d='M2 12C2 7.582 2 5.39 3.318 4.072C4.636 2.754 6.828 2.754 11.246 2.754C15.664 2.754 17.856 2.754 19.174 4.072C20.492 5.39 20.492 7.582 20.492 12C20.492 16.418 20.492 18.61 19.174 19.928C17.856 21.246 15.664 21.246 11.246 21.246C6.828 21.246 4.636 21.246 3.318 19.928C2 18.61 2 16.418 2 12Z'
				strokeWidth='1.5'
				stroke={strokeColor}
				fill='none'
			/>
			<Path
				d='M14.5 8.5L15.5 9.5L12 13L9.5 10.5C9.25 10.25 8.85 10.25 8.6 10.5L4.6 14.5C4.35 14.75 4.35 15.15 4.6 15.4C4.85 15.65 5.25 15.65 5.5 15.4L9 11.9L11.5 14.4C11.75 14.65 12.15 14.65 12.4 14.4L16.4 10.4L17.4 11.4C17.6 11.6 17.95 11.45 17.95 11.15V8.15C17.95 7.95 17.8 7.8 17.6 7.8H14.6C14.3 7.8 14.15 8.15 14.5 8.5Z'
				fill={strokeColor}
			/>
		</Svg>
	);
};

export default ProgressIcon;
