<template>
<section class="bg">
    <div class="container">
        <img src="@/assets/logo.png" alt="" class="logo" />
        <div class="title">
            Imprime tus mejores momentos y conserva esos recuerdos inolvidables
        </div>
        <router-link to="/login" class="button">Comencemos</router-link>
    </div>
</section>
</template>

<script>
export default {
    name: "Home",

    data() {
        return {};
    },

    mounted() {},
    components: {},
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";

.container {
    justify-content: space-evenly;
    align-items: center;
}

.button {
    width: 80%;
    font-weight: bold;
}
</style>
