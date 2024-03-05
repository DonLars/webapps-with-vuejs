<template>
  <div class="navbar">
    <div class="logo">Logo</div>
    <div class="nav_buttons">
      <p>Counter: {{ $store.state.count }}</p>
      <div class="btn"><router-link to="/">Component A</router-link></div>
      <div class="btn">
        <router-link to="/compTwo">Component B</router-link>
      </div>
      <div class="btn">
        <router-link to="/compThree">Component C</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-bar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
}

.logo {
  background: blue;
  color: #fff;
  padding: 1rem;
  margin: 0 1rem;
}

.navbar .nav_buttons {
  display: flex;
}

.navbar .nav_buttons .btn a {
  padding: 1rem;
  margin: 0 1rem;
  color: white;
  background: black;
  cursor: pointer;
  text-decoration: none;
}

.navbar .nav_buttons .btn a.active {
  background: #777;
}
</style>
