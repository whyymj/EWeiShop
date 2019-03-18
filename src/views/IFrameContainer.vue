<template>
    <div class='iframe-container'>
        <iframe :src="url" frameborder="0"></iframe>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: 'https://m.wiki.ewei.shop/help/'
            }
        },
        beforeMount() {
            let url = this.$route.params.url
            if (url == 'help') {
                this.url = 'https://m.wiki.ewei.shop/help/'
            } else if (url == 'shop') {
                this.url = 'https://m.we7shop.com/index.html'
            }
        }
    }
</script>

<style scoped lang='scss'>
    .iframe-container {
        width: 100%;
        height: 100%;
        >iframe {
            width: 100%;
            height: 100%;
        }
    }
</style>