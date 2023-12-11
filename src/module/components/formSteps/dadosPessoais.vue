<template>
  <v-form ref="dadosGerais" lazy-validation>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Nome completo"
            variant="underlined"
            density="compact"
            :rules="[controller.regras.value.required]"
            v-model="controller.curriculoModel.value.nome"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Nacionalidade"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.nacionalidade"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field
            label="Idade"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.idade"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-select
            label="Estado Civil"
            item-value="value"
            item-title="text"
            variant="underlined"
            density="compact"
            :items="controller.comboEstadoCivil.value"
            v-model="controller.curriculoModel.value.estadoCivil"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3">
          <v-select
            label="Sexo"
            item-value="value"
            item-title="text"
            variant="underlined"
            density="compact"
            :items="controller.comboSexo.value"
            v-model="controller.curriculoModel.value.sexo"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Data de nascimento"
            type="date"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.dtNascimento"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="E-mail"
            type="email"
            variant="underlined"
            density="compact"
            :rules="[controller.regras.value.validEmail]"
            v-model="controller.curriculoModel.value.emailPrincipal"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8">
          <v-text-field
            label="Endereço"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.endereco[0].rua"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            label="Número"
            type="number"
            min="0"
            variant="underlined"
            density="compact"
            v-model.number="controller.curriculoModel.value.endereco[0].numero"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
          <v-text-field
            label="CEP"
            variant="underlined"
            density="compact"
            v-maska:[options]
            v-model="controller.curriculoModel.value.endereco[0].cep"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Complemento"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.endereco[0].complemento"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Bairro"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.endereco[0].bairro"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="Cidade"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.endereco[0].cidade"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="3">
          <v-text-field
            label="UF"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.endereco[0].uf"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            label="Site pessoal"
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.site"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <telefones-cad :controller="controller" />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-switch
            label="Possui filhos?"
            density="compact"
            inset
            :color="controller.curriculoModel.value.possuiFilhos ? 'green' : ''"
            v-model="controller.curriculoModel.value.possuiFilhos"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Quantos filhos?"
            type="number"
            min="0"
            variant="underlined"
            density="compact"
            :disabled="!controller.curriculoModel.value.possuiFilhos"
            v-model.number="controller.curriculoModel.value.qtdFilhos"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-switch
            label="Possui CNH?"
            density="compact"
            inset
            :color="controller.curriculoModel.value.possuiCNH ? 'green' : ''"
            v-model="controller.curriculoModel.value.possuiCNH"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            label="Categoria CNH"
            item-value="value"
            item-title="text"
            variant="underlined"
            density="compact"
            :disabled="!controller.curriculoModel.value.possuiCNH"
            :items="controller.comboCategoriaCNH.value"
            v-model="controller.curriculoModel.value.categoriaCNH"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-switch
            label="Portador de deficiência?"
            density="compact"
            inset
            :color="controller.curriculoModel.value.pcd ? 'green' : ''"
            v-model="controller.curriculoModel.value.pcd"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field
            label="Descreva sua deficiência"
            variant="underlined"
            density="compact"
            :disabled="!controller.curriculoModel.value.pcd"
            v-model="controller.curriculoModel.value.descricaoDeficiencia"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-switch
            label="Coloca-se a disposição para entrevistas?"
            density="compact"
            inset
            :color="
              controller.curriculoModel.value.disponivelEntrevista
                ? 'green'
                : ''
            "
            v-model="controller.curriculoModel.value.disponivelEntrevista"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="6">
          <v-switch
            label="Disponível para viagens empresariais?"
            density="compact"
            inset
            :color="
              controller.curriculoModel.value.disponivelViagens ? 'green' : ''
            "
            v-model="controller.curriculoModel.value.disponivelViagens"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-text-field
            label="Foto"
            placeholder="Coloque a url da sua imagem aqui..."
            variant="underlined"
            density="compact"
            v-model="controller.curriculoModel.value.foto"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <v-textarea
            label="Sobre mim"
            density="compact"
            variant="underlined"
            rows="5"
            counter
            v-model="controller.curriculoModel.value.bio"
          ></v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script setup>
import { vMaska } from "maska";
import TelefonesCad from "./cadTelefones/telefones.vue";
const options = { mask: "#####-###" };
defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>

<style>
</style>