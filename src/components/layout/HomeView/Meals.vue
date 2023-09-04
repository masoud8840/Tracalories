<template>
  <section class="meals">
    <v-input
      placeholder="Filter Meals"
      v-model="mealsFilter"
      class="col-span-6"
    />
    <Heading h-title="Meals/Food items" variant="green" class="col-span-5" />
    <button class="heading-button button-success" @click="toggleForm">
      <i class="fas fa-add"></i> Add Meal
    </button>
    <transition>
      <Form class="col-span-6" variant="danger" v-if="isFormVisible" />
    </transition>
    <List :items="listItems" variant="danger" class="col-span-6" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import VInput from "../../UI/VInput.vue";
import Heading from "../../UI/Heading.vue";
import List from "../../UI/List.vue";
import Form from "../../UI/Form.vue";

const mealsFilter = ref("");
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
