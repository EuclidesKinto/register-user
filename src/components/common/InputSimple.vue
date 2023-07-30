<template>
  <div>
    <div class="text-base font-medium leading-none text-gray-800">
      {{ label }}
      <span v-if="error" class="ml-2 text-red-500 text-[12px]">
        - {{ error }}
      </span>
    </div>
    <input
        :id="`input-${placeholder}`"
        :placeholder="placeholder"
        class="w-full p-2 mt-2 border border-gray-300 rounded outline-none focus:bg-gray-50"
        :type="inputType"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :autofocus="autoFocus"
        autocomplete="off"
        :disabled="disabled"
        :class="disabled ? 'bg-gray-200 text-gray-600 italic' : ''"
    >
  </div>
</template>

<script setup>
const {disabled, modelValue, placeholder, inputType, max, autoFocus, error, label } = defineProps([
  "modelValue",
  "disabled",
  "placeholder",
  "inputType",
  "max",
  "autoFocus",
  "error",
  "label",
]);

const emit = defineEmits(["update:modelValue"]);

</script>
