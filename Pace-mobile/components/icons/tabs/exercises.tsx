import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

type SVGComponentProps = {
	focused?: boolean;
	[key: string]: any;
};

const ExercisesIcon: React.FC<SVGComponentProps> = (props) => {
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
				fillRule='evenodd'
				d='M14.5 6C14.5 5.72386 14.7239 5.5 15 5.5H19C19.2761 5.5 19.5 5.72386 19.5 6V7H21C21.2761 7 21.5 7.22386 21.5 7.5V10.5H23V13.5H21.5V16.5C21.5 16.7761 21.2761 17 21 17H19.5V18C19.5 18.2761 19.2761 18.5 19 18.5H15C14.7239 18.5 14.5 18.2761 14.5 18V13.5H9.5V18C9.5 18.2761 9.2761 18.5 9 18.5H5C4.72386 18.5 4.5 18.2761 4.5 18V17H3C2.72386 17 2.5 16.7761 2.5 16.5V13.5H1V10.5H2.5V7.5C2.5 7.22386 2.72386 7 3 7H4.5V6C4.5 5.72386 4.72386 5.5 5 5.5H9C9.2761 5.5 9.5 5.72386 9.5 6V10.5H14.5V6ZM5.5 17.5H8.5V6.5H5.5V17.5ZM4.5 8H3.5V16H4.5V8ZM19.5 16V8H20.5V16H19.5ZM18.5 6.5V17.5H15.5V6.5H18.5Z'
				clipRule='evenodd'
				fill={strokeColor}
			/>
		</Svg>
	);
};

export default ExercisesIcon;
