<template>
  <div>
    <h1>Movies</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacter />
  </div>
</template>


<script>
import ListCharacter from './components/ListCharacter.vue'
import FilterByStatus from './components/FilterByStatus.vue';
import FilterByName from './components/FilterByName.vue';
  export default {
    name: 'App',
    components: {
    ListCharacter,
    FilterByStatus,
    FilterByName
}
    }

</script>

<style lang="scss">
  :root {
    --background-body: aquamarine;
    --background-card: #3c3e44;
    --text-white: white;
    --text-gray: gray;
    --text-orange: orange;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
  }
  body {
    background-color: var(--background-body);
    color: var(--text-white);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  h1{
    margin-bottom: 3rem;
    text-align: center;
  }
  .container {
    width: 980px;
    max-width: 90%;
    margin: 5rem auto;
  }
  img {
    width: 100%;
  }

</style>
