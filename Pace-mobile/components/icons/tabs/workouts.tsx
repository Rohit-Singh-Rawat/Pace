import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type SVGComponentProps = {
	focused?: boolean;
	[key: string]: any;
};

const WorkoutIcon: React.FC<SVGComponentProps> = (props) => {
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
				d='M12 21.5008C16.4183 21.5008 20 17.9191 20 13.5008C20 10.5397 18.3912 6.60684 16 4.33478L14 6.99915L10.5 2.49915C7 4.99915 4 9.59526 4 13.5008C4 17.9191 7.58172 21.5008 12 21.5008Z'
				stroke={strokeColor}
				strokeWidth='1.5'
				strokeLinejoin='round'
			/>
			<Path
				d='M12 18.4991C14.2091 18.4991 16 16.4844 16 13.9991C16 13.2081 15.8186 12.4648 15.5 11.8189L13.5 13.4991L10.5 9.49811C9.5 10.4981 8 12.1106 8 13.9991C8 16.4844 9.79086 18.4991 12 18.4991Z'
				stroke={strokeColor}
				strokeWidth='1.5'
				strokeLinejoin='round'
			/>
		</Svg>
	);
};

export default WorkoutIcon;
