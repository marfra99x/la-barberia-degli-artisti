<template>
    <div style="background-image: url('./prova.jpg');" class="hero-wrap ">
        <TopBar />

        <v-layout row justify-end align-end wrap class="mt-4 pt-2">
            <v-flex justify-end align-end xs12 sm12 md12 lg4 l4 class="pt-4">
                <v-img class="mx-auto" src="/logo.png" width="50%"/>
                <h2>
                    <div class="pt-2 mt-2  text-center primary--text">Maggiore Barber</div>
                    <div class="text-center white--text">Chi siamo???</div>
                </h2>
            </v-flex>
        </v-layout>
        <div>
            <v-layout row justify-start align-start wrap>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#B1A296;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="/haircut8.jpg" max-width="100vw" max-height="100vw"/>
                    <h2>
                        <div class="pt-2 mt-2 text-center primary--text">Taglio</div>
                    </h2>
                    <h3>
                        <div class="mr-4 ml-4 text--center primary--text"
                            style="text-align: center; font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#5D5C61;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="/haircut4.jpg" max-width="100vw" max-height="100vw"/>
                    <h2>
                        <div class="pt-2 mt-2 text-center primary--text">Barba</div>
                    </h2>
                    <h3>
                        <div class="mr-4 ml-4 text--center primary--text"
                            style="text-align: center; font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#B1A296;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%; object-fit: contain;" src="/haircut1.jpg"  max-width="100vw" max-height="100vw"/>
                    <h2>
                        <div class="pt-2 mt-2  text-center primary--text">Hair Tattoo</div>
                    </h2>
                    <h3>
                        <div class="mr-4 ml-4 text--center primary--text"
                            style="text-align: center; font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#5D5C61;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="/haircut6.jpg" max-width="100vw" max-height="100vw"/>
                    <h2>
                        <div class="pt-2 mt-2  text-center primary--text">TODO</div>
                    </h2>
                    <h3>
                        <div class="mr-4 ml-4 text--center primary--text"
                            style="text-align: center; font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
            </v-layout>
        </div>
        <v-layout row justify-center align-center wrap>
            <v-flex justify-center align-center xs12 sm12 md12 lg4 l4 >
                <v-img class="mx-auto" src="/haircut11.jpg" max-width="100%"/>
                <h2>
                    <div class="pt-2 mt-2  text-center primary--text">Maggiore Barber</div>
                    <div class="text-center white--text">Chi siamo???</div>
                </h2>
            </v-flex>
            <v-flex justify-center align-center xs12 sm12 md12 lg6 l6>
                <div>Chi sono</div>
                <div>Desc</div>
                <div>Desc</div>
                <div>Desc</div>
            </v-flex>
        </v-layout>
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
