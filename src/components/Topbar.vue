<template>
    <v-card
        flat
        class="card-container"
    >
        <v-toolbar 
            height="90"
            flat
            color="#FAFAFA"
        >   
            <v-toolbar-title class="logo-title">
                Laura’s Closet
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field
                prepend-inner-icon="mdi-magnify"
                placeholder="Search for an Item"
                hide-details
                color="#1F2937"
                class="input-text"
            ></v-text-field>
            <v-spacer></v-spacer>
            <ul class="main-router-list router-for-desktop">
                <li>
                    <a href="#">Store</a>
                </li>
                <li>
                    <a href="#">Account</a>
                </li>
                <li>
                    <a href="#">Wish List</a>
                </li>
                <li>
                    <a href="#">Basket
                        <v-icon size="22" class="ml-2">
                            mdi-cart-heart
                        </v-icon>
                    </a>
                </li>
            </ul>
            <v-menu offset-y transition="scroll-y-transition" content-class="menu-card">
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" color="#374151" class="router-for-mobile">
                        <v-icon size="32">mdi-menu</v-icon>
                    </v-btn>
                </template>
                <v-list class="pa-0" width="20rem">
                    <v-list-item dense :ripple="false" class="list-item-menu-text" @click="">
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="list-menu-text">Store</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item dense :ripple="false" class="list-item-menu-text" @click="">
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="list-menu-text">Account</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item dense :ripple="false" class="list-item-menu-text" @click="">
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="list-menu-text">Wish List</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item dense :ripple="false" class="list-item-menu-text" @click="">
                        <v-list-item-content class="py-0">
                            <v-list-item-title class="list-menu-text">Basket</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list> 
            </v-menu>
        </v-toolbar>
    </v-card>
</template>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/euclid-circular-a');

    * {
        box-sizing: border-box;
        font-family: 'Euclid Circular A', sans-serif;
        padding: 0;
        margin: 0;
    }

    .row {
        padding: 0%;
        margin: 0%;
        width: 100%;
    }

    .card-container {
        position: sticky;
        top: 0;
        background-color: #FAFAFA;
        z-index: 2;
    }

    .toolbar >>> .v-toolbar__content {
        max-width: 130rem !important;
        margin: 0 auto;
        padding: 0 1.8rem;
        justify-content: space-between;
    }

    .input-text {
        flex: 0 1 28rem !important;
    }

    .logo-title {
        color: #374151;
        font-size: 2.4rem;
        font-weight: 400;
        letter-spacing: 0.48px;
    }

    .main-router-list {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 3.2rem;
    }

    .main-router-list > li > a {
        text-decoration: none;
        color: #6B7280;
        font-size: 1.6rem;
        font-weight: 400;
        letter-spacing: 0.32px;
        cursor: pointer;
    }

    .main-router-list > li > a:hover,
    .main-router-list > li > a > i:hover {
        color: #000;
        transition: all 0.3 ease-in;
    }

    .menu-card {
        border-radius: 8px;
    }

    .router-for-mobile {
        display: none;
    }

    .list-item-menu-text:hover .list-menu-text {
        color: #000;
        transition: all 0.3 ease-in;
    }

    .list-menu-text {
        color: #6B7280;
        font-size: 1.6rem !important;
        font-weight: 400;
        line-height: 2rem;
        padding: 0 2rem;
    }

    /*************** 900 px ***************/
    @media only screen and (max-width: 56.25em) {
        .router-for-desktop {
            display: none;
        }

        .router-for-mobile {
            display: block;
        }
    }
    
    /*************** 600 px ***************/
    @media only screen and (max-width: 37.5em) {
        .input-text {
            flex: 0 1 18rem !important;
        }
    }
</style>