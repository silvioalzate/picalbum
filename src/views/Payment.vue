<template>
<section>
    <div class="container">
        <div class="header">Realiza el pago</div>
        <div class="steps">
            <div class="step ">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
            <div class="step selected">4</div>
            <div class="step">5</div>
        </div>
        <div class="messages">Mensajes para el usuario</div>
        <div class="body"></div>
        <div class="footer">
            <div class="left">
                <router-link to="/data" class="button">
                    <font-awesome-icon icon="chevron-left" />
                </router-link>
            </div>
            <div class="buttons"></div>
            <div class="right">
                <router-link to="/final" class="button">
                    <font-awesome-icon icon="chevron-right" />
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Payment",
    data() {
        return {};
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";
</style>
