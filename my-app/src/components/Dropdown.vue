<template lang="">
    <div class="dropdown">
  <button @click="toggleShow" class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {{caption}}
  </button>
  <ul :class="show? 'dropdown-menu show': 'dropdown-menu'">
    <!-- <li v-for="course in courses" :key="course"><a class="dropdown-item" href="#">{{course}}</a></li>
     -->
     <DropDownItem  v-for="course in courses" :key="course" :itemText= "course" @select="handleItemClick(course)"></DropDownItem>
  </ul>
</div>
</template>
<script>
import DropDownItem from './DropdownItem'
export default {
    name: 'AppDropDown',
    components: {

    DropDownItem

  },
    data() {
        return {
            show : false,
            caption: 'Select Course',
            courses: [
                'Angular', 'React', 'VueJS', 'CanJS', 'EmberJS'
            ]
        }
    },
    methods: {
        toggleShow(){
            this.show = !this.show
        },
        handleItemClick(option){
          console.log('In the parent component, ', option);
          this.caption = option
          this.show = false
        }
    }
}
</script>
<style lang="">
    
</style>