<template>
<section>
    <div class="container">
        <div class="header">Coloca los datos de envío</div>
        <div class="steps">
            <div class="step ">1</div>
            <div class="step">2</div>
            <div class="step selected">3</div>
            <div class="step">4</div>
            <div class="step">5</div>
        </div>
        <div class="messages" v-bind:class="{ display: display }">
            {{ message }}
        </div>
        <div class="body">
            <form>
                <select class="select" name="pais" id="pais" v-model="country">
                    <option disabled selected>País</option>
                    <option value="Colombia">Colombia</option>
                </select>
                <select class="select" name="departamento" id="departamento" v-model="state">
                    <option disabled selected>Departamento</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Antioquia">Antioquia</option>
                    <option value="Arauca">Arauca</option>
                    <option value="Atlantico">Atlantico</option>
                    <option value="Bolívar">Bolívar</option>
                    <option value="Boyacá">Boyacá</option>
                    <option value="Caldas">Caldas</option>
                    <option value="Caquetá">Caquetá</option>
                    <option value="Casanare">Casanare</option>
                    <option value="Cauca">Cauca</option>
                    <option value="Cesar">Cesar</option>
                    <option value="Chocó">Chocó</option>
                    <option value="Córdoba">Córdoba</option>
                    <option value="Cundinamarca">Cundinamarca</option>
                    <option value="Guainía">Guainía</option>
                    <option value="Guaviare">Guaviare</option>
                    <option value="Huila">Huila</option>
                    <option value="La Guajira">La Guajira</option>
                    <option value="Magdalena">Magdalena</option>
                    <option value="Meta">Meta</option>
                    <option value="Nariño">Nariño</option>
                    <option value="Norte de Santander">Norte de Santander</option>
                    <option value="Putumayo">Putumayo</option>
                    <option value="Quindío">Quindío</option>
                    <option value="Risaralda">Risaralda</option>
                    <option value="San Andrés y Providencia">San Andrés y Providencia</option>
                    <option value="Santander">Santander</option>
                    <option value="Sucre">Sucre</option>
                    <option value="Tolima">Tolima</option>
                    <option value="Valle del Cauca">Valle del Cauca</option>
                    <option value="Vaupés">Vaupés</option>
                    <option value="Vichada">Vichada</option>
                </select>
                <input class="input" type="text" name="ciudad" id="ciudad" placeholder="Ciudad" v-model="city" />
                <input class="input" type="text" name="direccion" id="direccion" placeholder="Dirección" v-model="address" />
                <input class="input" type="tel" name="telefono" id="telefono" placeholder="Teléfono" v-model="phone" />
            </form>
        </div>
        <div class="footer">
            <div class="left">
                <router-link to="/dimensions" class="button">
                    <font-awesome-icon class="icon" icon="chevron-left" />
                </router-link>
            </div>
            <div class="buttons">
                <button class="button btn" @click="addData">
                    <font-awesome-icon class="icon" icon="save" />
                </button>
            </div>
            <div class="right">
                <router-link to="/payment" class="button">
                    <font-awesome-icon class="icon" icon="chevron-right" />
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
            country: "País",
            state: "Departamento",
            city: "",
            address: "",
            phone: "",
            display: false,
            message: ""
        };
    },
    methods: {
        addData() {
            const country = this.country;
            const state = this.state;
            const city = this.city;
            const address = this.address;
            const phone = this.phone;

            this.$store.commit("addData", {
                country,
                state,
                city,
                address,
                phone
            });
            this.display = true;
            this.message = "Tus datos se han almacenado correctamente ";
            setTimeout(() => (this.display = false), 2000);
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
</style>
