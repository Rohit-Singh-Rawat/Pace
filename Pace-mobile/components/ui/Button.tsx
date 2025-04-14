import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { cn } from '../../lib/utils';

interface ButtonProps {
	title: string;
	onPress?: () => void;
	variant?: 'primary' | 'secondary' | 'outline';
	loading?: boolean;
	disabled?: boolean;
	className?: string;
	textClassName?: string;
}

export function Button({
	title,
	onPress,
	variant = 'primary',
	loading = false,
	disabled = false,
	className,
	textClassName,
}: ButtonProps) {
	const baseStyles = cn(
		'rounded-full py-4 items-center',
		disabled && 'opacity-50',
		variant === 'primary' && 'bg-[#D4FB54]',
		variant === 'secondary' && 'bg-gray-800',
		variant === 'outline' && 'bg-transparent border border-gray-700',
		className
	);

	const textStyles = cn(
		'font-bold text-lg',
		variant === 'primary' && 'text-black',
		variant === 'secondary' && 'text-white',
		variant === 'outline' && 'text-white',
		textClassName
	);

	return (
		<TouchableOpacity
			className={baseStyles}
			onPress={onPress}
			disabled={disabled || loading}
		>
			{loading ? (
				<ActivityIndicator color={variant === 'primary' ? '#000' : '#fff'} />
			) : (
				<Text className={textStyles}>{title}</Text>
			)}
		</TouchableOpacity>
	);
}
