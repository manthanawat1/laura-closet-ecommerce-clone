<template>
    <v-container class="container" fluid>
        <v-row class="footer-container">
            <v-row justify="space-between">
                <v-col cols="12" sm="6" md="5" lg="5">
                    <v-row justify="space-between">
                        <v-col cols="4" sm="6" md="6" lg="auto">
                            <p class="main-footer-list-text">Company Info</p>
                            <ul class="footer-list-text">
                                <li><a>About Laura’s Closet</a></li>
                                <li><a>Social Responsibility</a></li>
                                <li><a>Affiliate</a></li>
                                <li><a>Fashion Blogger</a></li>
                            </ul>
                        </v-col>
                        <v-col cols="4" sm="6" md="6" lg="auto">
                            <p class="main-footer-list-text">Help & Support</p>
                            <ul class="footer-list-text">
                                <li><a>Shipping Info</a></li>
                                <li><a>Returns</a></li>
                                <li><a>How to Order</a></li>
                                <li><a>How to Track</a></li>
                                <li><a>Size Chart</a></li>
                            </ul>
                        </v-col>
                        <v-col cols="4" sm="6" md="6" lg="auto">
                            <p class="main-footer-list-text">Customer Care</p>
                            <ul class="footer-list-text">
                                <li><a>Contact Us</a></li>
                                <li><a>Payment</a></li>
                                <li><a>Bonus Point</a></li>
                                <li><a>Notices</a></li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-col>
                <!-- <v-spacer></v-spacer> -->
                <v-col cols="12" sm="6" md="5" lg="5">
                    <v-row justify="space-between" class="social-container">
                        <v-col cols="auto" sm="auto" md="auto" lg="auto">
                            <p class="main-footer-list-text">Socials</p>
                            <v-row class="social-icon-container">
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/facebook.png"
                                ></v-img>
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/twitter.png"
                                ></v-img>
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/instagram.png"
                                ></v-img>
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/tiktok.png"
                                ></v-img>
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/snapchat.png"
                                ></v-img>
                            </v-row>
                        </v-col>
                        <v-col cols="auto" sm="auto" md="auto" lg="auto">
                            <p class="main-footer-list-text">Platforms</p>
                            <v-row class="social-icon-container">
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/android.png"
                                ></v-img>
                                <v-img
                                    contain
                                    max-width="3.2rem"
                                    src="../assets/footer/apple.png"
                                ></v-img>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-row class="sign-up-container">
                        <p class="main-footer-list-text">SIGN UP FOR Laura’s Closet  STYLE NEWS</p>
                        <v-row>
                            <v-col>
                                <v-text-field
                                    placeholder="Your email"
                                    hide-details
                                    height="4.4rem"
                                    class="pr-2 sign-up-input-text"
                                    outlined
                                    color="#1F2937"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="auto" sm="auto" md="auto" lg="auto">
                                <v-btn depressed color="#1F2937" height="4.4rem" class="subscibe-btn">
                                    subcribe
                                </v-btn>
                            </v-col>
                        </v-row>
                        <v-row class="condition-text">
                            By clicking the SUBSCRIBE button, you are agreeing to our&nbsp;<span>Privacy & Cookie Policy</span>
                        </v-row>
                    </v-row>
                </v-col>
            </v-row>
            <v-row class="copy-right-container">
                <v-col cols="12" sm="7" md="5" lg="5">
                    <p class="copy-right-text">&copy;2010-2022 Laura’s Closet All Rights Reserved</p>
                    <v-row class="copy-right-text-list" align="center">
                        <span class="copy-right-list">
                            <a>Privacy Center</a>
                        </span>
                        <span class="vertical-line">|</span>
                        <span class="copy-right-list">
                            <a>Privacy Center</a>
                        </span>
                        <span class="vertical-line">|</span>
                        <span class="copy-right-list">
                            <a>Manage Cookies</a>
                        </span>
                    </v-row>
                    <v-row class="copy-right-list" align="center">
                        <span class="copy-right-list">
                            <a>Terms & Conditions</a>
                        </span>
                        <span class="vertical-line">|</span>
                        <span class="copy-right-list">
                            <a>Copyright Notice</a>
                        </span>
                        <span class="vertical-line">|</span>
                        <span class="copy-right-list">
                            <a>Imprint</a>
                        </span>
                    </v-row>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="5" md="5" lg="5" class="accept-card-container">
                    <p class="main-footer-list-text">We accept</p>
                    <v-row class="credit-cards-container">
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/MasterCard.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/PayPal.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/eBay.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/GooglePay.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/monobank.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/Discover.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/Western Union.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/Payoneer.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/ApplePay.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/AmericanExpress.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/Amazon.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/AliPay.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/BitPay.png"
                        ></v-img>
                        <v-img
                            max-width="5.3rem"
                            src="../assets/footer/creadit-cards/Bitcoin.png"
                        ></v-img>
                    </v-row>
                </v-col>
            </v-row>
        </v-row>
    </v-container>
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

    .container {
        padding: 6.2rem 0;
        background-color: #F9FAFB;
    }
    
    .footer-container {
        margin: 0 auto;
        max-width: 130rem;
        padding: 0 1.8rem;
    }

    .main-footer-list-text {
        color: #1F2937;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        margin-bottom: 1.6rem;
    }

    .footer-list-text {
        padding: 0;
    }

    .footer-list-text > li {
        list-style: none;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.7px;
        margin-top: 0.8rem;
    }

    .footer-list-text > li > a {
        color: #6B7280;
        cursor: pointer;
    }

    .footer-list-text > li > a:hover {
        color: #1F2937;
        transition: color .4s;
    }

    .social-icon-container {
        gap: 1.6rem;
    }

    .sign-up-container {
        margin-top: 4rem;
        flex-direction: column;
    }

    .sign-up-input-text {
        color: #1F2937;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.7px;
    }

    .sign-up-input-text >>> .v-input__control > .v-input__slot {
        min-height: auto;
        padding: 1.3rem 1.3rem !important;
        line-height: 2.5rem;
    }

    .subscibe-btn {
        color: #FFF;
        font-size: 1.4rem;
        font-weight: 600;
        letter-spacing: 0.7px;
        text-transform: uppercase;
        padding: 1.3rem 3rem !important;
    }

    .condition-text {
        margin-top: 1.8rem;
        color: #6B7280;
        font-size: 1.2rem;
        font-weight: 400;
        letter-spacing: 0.6px;
    }

    .condition-text > span {
        color: #0F4FCE;
        cursor: pointer;
        text-decoration: underline;
    }

    .copy-right-container {
        margin-top: 6.4rem;
    }

    .copy-right-text {
        color: #6B7280;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.7px;
        margin-bottom: 2.4rem;
    }

    .copy-right-text-list {
        margin-bottom: 1.6rem;
    }

    .copy-right-list > a {
        color: #6B7280;
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: 0.7px;
    }

    .copy-right-list > a:hover {
        color: #1F2937;
        text-decoration: underline;
        transform: all 0.4s;
    }

    .vertical-line {
        height: 100%;
        margin: 0 0.8rem;
        color: #E5E7EB;
        font-size: 2rem;
    }

    .credit-cards-container {
        gap: 0.8rem;
    }

    @media only screen and (max-width: 37.5em) {
        .social-container,
        .sign-up-container,
        .accept-card-container {
            margin-top: 6.4rem;
        }
    }
</style>