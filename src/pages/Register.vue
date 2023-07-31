<template>
  <div class="px-4 ">
    <div class="container mx-auto">
      <div class="w-full ">
        <div class="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7">
          <div class="items-center justify-between lg:flex">
            <p class="text-base font-bold leading-normal text-gray-800 sm:text-lg md:text-xl ">
              Cadastrar Usuário
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
        <form @submit.prevent="addUser" class="px-4 overflow-x-auto bg-white shadow py-7 md:px-8 xl:px-10 2xl:overflow-x-hidden">
          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  label="Nome"
                  placeholder="Nome"
                  v-model="name"
                  inputType="text"
                  :autoFocus="true"
                  @input="validateField"
              />
              <p  v-if="nameError" class="text-red-500 text-xs">{{ nameError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  label="E-mail"
                  placeholder="E-mai"
                  v-model="email"
                  inputType="email"
                  @input="validateField"
              />
              <p  v-if="emailError" class="text-red-500 text-xs">{{ emailError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  v-mask="'###.###.###-##'"
                  label="Documento"
                  placeholder="Documento"
                  v-model="document"
                  inputType="text"
                  @input="validateField"
              />
              <p  v-if="documentError" class="text-red-500 text-xs">{{ documentError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  v-mask="'(##) #####-####'"
                  label="Telefone"
                  placeholder="Telefone"
                  v-model="phone"
                  inputType="text"
                  @input="validateField"
              />
              <p  v-if="phoneError" class="text-red-500 text-xs">{{ phoneError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <InputSimple
                  v-mask="'#####-###'"
                  label="Cep"
                  placeholder="Cep"
                  v-model="cep"
                  inputType="text"
                  @blur="buscarCep"
              />
              <p  v-if="cepError" class="text-red-500 text-xs">{{ cepError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  :disabled="true"
                  label="logradouro"
                  placeholder="logradouro"
                  v-model="logradouro"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  :disabled="true"
                  label="Bairro"
                  placeholder="Bairro"
                  v-model="neighborhood"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <InputSimple
                  v-mask="'########'"
                  label="Número"
                  placeholder="Número"
                  v-model="number"
                  inputType="text"
                  @input="validateField"
              />
              <p  v-if="numberError" class="text-red-500 text-xs">{{ numberError }}</p>
              <p  v-else class="text-white text-xs">-</p>
            </div>
          </div>

          <div class="grid mt-3 md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  :disabled="true"
                  label="Cidade"
                  placeholder="Cidade"
                  v-model="city"
                  inputType="text"
              />
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <InputSimple
                  :disabled="true"
                  label="Estado"
                  placeholder="Estado"
                  v-model="state"
                  inputType="text"
              />
            </div>
          </div>

          <div class="grid md:grid-cols-1 md:gap-6">
            <div class="relative z-0 w-full mb-2 group">
              <InputSimple
                  :disabled="true"
                  label="Complemento"
                  placeholder="Complemento"
                  v-model:input="complement"
                  inputType="text"
              />
            </div>
          </div>
          <hr class="h-[1px] bg-gray-100 my-5" />
          <div class="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
            <router-link  class="cursor-pointer bg-white border-red-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-3 text-red-700 border "
                :to="{name: 'home'}">
              Cancelar
            </router-link>
            <button type="submit"  class="cursor-pointer  rounded  transform duration-300 ease-in-out text-sm font-medium px-6 py-3 text-white "
                    :disabled="(!name || !email || !document || !phone || !number)"
                    :class="(!name || !email || !document || !phone || !number) ? 'bg-gray-500 text-gray-800' : 'bg-indigo-700 hover:bg-indigo-600'"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";
import {useStore} from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";
import InputSimple from "../components/common/InputSimple.vue";

const store = useStore();
const router = useRouter();

const name = ref("");
const email = ref("");
const document = ref("");
const phone = ref("");
const cep = ref("");
const logradouro = ref("");
const number = ref("");
const complement = ref("");
const neighborhood = ref("");
const state = ref("");
const city = ref("");
// errors
let nameError = ref(null);
let emailError = ref(null);
let documentError = ref(null);
let phoneError = ref(null);
let numberError = ref(null);
let cepError = ref(null);


const validateField = () => {
    if (!name.value) {
      nameError.value = 'O nome é obrigatório.';
    } else if (name.value.length <= 3) {
      nameError.value = 'O nome deve ter mais de 3 caracteres.';
    } else {
      nameError.value = '';
    }
    // Validação do campo 'email'
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
      emailError.value = 'O e-mail é obrigatório.';
    } else if (!emailPattern.test(email.value)) {
      emailError.value = 'Digite um e-mail válido.';
    } else {
      emailError.value = '';
    }

    if (!document.value) {
      documentError.value = 'O documento é obrigatório.';
    } else {
      documentError.value = '';
    }

    if (!phone.value) {
      phoneError.value = 'O telefone é obrigatório.';
    } else {
      phoneError.value = '';
    }

    if (!number.value) {
      numberError.value = 'O número é obrigatório.';
    } else {
      numberError.value = '';
    }

};


const addUser =  () => {
  validateField();
  try {
    const user = {
      name: name.value,
      document: document.value,
      email: email.value,
      phone: phone.value,
      cep: cep.value,
      logradouro: logradouro.value,
      number: number.value,
      complement: complement.value,
      neighborhood: neighborhood.value,
      state: state.value,
      city: city.value
    }
    store.commit('addUser', user)
    name.value = "";
    document.value = "";
    email.value = "";
    phone.value = "";
    cep.value = "";
    logradouro.value = "";
    number.value = "";
    complement.value = "";
    neighborhood.value = "";
    state.value = "";
    city.value = "";
    router.push({ name: "home" });
  } catch (e) {
    alert("Erro ao cadastrar pessoa");
  }
}
const buscarCep = async () => {
  try {
    if (cep.value && cep.value.length === 9) {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep.value}/json/`);
      if (data.erro) {
        cepError.value = "CEP não encontrado";
      } else {
        cep.value = data.cep;
        logradouro.value = data.logradouro;
        complement.value = data.complemento;
        neighborhood.value = data.bairro;
        state.value = data.uf;
        city.value = data.localidade;

        cepError.value = null;
      }
    } else {
      cepError.value = "Campo obrigatório";
    }
  } catch (e) {
    console.error("Erro ao buscar CEP:", e);
    cepError.value = "Erro ao buscar CEP";
  }
};
watch(cep, buscarCep);
</script>
