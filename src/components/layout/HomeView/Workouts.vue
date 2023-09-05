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
import VInput from "../../UI/VInput.vue";
import Heading from "../../UI/Heading.vue";
import Form from "../../UI/Form.vue";
import List from "../../UI/List.vue";
</script>
