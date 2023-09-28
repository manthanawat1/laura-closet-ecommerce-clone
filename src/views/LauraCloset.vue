<template>
    <v-container class="pa-0" fluid>
        <TopBar />
        <TopMenu />
        <Advertise />
        <SpecialDeal />
        <PopularSection />
        <OwnerBrand />
        <SummerCollection />
        <Footers />
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import TopBar from '../components/Topbar.vue'
import TopMenu from '../components/TopMenu.vue'
import Advertise from '../components/Advertise.vue'
import SpecialDeal from '../components/SpecialDeal.vue'
import PopularSection from '../components/PopularSection.vue'
import OwnerBrand from '../components/OwnerBrand.vue'
import SummerCollection from '../components/SummerCollection.vue'
import Footers from '../components/Footer.vue'

export default Vue.extend({
    components: {
        TopBar,
        TopMenu,
        Advertise,
        SpecialDeal,
        PopularSection,
        OwnerBrand,
        SummerCollection,
        Footers,
    }
})
</script>