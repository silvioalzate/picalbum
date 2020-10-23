<template>
<section>
    <div class="container">
        <div class="header">
            Finaliza la transacción
            <button class="button white" @click="logout">
                <font-awesome-icon class="icon ico" icon="sign-out-alt" />
            </button>
        </div>
        <div class="steps">
            <div class="step ">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
            <div class="step ">4</div>
            <div class="step selected">5</div>
        </div>
        <div class="messages" v-bind:class="{ display: display }">
            {{ message }}
        </div>
        <div class="body">
            <h2 class="text">{{ name }}</h2>
            <h2 class="text">Elegiste {{ dimensions }}</h2>
            <h2 class="text">{{ city }}, {{ state }}, {{ country }}</h2>
            <h2 class="text">{{ address }}</h2>
            <h2 class="text">{{ phone }}</h2>
        </div>
        <div class="footer">
            <div class="left">
                <router-link to="/payment" class="button">
                    <font-awesome-icon icon="chevron-left" />
                </router-link>
            </div>
            <div class="buttons">
                <button class="button btn" @click="saveData">
                    <font-awesome-icon class="icon" icon="save" />
                </button>
            </div>
            <div class="right"></div>
        </div>
    </div>
</section>
</template>

<script>
import firebase from "@/app";

export default {
    name: "Final",
    data() {
        return {
            display: false,
            message: "",
            name: "",
            email: "",
            country: "",
            state: "",
            city: "",
            address: "",
            phone: "",
            dimensions: "",
            imagesUrl: ""
        };
    },
    methods: {
        async logout() {
            await firebase
                .logout()
                .then(() => {
                    this.$router.replace("login");
                })
                .catch(err => {
                    alert("Oops 🤪 " + err.message);
                });
        },

        saveData() {
            const collection = firebase.db.collection("clients");

            collection
                .add({
                    name: this.name,
                    email: this.email,
                    country: this.country,
                    state: this.state,
                    city: this.city,
                    address: this.address,
                    phone: this.phone,
                    dimensions: this.dimensions,
                    imagesUrl: this.imagesUrl
                })
                .then(function () {});
        }
    },
    mounted() {
        (this.country = this.$store.getters.getCountry),
        (this.state = this.$store.getters.getState),
        (this.city = this.$store.getters.getCity),
        (this.address = this.$store.getters.getAddress),
        (this.phone = this.$store.getters.getPhone),
        (this.dimensions = this.$store.getters.getDimensions),
        (this.imagesUrl = this.$store.getters.getImagesUrl);
        this.name = firebase.auth.currentUser.displayName;
        this.email = firebase.auth.currentUser.email;
    }
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";

.btn {
    width: 80px;
}

.body {
    padding-top: 100px;
    flex-flow: column;
    align-content: flex-start;
    justify-content: flex-start;
}

.ico {
    width: 20px;
    height: 20px;
    color: var(--primary);
}

.header {
    justify-content: space-evenly;
}

.white {
    background-color: transparent;
    box-shadow: none;
}
</style>
