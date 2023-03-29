<template>
    <div style="background-image: url('./prova.jpg');" class="hero-wrap ">
        <TopBar />
        GALLERY
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
        }
    }
}
</script>


<style>
@import url('https://fonts.cdnfonts.com/css/luminari');
@import url('https://fonts.cdnfonts.com/css/eggnog');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/barfiola-free-for-personal-use');
.hero-wrap {
    width: 100%;
    height: 850px;
    position: inherit;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /*background-attachment: fixed;*/
    position: relative;
    z-index: 0;
}
</style>
