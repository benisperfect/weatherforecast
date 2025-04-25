<script setup>
  import topbar from './components/Topbar.vue';
  import sidebar from 'Sidebar.vue';
  import mainscreen from 'MainLayout.vue';
  import WeatherCard from 'WeatherCard.vue';
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
