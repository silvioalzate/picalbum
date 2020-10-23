<template>
<section>
    <div class="container">
        <div class="header">Elige el tamaño</div>
        <div class="steps">
            <div class="step ">1</div>
            <div class="step selected">2</div>
            <div class="step">3</div>
            <div class="step">4</div>
            <div class="step">5</div>
        </div>
        <div class="messages" v-bind:class="{ display: display }">
            {{ message }}
        </div>
        <div class="body">
            <div class="item" @click="saveDimensions('16x24')">
                <img src="@/assets/frame-16.png" alt="16x24" class="image" />
                <h2 class="text">16cm x 24cm</h2>
            </div>
            <div class="item" @click="saveDimensions('20x20')">
                <img src="@/assets/frame-20.png" alt="20x20" class="image" />
                <h2 class="text">20cm x 20cm</h2>
            </div>
            <div class="item" @click="saveDimensions('24x24')">
                <img src="@/assets/frame-24.png" alt="24x24" class="image" />
                <h2 class="text">24cm x 24cm</h2>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <router-link to="/upload" class="button">
                    <font-awesome-icon class="icon" icon="chevron-left" />
                </router-link>
            </div>
            <div class="buttons"></div>
            <div class="right">
                <router-link to="/data" class="button">
                    <font-awesome-icon icon="chevron-right" />
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: "Upload",
    data() {
        return {
            display: false,
            message: ""
        };
    },
    methods: {
        saveDimensions(dimension) {
            this.$store.commit("addDimensions", dimension);
            this.display = true;
            this.message = "Has elegido " + dimension;
            setTimeout(() => (this.display = false), 2000);
        }
    },

    mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";
</style>
