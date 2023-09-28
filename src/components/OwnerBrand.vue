<template>
    <v-container class="mx-auto container" fluid>
        <v-row class="header-text" align="center" justify="center">
            Brands for you
        </v-row>
        <v-divider class="horizontal-line"></v-divider>
        <v-row class="image-container" justify="center">
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_1.png"
            ></v-img>
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_2.png"
            ></v-img>
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_3.png"
            ></v-img>
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_4.png"
            ></v-img>
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_5.png"
            ></v-img>
            <v-img
                contain
                max-width="8rem"
                src="../assets/brands-for-you/brand_6.png"
            ></v-img>
        </v-row>
    </v-container>
</template>

<style scoped>
    @import url('https://fonts.cdnfonts.com/css/euclid-circular-a');

    * {
        box-sizing: border-box;
        font-family: 'Euclid Circular A', sans-serif;
        padding: 0%;
        margin: 0%;
    }

    .row {
        padding: 0%;
        margin: 0%;
    }

    .container {
        max-width: 130rem;
        margin-bottom: 3rem !important;
        padding: 0 1.8rem;
    }

    .header-text {
        margin-top: 12rem;
        color: #374151;
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .horizontal-line {
        background-color: #374151;
        width: 8.8rem;
        margin: 0.8rem auto 5rem auto;
    }

    .image-container {
        gap: 5rem;
    }
    
</style>