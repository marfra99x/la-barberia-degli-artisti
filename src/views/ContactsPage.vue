<template>
    <div style="background-image: url('./prova.jpg');" class="hero-wrap ">
        <TopBar />
        <v-layout row justify-start align-start wrap class="mt-4 pt-2">
            <v-layout column justify-center align-center wrap class="mt-4 pt-2">
                <v-flex justify-center align-center xs12 sm12 md12 lg2 l2 class="pt-4">
                    <div class="primary--text">
                        Contatti
                    </div>
                    <div class="primary--text">
                        <a class="primary--text" href="tel:+39-333-333-3333">Chiama ora</a>
                    </div>
                    <div class="primary--text">
                        333 33 33 333
                    </div>
                </v-flex>
            </v-layout>
            <v-layout column justify-center align-center wrap class="mt-4 pt-2">
                <v-flex justify-center align-center xs12 sm12 md12 lg2 l2 class="pt-4">
                    <div class="primary--text">
                        Indirizzo
                    </div>
                    <div class="primary--text">
                        Via
                    </div>
                    <div class="primary--text">
                        CAP
                    </div>
                </v-flex>
            </v-layout>
            <v-layout column justify-center align-center wrap class="mt-4 pt-2">
                <v-flex justify-center align-center xs12 sm12 md12 lg2 l2 class="pt-4">
                    <span class="primary--text">
                        Orari Apertura:
                        <ul>
                            <li>Lunedì: Chiuso</li>
                            <li>Martedì: 08:30–20:00</li>
                            <li>Mercoledì: 08:30–20:00</li>
                            <li>Giovedì: 8:30–20:00</li>
                            <li>Venerdì: 8:30–20:00</li>
                            <li>Sabato: 8:30–20:00</li>
                            <li>Domenica: Chiuso</li>
                        </ul>
                    </span>
                </v-flex>
            </v-layout>
        </v-layout>




        <v-layout row justify-center align-center wrap class="mt-4 pt-2">
            <v-flex justify-center align-center xs12 sm12 md12 lg4 l4 class="pt-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.1118908207145!2d15.053324415732433!3d37.48168587981392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313e312b1dec30b%3A0x47415f504bcad4d8!2sLa%20Barberia%20degli%20artisti!5e0!3m2!1sit!2sit!4v1680106676074!5m2!1sit!2sit"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

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
