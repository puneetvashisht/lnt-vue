<template lang="">
    <div>
        <button @click="authenticate()">Login</button>

        <button @click="testapi()">Test</button>
    </div>
</template>

<script setup>
import { ref } from "vue";
import EmployeeService from "../services/EmployeeService";

const employees = ref([]);

const authenticate = () => {
    console.log("Authentication code goes here..");
    //http call 
    EmployeeService.authenticate()
    .then(res=> {
        console.log( res.headers.getAuthorization());
        localStorage.setItem('token',  res.headers.getAuthorization())
    })
};

const testapi = () => {
    console.log(' In test api method..');
    EmployeeService.testapi()
    .then(res => console.log(res))
    .catch(err => console.log('Err', err));
};


</script>
<style lang="">
    
</style>