<template>
    <div class="v-counter">
        <button class="v-counter__btn" @click="increase(-1)">Decrease 👇</button>
        <div class="v-counter__display">{{ count }}</div>
        <button class="v-counter__btn" @click="increase(1)">Increase 👆</button>
    </div>
</template>

<script>
export default {
    props: {
        initial: Number
    },
    data() {
        return  {
            count: this.initial || 0
        }
    },
    methods: {
        increase(delta) {
            this.count += delta
        }
    }
}
</script>

<style scoped src="./Counter.css">
</style>