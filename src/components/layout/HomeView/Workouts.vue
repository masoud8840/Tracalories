<template>
  <section class="workouts">
    <v-input
      placeholder="Filter Workouts"
      v-model="workoutsFilter"
      class="col-span-6"
    />
    <Heading h-title="Workouts items" variant="warning" class="col-span-5" />
    <button class="heading-button button-warning" @click="toggleForm">
      <i class="fas fa-add"></i> Add Workout
    </button>
    <transition>
      <Form
        class="col-span-6"
        variant="warning"
        v-if="isFormVisible"
        @submit.prevent="handleSubmit"
      />
    </transition>

    <p class="error-msg text-red font-medium text-sm" v-if="error">
      {{ error }}
    </p>
    <List :items="listItems" variant="warning" class="col-span-6" />
  </section>
</template>

<script setup>
import { ref } from "vue";
import VInput from "../../UI/VInput.vue";
import Heading from "../../UI/Heading.vue";
import Form from "../../UI/Form.vue";
import List from "../../UI/List.vue";
import { v4 as uuidv4 } from "uuid";

const workoutsFilter = ref("");

const listItems = ref([]);

const isFormVisible = ref(false);
function toggleForm() {
  isFormVisible.value = !isFormVisible.value;
}

const error = ref("");
function handleSubmit(e) {
  const formData = new FormData(e.currentTarget);
  const title = formData.get("title");
  const calories = formData.get("calories");

  if (title.trim() === "" || calories.trim() === "") {
    error.value = "You can't leave inputs blank";
    return;
  }

  if (isNaN(Number(calories))) {
    error.value = "Calories amount must be a number";
    return;
  }

  const newWorkoutObj = {
    id: uuidv4(),
    title,
    calories,
  };
  console.log(newWorkoutObj);

  listItems.value.push(newWorkoutObj);
  error.value = "";

  e.currentTarget.children[0].value = "";
  e.currentTarget.children[1].value = "";
}
</script>
