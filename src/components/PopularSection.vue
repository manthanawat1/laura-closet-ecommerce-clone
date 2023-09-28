<template>
    <v-container class="mx-auto container" fluid>
        <v-row class="header-text" align="center" justify="center">
            Popular this week
        </v-row>
        <v-divider class="horizontal-line"></v-divider>
        <v-row class="all-product-container" align="center">
            <v-col>
                <figure class="product-image-container">
                    <img
                        src="../assets/popular-section/image_1.png"
                        class="product-image"
                    />
                </figure>
                <p class="name-product">Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <v-row align="center" justify="space-between">
                    <v-row>
                        <span class="sale-price-text">&#36;120.23</span>
                        <span class="ml-4 real-price-text">&#36;120.23</span>
                    </v-row>
                    <v-btn text :ripple="false" class="add-cart-button">
                        <v-icon size="16" class="plus-icon">mdi-plus</v-icon>
                        <v-icon size="24" class="cart-icon">mdi-cart-plus</v-icon>
                        <p class="add-cart-btn-text">Add to Basket</p> 
                    </v-btn>
                </v-row>
            </v-col>
            <v-col>
                <figure class="product-image-container">
                    <img
                        src="../assets/popular-section/image_2.png"
                        class="product-image"
                    />
                </figure>
                <p class="name-product">Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <v-row align="center" justify="space-between">
                    <v-row>
                        <span class="sale-price-text">&#36;90.00</span>
                        <span class="ml-4 real-price-text">&#36;100.00</span>
                    </v-row>
                    <v-btn text :ripple="false" class="add-cart-button">
                        <v-icon size="16" class="plus-icon">mdi-plus</v-icon>
                        <v-icon size="24" class="cart-icon">mdi-cart-plus</v-icon>
                        <p class="add-cart-btn-text">Add to Basket</p> 
                    </v-btn>
                </v-row>
            </v-col>
            <v-col>
                <figure class="product-image-container">
                    <img
                        src="../assets/popular-section/image_3.png"
                        class="product-image"
                    />
                </figure>
                <p class="name-product">Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse</p>
                <v-row align="center" justify="space-between">
                    <v-row>
                        <span class="sale-price-text">&#36;140.24</span>
                        <span class="ml-4 real-price-text">&#36;150.11</span>
                    </v-row>
                    <v-btn text :ripple="false" class="add-cart-button">
                        <v-icon size="16" class="plus-icon">mdi-plus</v-icon>
                        <v-icon size="24" class="cart-icon">mdi-cart-plus</v-icon>
                        <p class="add-cart-btn-text">Add to Basket</p> 
                    </v-btn>
                </v-row>
            </v-col>
            <v-col>
                <figure class="product-image-container">
                    <img
                        src="../assets/popular-section/image_4.png"
                        class="product-image"
                    />
                </figure>
                <p class="name-product">
                    Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse
                </p>
                <v-row align="center" justify="space-between">
                    <v-row>
                        <span class="sale-price-text">&#36;105.23</span>
                        <span class="ml-4 real-price-text">&#36;120.23</span>
                    </v-row>
                    <v-btn text :ripple="false" class="add-cart-button">
                        <v-icon size="16" class="plus-icon">mdi-plus</v-icon>
                        <v-icon size="24" class="cart-icon">mdi-cart-plus</v-icon>
                        <p class="add-cart-btn-text">Add to Basket</p> 
                    </v-btn>
                </v-row>
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
        margin-top: 9rem;
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

    .all-product-container {
        display: grid;
        gap: 3rem;
        grid-template-columns: repeat(4, 1fr);
    }

    .product-image-container {
        overflow: hidden;
    }

    .product-image {
        width: 100%;
        object-fit: cover;
        transition: all 0.4s;
    }
    
    .product-image:hover {
        transition: all 0.4s;
        transform: scale(1.1);
    }

    .name-product {
        margin-top: 0.8rem;
        color: #374151;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2.2rem;
        letter-spacing: 0.28px;
    }

    .sale-price-text {
        color: #374151;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .real-price-text {
        color: #9CA3AF;
        font-size: 1.6rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration: line-through;
    }

    .add-cart-button {
        background-color: transparent !important;
        box-shadow: none;
        color: #374151;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.028rem;
        min-width: 0 !important;
        padding: 0 !important;
    }

    .add-cart-button:hover {
        color: #9CA3AF;
        transition: all 0.4s ease-in;
    }

    .add-cart-button::before {
        opacity: 0 !important;
    }

    .cart-icon {
        display: none;
    }

    .add-cart-btn-text {
        margin-bottom: 0;
    }

    /******** 1200px ********/
    @media only screen and (max-width: 75em) {
        .add-cart-btn-text {
            display: none;
        }
    }

    /******** 1200px ********/
    @media only screen and (max-width: 75em) {
        .plus-icon {
            display: none;
        }

        .cart-icon {
            display: block;
        }
    }

    /******** 750px ********/
    @media only screen and (max-width: 46.875em) {
        .all-product-container {
            gap: 5rem;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /******** 450px ********/
    @media only screen and (max-width: 28.125em) {
        .all-product-container {
            grid-template-columns: 1fr;
        }

        .name-product {
            font-size: 2rem;
            line-height: 3rem;
        }

        .sale-price-text,
        .real-price-text {
            font-size: 2.2rem;
        }

        .add-cart-button {
            font-size: 2rem;
        }

        .plus-icon {
            display: block;
        }

        .cart-icon {
            display: none;
        }

        .add-cart-btn-text {
            display: block;
        }
    }
    
</style>