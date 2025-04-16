<template>
  <div>
    <div class="title">
      <RouterLink v-for="(f, i) in title" :key="i"
      :to="'/'+f">{{ f }}
    </RouterLink>
    </div>
    <router-view />
  </div>
</template>