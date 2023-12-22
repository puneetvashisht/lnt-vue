<template lang="">
  <div>
    <h2>Vue Sample Form</h2>

    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />
      <span v-if="!validateName()">Name is required</span>

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
      <span v-if="!validateEmail()">Enter a valid email</span>

      <label for="age">Age:</label>
      <input type="number" id="age" v-model="formData.age" required />
      <span v-if="!validateAge()">Age must be a positive number</span>

      <label for="gender">Gender:</label>
      <select id="gender" v-model="formData.gender" required>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <span v-if="!validateGender()">Please select a gender</span>

      <button type="submit" :disabled="!isFormValid()">Submit</button>
    </form>

    <div>
      <h3>Form Data:</h3>
      <p>Name: {{ formData.name }}</p>
      <p>Email: {{ formData.email }}</p>
      <p>Age: {{ formData.age }}</p>
      <p>Gender: {{ formData.gender }}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: "DefaultName",
        email: "",
        age: null,
        gender: "male",
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
      console.log("Form submitted:", this.formData);
      const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({name: this.formData.name, salary: this.formData.age})
};
      fetch('http://localhost:3000/employees',requestOptions )
            .then(res=>res.json())
            .then(data=> this.employees = data)
    },
    validateName() {
      return this.formData.name.trim() !== "";
    },
    validateEmail() {
      // Simple email validation regex
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(this.formData.email);
    },
    validateAge() {
      return !isNaN(this.formData.age) && this.formData.age > 0;
    },
    validateGender() {
      return this.formData.gender !== "";
    },
    isFormValid() {
      return (
        this.validateName() &&
        this.validateEmail() &&
        this.validateAge() &&
        this.validateGender()
      );
    },
  },
};
</script>
<style lang=""></style>
