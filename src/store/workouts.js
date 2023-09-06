import { defineStore } from "pinia";
import { useCaloriesStore } from "./calories.js";

const savedWorkouts = localStorage.getItem("workouts");

export const useWorkoutsStore = defineStore("workouts", {
  state() {
    return {
      workouts: JSON.parse(savedWorkouts) ?? [],
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
      localStorage.setItem("workouts", JSON.stringify(this.workouts));
    },

    delete(workoutId) {
      this.workouts = this.workouts.filter(
        (workout) => workout.id !== workoutId
      );
      useCaloriesStore().refresh();
      localStorage.setItem("workouts", JSON.stringify(this.workouts));
    },

    reset() {
      this.workouts = [];
      localStorage.removeItem("workouts");
    },
  },
});
