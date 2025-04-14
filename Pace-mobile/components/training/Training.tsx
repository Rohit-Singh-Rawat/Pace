import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ExerciseCard } from './excerciseCard';
import { EmptyWorkout } from './EmptyWorkout';

type WorkoutData = {
  exercises: {
    name: string;
    sets: {
      weight: number;
      reps: number;
    }[];
  }[];
} | null;

interface TrainingProps {
  workoutData: WorkoutData;
}

export const Training: React.FC<TrainingProps> = ({ workoutData }) => {
  return (
    <View className="flex-1">
      {workoutData && workoutData.exercises.length > 0 ? (
        <ScrollView className="flex-1">
          <View className="space-y-3">
            {workoutData.exercises.map((exercise, index) => (
              <ExerciseCard
                key={`${exercise.name}-${index}`}
                name={exercise.name}
                sets={exercise.sets}
              />
            ))}
          </View>
        </ScrollView>
      ) : (
        <EmptyWorkout />
      )}
    </View>
  );
};
