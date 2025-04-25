<script setup>
  import topbar from './components/Topbar.vue';
  import sidebar from './components/Sidebar.vue';
  import mainscreen from './components/MainLayout.vue';
  import WeatherCard from './components/WeatherCard.vue';
</script>

<template>
    <html lang="en">
      <body>
        <mainscreen />
        <topbar />
        <sidebar />
        <WeatherCard />
      </body>
    </html>
</template>
