import { defineStore } from "pinia";
import { useCaloriesStore } from "./calories.js";

const savedMeals = localStorage.getItem("meals");
export const useMealsStore = defineStore("meals", {
  state() {
    return {
      meals: JSON.parse(savedMeals) ?? [],
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
      localStorage.setItem("meals", JSON.stringify(this.meals));
    },

    delete(mealId) {
      this.meals = this.meals.filter((meal) => meal.id !== mealId);
      useCaloriesStore().refresh();
      localStorage.setItem("meals", JSON.stringify(this.meals));
    },

    reset() {
      this.meals = [];
      localStorage.removeItem("meals");
    },
  },
});
