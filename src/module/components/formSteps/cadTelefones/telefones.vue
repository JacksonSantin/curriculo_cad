<template>
  <v-row>
    <v-col cols="12" class="d-flex justify-center align-center mt-5">
      <v-divider></v-divider>
      <div class="mx-2 primary--text">Telefones</div>
      <v-divider></v-divider>
    </v-col>
  </v-row>

  <v-row class="d-flex justify-end">
    <v-btn @click="controller.alteraArray('telefones').adiciona()" icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>

  <v-card
    v-for="(item, index) in controller.curriculoModel.value.telefones"
    :key="`${item.tipo}_${index}`"
    class="my-6"
    outlined
  >
    <v-sheet class="v-sheet--offset mx-auto">
      <div class="mx-2">Telefone {{ index + 1 }}</div>
    </v-sheet>

    <v-card-text>
      <v-row>
        <v-col cols="12" sm="12">
          <v-select
            label="Tipo"
            item-value="value"
            item-title="text"
            variant="underlined"
            density="compact"
            :items="controller.comboTipoFone.value"
            v-model="item.tipo"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="12">
          <v-text-field
            label="Número"
            variant="underlined"
            density="compact"
            v-maska:[options]
            v-model="item.numero"
          ></v-text-field>
        </v-col>
        <v-btn
          v-if="controller.curriculoModel.value.telefones.length > 1"
          @click="controller.alteraArray('telefones', index).remove()"
          icon
        >
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { vMaska } from "maska";
const options = { mask: ["(##) ####-####", "(##) #####-####"] };
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>

