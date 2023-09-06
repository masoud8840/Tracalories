import { defineStore } from "pinia";
import { useCaloriesStore } from "./calories.js";

const savedMeals = localStorage.getItem("meals");
export const useMealsStore = defineStore("meals", {
  state() {
    return {
      meals: savedMeals ?? [],
    };
  },

  getters: {
    getMeals() {
      return this.meals;
    },
  },

  actions: {
    add(newMeal) {
      this.meals.push(newMeal);
      useCaloriesStore().refresh();
    },

    delete(mealId) {
      this.meals = this.meals.filter((meal) => meal.id !== mealId);
      useCaloriesStore().refresh();
    },
  },
});
