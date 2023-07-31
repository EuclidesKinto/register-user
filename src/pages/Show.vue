<template>
  <div class="px-4 ">
    <div class="container mx-auto">
      <div class="w-full ">
        <div class="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7">
          <div class="items-center justify-between lg:flex">
            <p class="text-base font-bold leading-normal text-gray-800 sm:text-lg md:text-xl ">
              Usuário - {{user.name}}
            </p>

            <div class="items-center mt-6 md:flex lg:mt-0">
              <div class="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                <router-link :to="{name: 'home'}" class="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-green-700 hover:bg-green-600 focus:outline-none rounded">
                  <p class="text-sm font-medium leading-none text-white">Voltar</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <form class="px-4 overflow-x-auto bg-white shadow py-5 md:px-8 xl:px-10 2xl:overflow-x-hidden">
          <div class="grid  md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Nome"
                  v-model="user.name"
                  placeholder="Nome"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full group">
              <InputSimple
                  :disabled="true"
                  label="E-mail"
                  v-model="user.email"
                  placeholder="E-mai"
                  inputType="email"
              />
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Documento"
                  v-model="user.document"
                  placeholder="Documento"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Telefone"
                  v-model="user.phone"
                  placeholder="Telefone"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full group">
              <InputSimple
                  :disabled="true"
                  label="Cep"
                  v-model="user.cep"
                  placeholder="Cep"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="logradouro"
                  v-model="user.logradouro"
                  placeholder="logradouro"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Bairro"
                  v-model="user.neighborhood"
                  placeholder="Bairro"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Número"
                  v-model="user.number"
                  placeholder="Número"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Cidade"
                  v-model="user.city"
                  placeholder="Cidade"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full group">
              <InputSimple
                  :disabled="true"
                  label="Estado"
                  v-model="user.state"
                  placeholder="Estado"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-1 md:gap-6">
            <div class="relative z-0 w-full  group">
              <InputSimple
                  :disabled="true"
                  label="Complemento"
                  v-model="user.complement"
                  placeholder="Complemento"
                  inputType="text"
              />
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed} from "vue";
import {useStore} from "vuex";
import { useRoute } from 'vue-router';
import InputSimple from "../components/common/InputSimple.vue";

const store = useStore();
const route = useRoute();

const userId = route.params.id
const  users = store.state.users

const user = computed(() => store.getters.getUserById(userId));

</script>
