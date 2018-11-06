<template>
  <div id="app" class="bg-background-1">
    <router-view/>
  </div>
</template>

<style lang="scss">

$color-background-1: #021921;
$color-background-2: #143038;
$color-highlight-1: #daf7c8;
$color-highlight-2: #ADD1DD;
$color-foreground-1: #6EA1A5;

@import url('https://fonts.googleapis.com/css?family=Acme|Lato|Sigmar+One');

#app {
  font-family: 'Lato', sans-serif;
}

.v-parallax__content {
  padding: 0 !important;
}

.font-header-1 {
  font-family: 'Acme', sans-serif;
}

.font-header-2 {
  font-family: 'Sigmar One', cursive;
}

.text-background-1 {
  color: $color-background-1
}

.text-background-2 {
  color: $color-background-2
}

.text-highlight-1 {
  color: $color-highlight-1
}

.text-highlight-2 {
  color: $color-highlight-2
}

.text-foreground-1 {
  color: $color-foreground-1
}

.bg-background-1 {
  background-color: $color-background-1;
}

.bg-background-2 {
  background-color: $color-background-2;
}

.bg-foreground-1 {
  background-color: $color-highlight-1;
}

.bg-highlight-1 {
  background-color: $color-highlight-2;
}

.bg-highlight-2 {
  background-color: $color-foreground-1;
}

.text-shadow-1 {
  text-shadow: 0 .25rem .5rem rgba(0,0,0,.3)!important
}

.text-shadow-2 {
  text-shadow: 0 .5rem 1rem rgba(0,0,0,.5)!important;
}

.text-shadow-3 {
  text-shadow: 0 1rem 3rem rgba(0,0,0,.7)!important
}

// Shadow for images with transparency
.shadow-fit-1 {
  $shadow: drop-shadow(.5rem .5rem 4rem rgba(0,0,0,1));
  -webkit-filter: $shadow;
  filter: $shadow;
  -ms-filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
  filter: "progid:DXImageTransform.Microsoft.Dropshadow(OffX=12, OffY=12, Color='#444')";
}

.bg-darken {
  background-color: rgba($color: #000000, $alpha: 0.2);
}

</style>
