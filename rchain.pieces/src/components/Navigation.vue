<template>
    <div>
        <mu-appbar z-depth="0" style="width: 100%; font-weight: bold; padding-left: 20px; background-color: rgba(1,1,1,0); position: absolute; z-index: 11;">
            <img slot="left" width="112" src="logo" />
            <mu-button color="primary"  flat to="/" slot="right">Home</mu-button>
        </mu-appbar>
    </div>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style lang="scss">

</style>
