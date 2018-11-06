<template>
    <div class="header">
        <v-parallax dark height="700" :src="require(`@/assets/${background}`)" >
            <div class="bg-darken h-100 w-100">
                <v-layout align-center column justify-center class="h-75">
                    <b-img src="@/assets/Char1.png" class="character position-absolute h-100 shadow-fit-1"/>
                    <h1 class="display-1 font-header-1 font-weight-bold pt-5 text-shadow-1">Anthro Southeast:</h1>
                    <h2 class="display-4 font-header-2 text-highlight-1 text-shadow-2">The Worlds Within</h2>
                </v-layout>
                <div class="d-flex w-100 p-2 text-center justify-content-around info position-absolute">
                    <div class="display-4 text-shadow-1">Chattanooga, TN</div>
                    <div class="display-4 text-shadow-1 font-weight-normal">Oct 17-20, 2019</div>
                    <div class="display-4 text-shadow-1">Marriott Downtown</div>
                </div>
            </div>
        </v-parallax>
    </div>
</template>

<script>

export default {
  name: 'Header',
  props: [
      'background'
  ]
};

</script>

<style lang="scss">
.header {

    h1, h2 {
        z-index: 100;
    }

    .info {
        bottom: 0;
        background-color: rgba(0,0,0,0.2);
    }

    img.character {
        right: 0;
        bottom: -5rem;
        z-index: 0
    }
}
</style>
