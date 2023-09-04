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

    <hr />

    <section class="mt-16 flex gap-5">
      <Meals />
      <Meals />
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Card from "../components/UI/Card.vue";
import Meals from "../components/layout/HomeView/Meals.vue";
const overallInfoCards = ref([
  {
    title: 2000,
    caption: "daily calories limit",
    type: "invert",
    extraClasses: "lg:col-span-3",
  },
  {
    title: 0,
    caption: "Gain/Loss",
    type: "success",
    extraClasses: "lg:col-span-3 text-white",
  },
  {
    title: 0,
    caption: "Calories consumed",
    type: "flat",
    extraClasses: "lg:col-span-2",
  },
  {
    title: 0,
    caption: "calories burned",
    type: "flat",
    extraClasses: "lg:col-span-2",
  },
  {
    title: 2000,
    caption: "calories remaining",
    type: "danger",
    extraClasses: "lg:col-span-2",
  },
]);
</script>
