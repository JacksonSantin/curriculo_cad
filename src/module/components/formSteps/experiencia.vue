<template>
  <v-row class="d-flex justify-end mr-3">
    <v-btn
      @click="controller.alteraArray('experienciaProfissional').adiciona()"
      icon
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-row>

  <v-card
    v-for="(item, index) in controller.curriculoModel.value
      .experienciaProfissional"
    :key="`${item.nomeExperiencia}_${index}`"
    class="my-6"
    outlined
  >
    <v-sheet class="v-sheet--offset mx-auto">
      <div class="mx-2">Experiência Profissional {{ index + 1 }}</div>
    </v-sheet>

    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="Nome experiência"
            variant="underlined"
            density="compact"
            v-model="item.nomeExperiencia"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Onde trabalhou?"
            variant="underlined"
            density="compact"
            v-model="item.localTrablhado"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Ano de início"
            type="date"
            variant="underlined"
            density="compact"
            v-model="item.anoInicio"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="Ano de término"
            type="date"
            variant="underlined"
            density="compact"
            :disabled="item.atual"
            v-model="item.anoFim"
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-switch
            label="Emprego atual"
            density="compact"
            inset
            :color="item.atual ? 'green' : ''"
            v-model="item.atual"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          v-if="
            controller.curriculoModel.value.experienciaProfissional.length > 1
          "
          @click="
            controller.alteraArray('experienciaProfissional', index).remove()
          "
          icon
        >
          <v-icon color="red">mdi-close</v-icon>
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
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

