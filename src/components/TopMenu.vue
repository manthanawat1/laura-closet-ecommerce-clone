<template>
    <v-row class="top-menu-container mx-auto my-2">
        <v-slide-group
            show-arrows
            class="list-menu-container"
        >
            <v-slide-item
                v-for="(listMenu, index) in menu"
                :key="index"
            >
                <v-btn
                    class="list-menu-btn"
                    :ripple="false"
                >
                    {{ listMenu }}
                    <v-sheet v-if="index === 0" color="#EB5757" class="ml-1 tag-menu">
                        #Fresh
                    </v-sheet>
                </v-btn>
            </v-slide-item>
        </v-slide-group>
    </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data: () => ({
      model: null,
      menu: ["New Arrivals", "Dresses", "Tops", "Jackets", "Lingerie & Lounge Wear", "Beach Wear", "Blouse", "Denim", "Vintage", "Shoes", "Sandals", "Bags", "Jewelries"]
    }),
})
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/euclid-circular-a');

    * {
        box-sizing: border-box;
        font-family: 'Euclid Circular A', sans-serif;
    }

    .row {
        padding: 0%;
        margin: 0%;
    }

    .top-menu-container {
        padding: 1.2rem 1.8rem;
        max-width: 130rem !important;
        display: flex;
        gap: 4rem;
    }

    .tag-menu {
        color: #fff;
        padding: 0.4rem;
        border-radius: 4px;
    }

    .list-menu-container >>> .v-slide-group__wrapper {
        width: 130rem !important;
    }

    .list-menu-container >>> .v-slide-group__wrapper > .v-slide-group__content {
        gap: 1.9rem;
    }

    .list-menu-btn {
        background-color: transparent !important;
        box-shadow: none;
        color: #374151;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.028rem;
        min-width: 0 !important;
        padding: 0 !important;
    }

    .list-menu-btn::before {
        opacity: 0 !important;
    }
</style>