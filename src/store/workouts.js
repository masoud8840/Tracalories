import { defineStore } from "pinia";

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
    },

    delete(workoutId) {
      this.workouts = this.workouts.filter(
        (workout) => workout.id !== workoutId
      );
    },
  },
});
