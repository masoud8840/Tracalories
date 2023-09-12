<template>
  <main class="container mx-auto">
    <section class="overall-info">
      <Card
        v-for="(card, index) in overallInfoCards"
        :key="index"
        :class="card.extraClasses"
        :type="card.type"
        :card-title="card.title"
        :card-caption="card.caption"
      ></Card>
    </section>

    <div class="progress-container">
      <div class="progress-inner" :style="{ width: `${progressValue}%` }"></div>
    </div>

    <section class="mt-16 flex gap-5">
      <section class="w-full">
        <Meals />
      </section>
      <section class="w-full">
        <Workouts />
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import Card from "../components/UI/Card.vue";
import Meals from "../components/layout/HomeView/Meals.vue";
import Workouts from "../components/layout/HomeView/Workouts.vue";
import { useCaloriesStore } from "../store/calories.js";

const caloriesStore = useCaloriesStore();

const overallInfoCards = ref([
  {
    title: computed(() => +caloriesStore.getDailyLimit || 0),
    caption: "daily calories limit",
    type: "invert",
    extraClasses: "lg:col-span-3",
  },
  {
    title: computed(() => Math.abs(caloriesStore.getGainOrLoss)),
    caption: "Gain/Loss",
    type: "success",
    extraClasses: computed(() => {
      if (+caloriesStore.getGainOrLoss <= 0) {
        overallInfoCards.value[1].type = "success";
        return "lg:col-span-3 text-white";
      } else {
        overallInfoCards.value[1].type = "danger";
        return "lg:col-span-3 text-white";
      }
    }),
  },
  {
    title: computed(() => +caloriesStore.getConsumed),
    caption: "Calories consumed",
    type: "flat",
    extraClasses: "lg:col-span-2",
  },
  {
    title: computed(() => +caloriesStore.getBurned),
    caption: "calories burned",
    type: "flat",
    extraClasses: "lg:col-span-2",
  },
  {
    title: computed(() => Math.abs(caloriesStore.getRemaining)),
    caption: "calories remaining",
    type: "success",
    extraClasses: computed(() => {
      if (+caloriesStore.getRemaining >= 0) {
        overallInfoCards.value[4].type = "success";
        return "lg:col-span-2";
      } else {
        overallInfoCards.value[4].type = "danger";
        return "lg:col-span-2";
      }
    }),
  },
]);
const progressValue = computed(() => {
  const value =
    ((caloriesStore.getRemaining + caloriesStore.getBurned) /
      caloriesStore.getDailyLimit) *
    100;

  return value > 100 ? 100 : value;
});

caloriesStore.refresh();
</script>
