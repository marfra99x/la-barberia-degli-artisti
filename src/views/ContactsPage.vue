<template>
    <div>
        <section class="bg-image" style="background-image: url('/prova.jpg'); display:block; background-size: 100%">
            <TopBar />
            CONTACTS
        </section>
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


<style>@import url('https://fonts.cdnfonts.com/css/luminari');
@import url('https://fonts.cdnfonts.com/css/eggnog');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/barfiola-free-for-personal-use');</style>
