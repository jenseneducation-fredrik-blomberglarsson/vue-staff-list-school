<template>
  <div class="employeedetails">
    <router-link to="/"></router-link>
    <h1>Employee Details</h1>
    <employee />
  </div>
</template>

<script>
import employee from "@/components/employee";
export default {
  components: { employee },
  computed: {
    employee() {
      return this.$root.$data.employee.find(
        employee => employee.id == this.$route.params.id
      );
    }
  }
};
</script>
