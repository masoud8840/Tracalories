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
        :inputs="formInputs"
      />
    </transition>

    <p class="error-msg" v-if="error">
      {{ error }}
    </p>
    <List
      :items="filteredListItem"
      variant="warning"
      class="col-span-6"
      @delete-item="handleDelete"
    />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import VInput from "../../UI/VInput.vue";
import Heading from "../../UI/Heading.vue";
import Form from "../../UI/Form.vue";
import List from "../../UI/List.vue";
import { v4 as uuidv4 } from "uuid";

const workoutsFilter = ref("");

const formInputs = ref([
  {
    name: "title",
    placeholder: "Enter Workout",
  },
  {
    name: "calories",
    placeholder: "Enter Calories",
  },
]);

const listItems = ref([]);
const filteredListItem = computed(() => {
  if (workoutsFilter.value.trim()) {
    return listItems.value.filter(
      (item) =>
        item.title.toLowerCase().includes(workoutsFilter.value.toLowerCase()) ||
        item.calories.toString().includes(workoutsFilter.value)
    );
  }
  return listItems.value;
});

const isFormVisible = ref(false);
function toggleForm() {
  isFormVisible.value = !isFormVisible.value;
  error.value = "";
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
  listItems.value.push(newWorkoutObj);
  error.value = "";

  e.currentTarget.children[0].value = "";
  e.currentTarget.children[1].value = "";

  isFormVisible.value = false;
}

function handleDelete(id) {
  listItems.value = listItems.value.filter((item) => item.id !== id);
}
</script>
