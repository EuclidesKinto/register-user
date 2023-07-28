<script setup>
import SideBar from "./components/includes/SideBar.vue";
import Header from "./components/includes/Header.vue";
</script>
<template>
  <div class="w-full h-full bg-gray-200">
    <div class="flex flex-no-wrap">
      <SideBar/>
      <div class="w-full">
        <Header/>
        <div class="container p-10 mx-auto ">
          <div class="w-full h-full">
            <RouterView/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

