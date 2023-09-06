import { defineStore } from "pinia";
import { useCaloriesStore } from "./calories.js";

export const useWorkoutsStore = defineStore("workouts", {
  state() {
    return {
      workouts: [],
    };
  },

  getters: {
    getWorkouts() {
      return this.workouts;
    },
  },

  actions: {
    add(newWorkout) {
      this.workouts.push(newWorkout);
      useCaloriesStore().refresh();
    },

    delete(workoutId) {
      this.workouts = this.workouts.filter(
        (workout) => workout.id !== workoutId
      );
      useCaloriesStore().refresh();
    },
  },
});
