<template>
  <div id="app">
    <b-container fluid>
      <b-navbar type="dark">
        <b-container>
          <b-navbar-brand href="#">
            Linkering
          </b-navbar-brand>
        </b-container>
      </b-navbar>
    </b-container>
    <b-container class="mt-5">
      <b-form @submit="onSubmit">
        <b-form-group
          label="Phone Number"
          label-for="phoneno"
          description="We'll never share your phone number with anyone else."
        >
          <b-form-input
            id="phoneno"
            v-model="form.number"
            type="text"
            required
            placeholder="Enter phone number ex: 62123456789"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success" class="font-weight-bold">
          Submit
        </b-button>
      </b-form>
      <b-card
        class="mt-5"
        title="Your Whatsapp Link"
        sub-title="Click on link to redirect to WhatsApp"
        v-if="form.waLink"
      >
        <b-card-text>
          <b-link
            :href="form.waLink.link"
            target="_blank"
            v-if="form.waLink.link"
          >
            {{ form.waLink.link }}
          </b-link>
          <div class="alert alert-danger" role="alert" v-else>
            {{ form.waLink.errorMsg }}
          </div>
        </b-card-text>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        number: "",
        waLink: ""
      }
    };
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault();
      const response = await fetch("http://localhost:3000/users", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.form) // body data type must match "Content-Type" header
      });
      const data = await response.json();
      this.form.waLink = data;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container-fluid {
  background-color: #43bea5;
}
</style>
