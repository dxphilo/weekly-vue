<template>
  <div>
    <router-view />
    <div class="subcontent">
      <div class="sub-news">
        <h2>Subscribe.</h2>
        <h3>to our newsletter</h3>
        <p>
          Subscribe to get your weekly curated<br />
          dose of Vue.js jobs ( Junior - Senior ) roles <br />
          and Vue.js articles delivered into your mailbox.
        </p>

        <form @submit.prevent="emailSub">
          <input
            type="email"
            placeholder="your email address"
            v-model="email"
            required
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  setup() {
    const email = ref("");

    function emailSub() {
      console.log(email.value);
      email.value = "";
    }
    return { email, emailSub };
  },
};
</script>

<style>
* {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  color: white;
  font-family: "Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: calc(10px + 0.33vw);
  scroll-behavior: smooth;
}
.subcontent {
  display: flex;
  justify-content: center;
  padding-top: 10rem;
  text-align: center;
}
.sub-news h2 {
  font-size: 4.5em;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1.5;
}
.sub-news h3 {
  font-weight: 100;
  font-size: 2.3em;
  letter-spacing: 0.8px;
  line-height: 1.4;
}
.sub-news p {
  font-size: 1.3em;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.5;
  padding-top: 2%;
}
.sub-news form {
  padding-top: 8%;
  position: relative;
}
.sub-news input {
  padding: 10px 62px;
  background: none;
  border: none;
  border-bottom: 4px solid #48cf9b;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  font-size: 1.3rem;
  line-height: 1.5;
  letter-spacing: 1px;
  color: #5a79b3;
}
.sub-news input::placeholder {
  font-size: 1.3rem;
  padding: 0;
  color: #5a79b3;
  line-height: 1.5;
  letter-spacing: 1px;
}
.sub-news input:focus {
  outline: none;
}
.sub-news button {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
}
.sub-news button svg {
  outline: none;
  margin: 0;
  padding: 0;
  transform: scale(0.7);
  transition: 0.4s;
  fill: white;
  border: 2px solid #48cf9b;
}
sub-news button svg:hover {
  fill: #48cf9b;
}

@media (max-width: 414px) {
  .subcontent {
    padding-top: 6rem;
  }
}
</style>