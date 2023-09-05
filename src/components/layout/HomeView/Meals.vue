<template>
  <section class="meals">
    <v-input
      placeholder="Filter Meals"
      v-model="mealsFilter"
      class="col-span-6"
    />
    <Heading
      h-title="Meals / Food items"
      variant="success"
      class="col-span-5"
    />
    <button class="heading-button button-success" @click="toggleForm">
      <i class="fas fa-add"></i> Add Meal
    </button>
    <transition>
      <Form
        class="col-span-6"
        variant="success"
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
      variant="success"
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

const mealsFilter = ref("");

const formInputs = ref([
  {
    name: "title",
    placeholder: "Enter Meal",
  },
  {
    name: "calories",
    placeholder: "Enter Calories",
  },
]);

const listItems = ref([]);
const filteredListItem = computed(() => {
  if (mealsFilter.value.trim()) {
    return listItems.value.filter(
      (item) =>
        item.title.toLowerCase().includes(mealsFilter.value.toLowerCase()) ||
        item.calories.toString().includes(mealsFilter.value)
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

  const newMealObj = {
    id: uuidv4(),
    title,
    calories,
  };
  listItems.value.push(newMealObj);
  error.value = "";

  e.currentTarget.children[0].value = "";
  e.currentTarget.children[1].value = "";

  isFormVisible.value = false;
}

function handleDelete(id) {
  listItems.value = listItems.value.filter((item) => item.id !== id);
}
</script>
