<template>
    <div>
        <counter :initial="2"/>
    </div>
</template>

<script>
import Counter from './Counter.ce.vue';

export default {
    components: {Counter}
}
</script>

<style src="./App.css"></style>