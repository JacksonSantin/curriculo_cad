<template>
  <v-container fluid>
    <div class="py-12 text-center">
      <v-icon
        class="mb-6"
        color="success"
        icon="mdi-check-circle-outline"
        size="128"
      ></v-icon>

      <div class="text-h4 font-weight-bold">
        Tudo pronto, só gerar seu currículo!
      </div>
    </div>

    <div class="pa-4 text-center">
      <v-btn
        class="text-none"
        color="#5865f2"
        min-width="92"
        size="large"
        variant="flat"
        @click="controller.gerarCurriculo()"
      >
        Gerar currículo
      </v-btn>
    </div>
  </v-container>
</template>

<script setup>
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>