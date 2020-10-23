<template>
<section class="bg">
    <div class="container">
        <img src="@/assets/logo.png" alt="" class="logo" />
        <button @click="loginFacebook" class="facebook button">
            <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']" />
            Inicia con facebook
        </button>
        <button @click="loginGoogle" class="google button">
            <font-awesome-icon class="icon" :icon="['fab', 'google']" />
            Inicia con google
        </button>
    </div>
</section>
</template>

<script>
import firebase from "@/app";

export default {
    name: "Upload",
    components: {},
    data() {
        return {};
    },

    mounted() {},

    methods: {
        async loginFacebook() {
            await firebase
                .loginF()
                .then(() => {
                    window.location.assign("/profile");
                })
                .catch(err => {
                    alert("Oops, 🤪" + err.message);
                });
        },

        async loginGoogle() {
            await firebase
                .loginG()
                .then(() => {
                    window.location.assign("/profile");
                })
                .catch(err => {
                    alert("Oops, 🤪" + err.message);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";

.container {
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
}

.header {
    color: var(--white);
    font-size: 3rem;
}

.button {
    width: 80%;
    margin: 10px;
    justify-content: space-evenly;
    text-transform: none;
    font-weight: bold;
    font-size: 1.2rem;
}
</style>
