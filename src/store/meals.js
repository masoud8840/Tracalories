import { defineStore } from "pinia";

export const useMealsStore = defineStore("meals", {
  state() {
    return {
      meals: [],
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
    },

    delete(mealId) {
      this.meals = this.meals.filter((meal) => meal.id !== mealId);
    },
  },
});
