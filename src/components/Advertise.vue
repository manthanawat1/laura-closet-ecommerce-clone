<template>
    <v-container fluid class="container">
        <v-row class="card-container">
            <v-col cols="12" sm="12" md="7" lg="7" class="sub-card-container-1 d-flex justify-center justify-md-start">
                <v-sheet class="text-container" color="#1F2937" width="auto">
                    <h1 class="header-text">Get up to 30% off</h1>
                    <p class="sub-header-text mt-4">New Arrivals</p>
                    <p class="description-text mt-6">Introducing our latest collection of products</p>
                    <v-btn
                        depressed
                        :ripple="false"
                        outlined
                        color="#FAFAFA"
                        class="btn mt-14"
                    >
                        Place your order
                        <v-icon size="24" class="ml-3">
                            mdi-arrow-right-thin
                        </v-icon>
                    </v-btn>
                </v-sheet>
            </v-col>
            <v-col md="5" lg="5" class="sub-card-container-2">
                <img
                    src="../assets/model_1.png"
                    class="model-image"
                />
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
        margin-bottom: 9rem;
        height: calc(100vh - 240px);
        background: linear-gradient(90deg, #1C2333 57%, #F7C59F 43%);
    }

    .card-container {
        color: #fff;
        max-width: 130rem;
        margin: 0 auto;
        padding: 0 1.8rem;
        height: 100%;

        position: relative;
    }

    .sub-card-container-1 {
        align-self: center;
    }

    .sub-card-container-2 {
        align-self: flex-end;

        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        overflow: hidden;

        height: calc(100vh - 240px);
    }

    .sub-card-container-2::after {
        content: "";
        width: 30rem;
        height: 30rem;
        border-radius: 100%;
        background-color: #fff;

        position: absolute;
        top: 50%;
        right: 0%;
        transform: translate(-30%, -50%);
    }

    .text-container {
        justify-self: start;
        background-color: #1F2937;
        padding: 4rem;
    }

    
    .header-text {
        color: #FAFAFA;
        font-size: 5.6rem;
        font-weight: 600;
        display: block;
    }
    
    .sub-header-text {
        color: #F7C59F;
        font-size: 5.6rem;
        font-weight: 600;
    }
    
    .description-text {
        color: #F3F4F6;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: 0.36px;
    }

    .btn {
        color: #FAFAFA;
        padding: 0.8rem 1.6rem !important;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: 0.032px;
        text-transform: uppercase;
    }

    .model-image {
        z-index: 1;
        height: 85%;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    /*************** 960 px ***************/
    @media only screen and (max-width: 60em) {
        .container {
            height: unset;
            padding: 2.4rem 0;
            background: repeating-linear-gradient(
            135deg,
            #192030,
            #192030 30px,
            #1C2333 1px,
            #1C2333 80px
            );
        }

        .sub-card-container-2 {
            display: none;
        }
    }

    /*************** 450 px ***************/
    @media only screen and (max-width: 28.125em) {
        .header-text {
            font-size: 3.8rem;
        }
        
        .sub-header-text {
            font-size: 3.8rem;
        }
    }

</style>