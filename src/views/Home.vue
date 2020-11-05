<template>
    <div>
        <px-assets-table v-bind:assets="assets" />
        <px-input></px-input>
    </div>
</template>

<script>
import PxAssetsTable from '@/components/PxAssetsTable'
import PxInput from '@/components/PxInput'
import api from '@/api'

export default {
    name: 'Home',
    components: { PxAssetsTable, PxInput },
    data() {
        return {
            assets: []
        }
    },

    created() {
        api.getAssets().then(data => (this.assets = data))
    }
}
</script>
