<template>
  <div class="weekly-vue">
    <Header />
    <div class="subcontent">
      <div class="sub-news">
        <h2>Subscribe.</h2>
        <h3>to this newsletter</h3>
        <p>
          You will receive weekly curated<br />
          dose of Vue.js jobs ( Junior - Senior ) <br />
          and Vue.js articles delivered to your mailbox.
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
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent, ref } from "vue";
const Header = defineAsyncComponent(() =>
  import(/*webpackChunkName: "Header"*/ "@/components/Header")
);
const Footer = defineAsyncComponent(() =>
  import(/*webpackChunkName: "Footer"*/ "@/components/Footer")
);
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
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
#app {
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
* {
  margin: 0 !important;
  padding: 0;
  box-sizing: border-box;
  color: white;
}

.weekly-vue {
  width: 100%;
  position: relative;
  background: linear-gradient(to right, #5a79b3 0%, #63acb0 50%, #2ebd86 100%);
  overflow: hidden;
  height: 100vh;
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
  font-size: 1.35em;
  letter-spacing: 1px;
  font-weight: 300;
  line-height: 1.5;
  padding-top: 2%;
}
.sub-news form {
  padding-top: 7%;
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
  cursor: pointer;
}
router-link {
  text-decoration: none;
}

@media (max-width: 414px) {
  .subcontent {
    padding-top: 6rem;
  }
}
</style>
