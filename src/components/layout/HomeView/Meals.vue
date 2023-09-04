<template>
  <section class="meals">
    <FilterInput placeholder="Filter Meals" v-model="mealsFilter" />
    <Heading h-title="Meals/Food items" variant="green" />
    <List :items="listItems" variant="success" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import FilterInput from "../../UI/FilterInput.vue";
import Heading from "../../UI/Heading.vue";
import List from "../../UI/List.vue";

const mealsFilter = ref("");
const listItems = ref([
  {
    title: "Hello",
    calories: 200,
  },
]);
</script>
