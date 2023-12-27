<template>
  <div>
    <h2>List of Employees</h2>
    <ul>
      <li
        v-for="employee in employees"
        :key="employee.id"
        @click="selectEmployee(employee.id)"
      >
        {{ employee.name }} - {{ employee.salary }}
      </li>
      <li
        v-for="employee in employees"
        :key="employee.id">
        {{ employee.name }} <a href="#" @click="deleteEmployee(employee.id)"> X </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useEmployeeStore } from "../stores/employeeStore";
import { storeToRefs } from "pinia";

export default {
  setup(_, { emit }) {
    const employeeStore = useEmployeeStore();
    const { employees } = storeToRefs(employeeStore);
    const { deleteEmployee } = employeeStore;

    const selectEmployee = (employeeId) => {
      emit("employeeSelected", employeeId);
    };

    return { employees, selectEmployee, deleteEmployee };
  },
};
</script>
