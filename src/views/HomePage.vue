<template>
    <div>
        <div class="bg-image"
            style="background-image: url('/prova.jpg'); display:block; background-size: 100%">
            <TopBar />
            <v-img class="mx-auto" src="/logo.png" max-width="20vw" />
            xxx
        </div>

        <div class="bg-image"
            style="background-image: url('/prova.jpg'); display:block; background-size: 100%">
            <TopBar />
            <v-img class="mx-auto" src="/logo.png" max-width="20vw" />
            xxx
        </div>
        aaa
    </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';

export default {
    components: {
        TopBar: TopBar,
    },
    data() {
        return {
            image: 'src/assets/logo.png'
        }
    }
}
</script>
