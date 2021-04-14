<template>
  <div class="header">
    <div>
      <h2>Weekly Vue</h2>
    </div>
    <div class="header-links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/team">Team</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding-top: 3%;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.header h2 {
  font-weight: 300;
  font-size: 1.6em;
  letter-spacing: 0.8px;
  line-height: 1.4;
}
.header-links router-link {
  text-decoration: none;
}
.header-links ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  text-align: center;
}
.header-links ul li {
  padding-right: 15%;
}
.header-links ul li router-link {
  padding-bottom: 10%;
  cursor: pointer;
}

.header-links ul li router-link:hover {
  border-bottom: 2px solid white;
}
.header-links ul li a {
  text-decoration: none;
  padding-bottom: 10%;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 100;
}

.header-links ul li a:hover {
  border-bottom: 2px solid white;
}
@media (max-width: 414px) {
  .header-links ul li {
    font-size: 1rem;
    padding-right: 3%;
  }
}
</style>
