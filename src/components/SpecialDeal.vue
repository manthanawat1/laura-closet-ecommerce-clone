<template>
    <v-container class="mx-auto container" fluid>
        <v-row class="header-text" justify="center">
            This Weeks Highlights
        </v-row>
        <v-divider class="horizontal-line"></v-divider>
        <v-row class="card-container">
            <v-col class="each-card each-card--1">
                <b class="header-deal-text text-center">Exclusive<br>Shoes</b>
                <v-sheet class="description-box">
                    <b class="header-description-text">Exclusive Shoes</b>
                    <p class="price-text">PRICE 20% OFF</p>
                    <p class="discount-text">DISCOUNT CODE - VATR3920</p>
                </v-sheet>
            </v-col>
            <v-col class="each-card each-card--2">
                <b class="header-deal-text text-center">Exquisite Styles &<br>Collections</b>
                <v-sheet class="description-box">
                    <b class="header-description-text">Exquisite Styles & Collections</b>
                    <p class="price-text">PRICE 20% OFF</p>
                    <p class="discount-text">DISCOUNT CODE - VATR3920</p>
                </v-sheet>
            </v-col>
            <v-col class="each-card each-card--3">
                <b class="header-deal-text text-center">New Arrivals</b>
                <v-sheet class="description-box">
                    <b class="header-description-text">New Arrivals</b>
                    <p class="price-text">PRICE 20% OFF</p>
                    <p class="discount-text">DISCOUNT CODE - VATR3920</p>
                </v-sheet>
            </v-col>
            <v-col class="each-card each-card--4">
                <b class="header-deal-text text-center">Exclusive<br>Items</b>
                <v-sheet class="description-box">
                    <b class="header-description-text">Exclusive Items</b>
                    <p class="price-text">PRICE 20% OFF</p>
                    <p class="discount-text">DISCOUNT CODE - VATR3920</p>
                </v-sheet>
            </v-col>
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
        color: #374151;
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    .horizontal-line {
        background-color: #374151;
        width: 8.8rem;
        margin: 8px auto;
    }

    .card-container {
        margin-top: 2rem;
        height: calc(100vh - 10rem);
        display: grid;
        gap: 2rem;
        grid-template-columns: repeat(5, 1fr);
    }

    .each-card {
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        position: relative;

        cursor: pointer;
        transition: all .3s;

        opacity: 1;
    }

    .each-card:hover > .header-deal-text {
        opacity: 0;
        transition: opacity 0.3s ease-in-out !important;
    }

    .each-card:hover > .description-box {
        opacity: 1;
        transition: opacity 0.7s ease-in-out;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .each-card--1 {
        grid-column: 1 / 3;
        background-image: url("../assets/special_deal_1.png");
    }

    .each-card--2 {
        grid-column: 3 / 6;
        background-image: url("../assets/special_deal_2.png");
    }

    .each-card--3 {
        grid-row: 2;
        grid-column: 1 / 4;
        background-image: url("../assets/special_deal_3.png");
    }

    .each-card--4 {
        grid-row: 2;
        grid-column: 4 / 6;
        background-image: url("../assets/special_deal_4.png");
    }

    .header-deal-text {
        color: #FAFAFA;
        text-shadow: rgba(0, 0, 0, 0.40);
        font-size: 5.6rem;
        font-weight: 600;
        letter-spacing: 1.12px;
    }

    .description-box {
        position: absolute;
        bottom: 2rem;
        left: 2rem;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        opacity: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.30);
        backdrop-filter: blur(20px);
        padding: 1.2rem;
        color: #FAFAFA;
    }

    .header-description-text {
        font-size: 2.6rem;
        font-weight: 600;
        letter-spacing: 0.36px;
    }

    .price-text {
        margin-top: 1.8rem;
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.72px;
        margin-bottom: 0.8rem;
    }

    .discount-text {
        font-size: 1.6rem;
        font-weight: 400;
        margin: 0;
    }
    
    @media only screen and (max-width: 50em) {
        .card-container {
            grid-template-columns: 1fr;
            height: unset;
        }

        .each-card--1,
        .each-card--2,
        .each-card--3,
        .each-card--4 {
            grid-row: unset !important;
            grid-column: unset !important;
            height: 30rem;
        }
    }
</style>