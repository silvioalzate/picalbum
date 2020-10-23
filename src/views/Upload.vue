<template>
<section>
    <div class="container">
        <div class="header">Carga las fotos</div>
        <div class="steps">
            <div class="step selected">1</div>
            <div class="step">2</div>
            <div class="step">3</div>
            <div class="step">4</div>
            <div class="step">5</div>
        </div>
        <div class="messages" v-bind:class="{ display: display }">
            {{ message }}
        </div>
        <div class="body">
            <img class="image" width="100" height="100" v-for="(item, index) of thumbnail" :key="index" :src="item" />
        </div>
        <div class="footer">
            <div class="left"></div>
            <div class="buttons">
                <input style="display: none" accept=".jpg, .png, .svg" multiple type="file" @change="loadImages" ref="fileInput" />
                <button class="button btn" @click="$refs.fileInput.click()">
                    <font-awesome-icon class="icon" icon="cloud-upload-alt" />
                </button>
                <button class="button btn" @click.prevent="saveImages">
                    <font-awesome-icon class="icon" icon="save" />
                </button>
            </div>
            <div class="right">
                <router-link to="/dimensions" class="button">
                    <font-awesome-icon class="icon" icon="chevron-right" />
                </router-link>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import firebase from "@/app";

const ref = firebase.storage.ref();

export default {
    name: "Upload",
    data() {
        return {
            thumbnail: [],
            images: [],
            display: false,
            message: ""
        };
    },
    methods: {
        loadImages(e) {
            const files = e.target.files;
            for (let i = 0; i < files.length; i++) {
                this.images.push(files[i]);

                let reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = e => {
                    let thumb = e.target.result;
                    this.thumbnail.push(thumb);
                };
            }
        },

        saveImages() {
            for (let i = 0; i < this.images.length; i++) {
                const reference = ref.child("images/" + this.images[i].name);
                const metadata = {
                    contentType: "img/jpeg"
                };
                reference.put(this.images[i], metadata).then(res => {
                    const image = res.ref.location.bucket + "/" + res.ref.location.path;
                    this.$store.commit("addImagesUrl", image);
                });
                this.display = true;
                this.message = "Imágenes guardadas correctamente";
                setTimeout(() => (this.display = false), 2000);
            }
        }
    },
    mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/styles/layout";

.btn {
    width: 80px;
}

.body {
    align-content: flex-start;
    justify-content: flex-start;
}
</style>
