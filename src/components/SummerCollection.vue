<template>
    <v-container class="container" fluid>
        <v-row class="image-container">
            <h1 class="header-text">
                SUMMER
                <span>COLLECTIONS</span>
            </h1>
            <v-btn class="shopping-btn" color="#FAFAFA" depressed>
                SHOP NOW
                <v-icon size="24" color="#EB5757" class="ml-3">
                    mdi-arrow-right-thin
                </v-icon>
            </v-btn>
            <v-row class="time-container" align="center">
                <div>
                    <v-row class="time-text" justify="center">
                        07
                    </v-row>
                    <v-row class="unit-text" justify="center">
                        Days
                    </v-row>
                </div>
                <div class="collon-time-text">
                    :
                </div>
                <div>
                    <v-row class="time-text" justify="center">
                        08
                    </v-row>
                    <v-row class="unit-text" justify="center">
                        Hours
                    </v-row>
                </div>
                <div class="collon-time-text">
                    :
                </div>
                <div>
                    <v-row class="time-text" justify="center">
                        04
                    </v-row>
                    <v-row class="unit-text" justify="center">
                        Minutes
                    </v-row>
                </div>
                <div class="collon-time-text">
                    :
                </div>
                <div>
                    <v-row class="time-text" justify="center">
                        05
                    </v-row>
                    <v-row class="unit-text" justify="center">
                        Seconds
                    </v-row>
                </div>
            </v-row>
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
        padding: 16rem 1.8rem;
        margin: 0 auto;
    }
    
    .image-container {
        height: 50rem;
        background-image: url("../assets/summer-collection.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        position: relative;
        padding: 0 4.8rem;
    }

    .header-text {
        color: #0D3F64;
        font-size: 4rem;
        font-weight: 600;
        letter-spacing: -0.4px;
        margin-bottom: 3.2rem;
    }

    .header-text > span {
        color: #DE4F46;
    }

    .shopping-btn {
        color: #EB5757;
        font-size: 1.6rem;
        font-weight: 600;
        letter-spacing: 0.32px;
        text-transform: uppercase;

        padding: 1.2rem 1.6rem !important;
    }

    .time-container {
        position: absolute;
        bottom: 3.4rem;
        left: 4.8rem;
    }

    .time-text {
        color: #FFF;
        font-size: 2.4rem;
        font-weight: 600;
        letter-spacing: -0.24px;
    }

    .unit-text {
        color: #FFF;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: -0.12px;
        margin-top: 0.8rem;
    }

    .collon-time-text {
        color: #9FC9E7;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: -0.24px;
        margin: 0 2.4rem;
    }
    
</style>