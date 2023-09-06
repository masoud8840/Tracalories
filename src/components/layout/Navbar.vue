<template>
  <header>
    <nav class="navbar">
      <a href="/" class="brand">
        <i class="fa-solid fa-utensils text-4xl sm:text-5xl"></i>
        Tracalories
      </a>
      <ul class="navbar-menu">
        <li>
          <button class="menu-item" @click="openModal">Set daily limit</button>
        </li>
        <li>
          <button class="menu-item" @click="resetStore">Reset day</button>
        </li>
      </ul>
    </nav>
  </header>

  <Modal
    modal-title="Set Daily Limit"
    :is-open="isModalOpen"
    @close="closeModal"
  >
    <form
      class="modal-body flex flex-col gap-3"
      @submit.prevent="handleFormSubmit"
    >
      <label for="calories-limit">Daily calories limit</label>
      <input
        id="calories-limit"
        type="text"
        placeholder="Calories"
        v-model="dailyLimit"
      />
      <button>Save</button>
    </form>
  </Modal>
</template>

<script setup>
import { useCaloriesStore } from "../../store/calories.js";
import { useMealsStore } from "../../store/meals.js";
import { useWorkoutsStore } from "../../store/workouts.js";
import Modal from "../UI/Modal.vue";
import { ref } from "vue";

const caloriesStore = useCaloriesStore();

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

const dailyLimit = ref(0);
function handleFormSubmit() {
  caloriesStore.setDailyLimit(dailyLimit.value);
  caloriesStore.setRemaining();
  localStorage.setItem("dailyLimit", dailyLimit.value);
  isModalOpen.value = false;
}
function resetStore() {
  caloriesStore.reset();
  useWorkoutsStore().reset();
  useMealsStore().reset();
}
</script>
