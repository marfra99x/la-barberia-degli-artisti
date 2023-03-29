<template>
    <div style="background-image: url('./prova.jpg');" class="hero-wrap ">
        <TopBar />

        <v-layout row justify-end align-end wrap class="mt-4 pt-2">
            <v-flex justify-end align-end xs12 sm12 md12 lg4 l4 class="pt-4">
                <v-img class="mx-auto" src="./logo.png" max-width="20vw" />
                <h2>
                    <div class="text-center primary--text">Maggiore Barber</div>
                    <div class="text-center white--text">Maggiore Barber</div>
                </h2>
            </v-flex>
        </v-layout>
        <div>
            <v-layout row justify-start align-start wrap>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#FF0000;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="./logo.png" max-width="20vw" />
                    <h2>
                        <div class="text-center primary--text">Maggiore Barber</div>
                    </h2>
                    <h3>
                        <div class="text-center primary--text"
                            style="font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#0000FF;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="./logo.png" max-width="20vw" />
                    <h2>
                        <div class="text-center primary--text">Maggiore Barber</div>
                    </h2>
                    <h3>
                        <div class="text-center primary--text"
                            style="font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#FF0000;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="./logo.png" max-width="20vw" />
                    <h2>
                        <div class="text-center primary--text">Maggiore Barber</div>
                    </h2>
                    <h3>
                        <div class="text-center primary--text"
                            style="font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
                <v-flex justify-end align-end xs12 sm12 md12 lg3 l3 class="pt-4" style="background:#0000FF;color:white">
                    <v-img class="mx-auto" style="border-radius: 50%;" src="./logo.png" max-width="20vw" />
                    <h2>
                        <div class="text-center primary--text">Maggiore Barber</div>
                    </h2>
                    <h3>
                        <div class="text-center primary--text"
                            style="font-family: 'Barfiola FREE FOR PERSONAL USE', sans-serif;">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.</div>
                    </h3>
                </v-flex>
            </v-layout>

        </div>
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
            image: 'src/assets./logo.png'
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
