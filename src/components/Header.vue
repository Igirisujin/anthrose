<template>
    <div class="header">
        <v-parallax dark :src="require(`@/assets/${background}`)" >
            <div class="bg-darken h-100 w-100">
                <b-img src="@/assets/Char1.png" class="character position-absolute h-100 shadow-fit-1"/>
                <v-layout align-center column justify-center class="h-75 title">
                    <h1 class="font-header-1 font-weight-bold pt-5 text-shadow-1">Anthro Southeast:</h1>
                    <h2 class="font-header-2 text-highlight-1 text-shadow-2">The Worlds Within</h2>
                </v-layout>
                <div class="d-flex flex-column flex-md-row w-100 p-2 text-center justify-content-around info position-absolute">
                    <div class="text-shadow-1">Chattanooga, TN</div>
                    <div class="text-shadow-1 font-weight-normal">Oct 17-20, 2019</div>
                    <div class="text-shadow-1">Marriott Downtown</div>
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

@import 'bootstrap/scss/bootstrap.scss';

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
        z-index: 0;
        opacity: 0;
        -webkit-transition: 1s; /* Safari */
        transition: 1s;
    }

    @include media-breakpoint-up(sm) {
        .info {
            font-size: 1.2rem;
        }
        .title {
            h1 {
                font-size: 4rem;
            }
            h2 {
                font-size: 3rem;
            }
        }
    }

    @include media-breakpoint-up(md) {
        .info {
            font-size: 1.4rem;
        }
        img.character {
            opacity: 1;
        }
        .title {
            h1 {
                font-size: 5rem;
            }
            h2 {
                font-size: 4rem;
            }
        }
    }

    @include media-breakpoint-up(lg) {
        .info {
            font-size: 2rem;
        }
        .title {
            h1 {
                font-size: 5rem;
            }
            h2 {
                font-size: 4rem;
            }
        }
    }
}
</style>
