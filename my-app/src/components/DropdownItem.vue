<template lang="">
     <li><a @click="handleItemClick" class="dropdown-item" href="#">{{itemText}}</a></li>
</template>
<script>
export default {
    name: 'AppDropDownItem',
    props: {
        // input props here
        itemText: String,
    },
    data() {
        return {
        
        }
    },
    methods: {
        handleItemClick(){
            console.log('Item clicked:', this.itemText);
        }
    }
}
</script>
<style lang="">
    
</style>