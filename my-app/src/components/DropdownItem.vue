<template lang="">
     <li><a @click="handleClick(itemText)" class="dropdown-item" href="#">{{itemText}}</a></li>
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
        handleClick(option){
            console.log('Item clicked:', option);
            this.$emit('select', option)
        
        }
    }
}
</script>
<style lang="">
    
</style>