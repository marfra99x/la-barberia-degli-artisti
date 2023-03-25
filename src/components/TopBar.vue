<template>
    <div>
        <v-navigation-drawer v-model="drawer" absolute temporary app>
            <v-list class="pt-4">
                <v-list-item active-class="primary--text">
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item active-class="primary--text">
                    <v-list-item-content>
                        <v-list-item-title>Prezzi</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item active-class="primary--text">
                    <v-list-item-content>
                        <v-list-item-title>Galleria</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item active-class="primary--text">
                    <v-list-item-content>
                        <v-list-item-title>Contatti</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar flat dense color="transparent">
            <v-app-bar-title class="headline">
                <v-img class="mx-auto" style="border-radius: 50%; height: 100px; width: 100px;" src="/logo.png" />
            </v-app-bar-title>
            <v-spacer></v-spacer>
            <v-app-bar-nav-icon class="hidden-md-and-up" style="color: #FFFFFF" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="hidden-sm-and-down mr-10" style="font-family: Hello Hungry, sans-serif;">
                <v-btn plain active-class="primary--text" class="primary--text" style="fontSize: 30px" to="/home">Home</v-btn>
                <v-btn plain active-class="primary--text" class="primary--text" style="fontSize: 30px" to="/price">Prezzi</v-btn>
                <v-btn plain active-class="primary--text" class="primary--text" style="fontSize: 30px" to="/gallery">Galleria</v-btn>
                <v-btn plain active-class="primary--text" class="primary--text" style="fontSize: 30px" to="/contacts">Contatti</v-btn>
            </v-app-bar-title>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    props: {
    },
    data() {
        return {
            drawer: false,
        };
    },
    methods: {
    }
};
</script>

<style>
    @import url('https://fonts.cdnfonts.com/css/eggnog');
@import url('https://fonts.cdnfonts.com/css/hello-hungry');
</style>