<template lang="">
    <!-- <button @click="loadData">Load</button> -->
   <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Salary</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in employees" :key="employee.id">
      <th scope="row">{{employee.id}}</th>
      <td>{{employee.name}}</td>
      <td>{{employee.salary}}</td>
      <td><button @click="deleteEmployee(employee.id)" class="btn btn-danger"> X </button></td>
    </tr>
    
  </tbody>
</table>
</template>
<script>
export default {
    data() {
        return {
            employees: []
        }
    },

    methods: {
        loadData(){
            fetch('http://localhost:3000/employees')
            .then(res=>res.json())
            .then(data=> this.employees = data)
        },
        deleteEmployee(id){
            console.log('Delete employee by id ', id);
            fetch('http://localhost:3000/employees/'+ id, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=> console.log(data))
        }
    },
    mounted() {
        console.log('After component initialized... ');
        this.loadData();
    },
}
</script>
<style lang="">
    
</style>