<template>
    <div style="background-image: url('./prova.jpg');" class="hero-wrap ">
        <TopBar />
        <v-layout row justify-center align-center wrap class="mt-4 pt-2">
            <v-flex justify-center align-center xs12 sm12 md12 lg8 l8 class="pt-4">
                <v-expansion-panels accordion multiple>
                    <v-expansion-panel v-for="item in items" :key="item.title">
                        <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
                        <v-expansion-panel-content v-for="content in item.content" :key="content.service">
                            <v-layout row justify-center align-center wrap>
                                <v-flex justify-start align-start xs12 sm12 md12 lg10 l10>
                                    <h3 style="display: inline;">
                                        {{ content.service }}
                                    </h3>
                                    <h4
                                        style="display: inline; font-weight: normal; font-family: 'Auralyess Free Trial', sans-serif;">
                                        {{ content.description }}
                                    </h4>
                                </v-flex>
                                <v-flex justify-end align-end xs12 sm12 md12 lg2 l2>
                                    {{ content.price }}
                                </v-flex>
                            </v-layout>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
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
            image: 'src/assets./logo.png',
            items: [
                {
                    title: 'Title 1',
                    content: [
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        }
                    ]
                },
                {
                    title: 'Title 2',
                    content: [
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        }
                    ]
                },
                {
                    title: 'Title 3',
                    content: [
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                        {
                            service: 'Service',
                            price: '5€',
                            description: 'Description',
                        },
                    ]
                }
            ]
        }
    }
}
</script>


<style>
@import url('https://fonts.cdnfonts.com/css/luminari');
@import url('https://fonts.cdnfonts.com/css/eggnog');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/barfiola-free-for-personal-use');
@import url('https://fonts.cdnfonts.com/css/auralyess-free-trial');

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
