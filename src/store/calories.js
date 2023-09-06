import { defineStore } from "pinia";

export const useCaloriesStore = defineStore("calories", {
  state() {
    return {
      dailyLimit: 3000,
      gainOrLoss: 0,
      consumed: 0,
      burned: 0,
      remaining: 0,
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
    // setDailyLimit(value) {
    //   this.dailyLimit = value;
    // },
    // setGainOrLoss(value) {
    //   this.gainOrLoss = value;
    // },
    // setConsumed(value) {
    //   this.consumed = value;
    // },
    // setBurned(value) {
    //   this.burned = value;
    // },
    // setRemaining(value) {
    //   this.remaining = value;
    // },
  },
});
