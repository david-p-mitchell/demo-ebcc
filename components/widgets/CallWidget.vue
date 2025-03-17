<template>
    <a href="#" @click="callNumber()">{{text}}</a>
</template>

<script>
export default {
    name: 'CallWidget',
    props:{
        text: {type:String, required: true }
    },
    methods: {
        callNumber(){
            //window.location.href = "tel:" + atob("KzQ0MTYzNDMwMTQ5OQ=="); 
        }
    }
}
</script>