import { defineStore } from "pinia";
import { useMealsStore } from "./meals.js";
import { useWorkoutsStore } from "./workouts.js";

const savedDailyLimit = localStorage.getItem("dailyLimit") ?? 0;

export const useCaloriesStore = defineStore("calories", {
  state() {
    return {
      dailyLimit: +savedDailyLimit,
      gainOrLoss: 0,
      consumed: 0,
      burned: 0,
      remaining: +savedDailyLimit,
    };
  },

  getters: {
    getDailyLimit() {
      return this.dailyLimit;
    },
    getGainOrLoss() {
      return this.gainOrLoss;
    },
    getConsumed() {
      return this.consumed;
    },
    getBurned() {
      return this.burned;
    },
    getRemaining() {
      return this.remaining;
    },
  },

  actions: {
    refresh() {
      this.setConsumed();
      this.setBurned();
      this.setGainOrLoss();
      this.setRemaining();
    },
    setDailyLimit(value) {
      this.dailyLimit = value;
      this.refresh();
    },
    setGainOrLoss() {
      const value = this.consumed - this.burned - this.dailyLimit;
      this.gainOrLoss = value;
    },
    setConsumed() {
      let value = 0;
      const mealsStore = useMealsStore();
      mealsStore.getMeals.map((meal) => (value += +meal.calories));
      this.consumed = value;
    },
    setBurned() {
      let value = 0;
      const workoutsStore = useWorkoutsStore();
      workoutsStore.getWorkouts.map((workout) => (value += +workout.calories));
      this.burned = value;
    },
    setRemaining() {
      const value = this.dailyLimit - this.consumed;
      this.remaining = value;
    },
  },
});
