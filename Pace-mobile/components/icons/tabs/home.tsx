import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type SVGComponentProps = {
	focused?: boolean;
	[key: string]: any;
};

const HomeIcon: React.FC<SVGComponentProps> = (props) => {
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
				d='M7.08848 4.76243L6.08847 5.54298C4.57181 6.72681 3.81348 7.31873 3.40674 8.15333C3 8.98792 3 9.95205 3 11.8803V13.9715C3 17.7562 3 19.6485 4.17157 20.8243C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8243C21 19.6485 21 17.7562 21 13.9715V11.8803C21 9.95205 21 8.98792 20.5933 8.15333C20.1865 7.31873 19.4282 6.72681 17.9115 5.54298L16.9115 4.76243C14.5521 2.92081 13.3724 2 12 2C10.6276 2 9.44787 2.92081 7.08848 4.76243Z'
				stroke={strokeColor}
				strokeWidth={1.5}
				strokeLinejoin='round'
			/>
			<Path
				d='M15 16.5H17V18.5M15 16.5V18.5H17M15 16.5L17 18.5'
				stroke={strokeColor}
				strokeWidth={1.5}
				strokeLinejoin='round'
			/>
		</Svg>
	);
};

export default HomeIcon;
