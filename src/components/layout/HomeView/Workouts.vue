<template>
  <section class="workouts">
    <v-input
      placeholder="Filter Workouts"
      v-model="workoutsFilter"
      class="col-span-6"
    />
    <Heading h-title="Workouts items" variant="warning" class="col-span-5" />
    <button class="heading-button button-warning" @click="toggleForm">
      <i class="fas fa-add"></i> Add Meal
    </button>
    <transition>
      <Form class="col-span-6" variant="warning" v-if="isFormVisible" />
    </transition>
    <List :items="listItems" variant="warning" class="col-span-6" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import VInput from "../../UI/VInput.vue";
import Heading from "../../UI/Heading.vue";
import Form from "../../UI/Form.vue";
import List from "../../UI/List.vue";

const workoutsFilter = ref("");

const listItems = ref([
  {
    title: "Hello",
    calories: 200,
  },
  {
    title: "Hello",
    calories: 200,
  },
]);

const isFormVisible = ref(false);
function toggleForm() {
  isFormVisible.value = !isFormVisible.value;
}
</script>
