<template>
  <div class="notfound">
    <div class="oops">
      <h1>404</h1>
      <h2>Ooops this page doesnt exist</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notfound",
};
</script>

<style scoped>
.notfound {
  padding-top: 8%;
  text-align: center;
}
.oops h1 {
  font-weight: 100;
  font-size: 8em;
  letter-spacing: 0.8px;
  line-height: 1.4;
}
.oops h2 {
  font-weight: 100;
  font-size: 1.7em;
  letter-spacing: 0.8px;
  line-height: 1.4;
  padding-bottom: 5%;
}
</style>