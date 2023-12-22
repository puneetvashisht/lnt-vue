<template>
  <button @click="incremetmentCount" type="button" class="btn btn-primary">
  {{caption}} <span class="badge text-bg-secondary">{{ count }}</span>
</button>
</template>

<script>
export default {
  name: 'AppBadge',
  
  // input props here
    props: {
        // input props here
        caption: String,
    },
  // Your component's JavaScript code goes here

  // add methods here
    methods: {
        // add methods here
        incremetmentCount() {
            this.count++;
        },
        decrementCount() {
            this.count--;
        }

    },
    // add fields here
    data: function () {
        return {
            // add fields here
            count: 0,
        }
    },
    mounted() {
        
    },
}
</script>

<style >
/* Your component's CSS code goes here */
</style>
