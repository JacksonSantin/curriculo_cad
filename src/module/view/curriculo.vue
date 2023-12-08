<template>
  <v-container>
    <form-view :controller="controller" />
  </v-container>
</template>

<script setup>
import { curriculoControllerImpl } from "../di/di";
import FormView from "../components/form.vue";
const controller = curriculoControllerImpl();
</script>
