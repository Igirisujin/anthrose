<template>
  <div class="home">
    <Header background="background1.jpg" />
    <Navbar />
    <div class="container-fluid bg-foreground-1 p-5">
      <div class="row justify-content-center">
        <div class="d-flex justify-content-around">
          <div class="col-4 align-middle">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="https://via.placeholder.com/700x400.jpg?text=First Slide"
                  alt="First slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://via.placeholder.com/700x400.jpg?text=Second Slide"
                  alt="Second slide">
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="https://via.placeholder.com/700x400.jpg?text=Third Slide"
                  alt="Third slide">
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button"
              data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button"
              data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
          <div class="col-4 text-light p-4 bg-darken">
            <p>Anthro SouthEast(ASE) is an annual convention taking place in
              the scenic city of Chattanooga, TN. 2018 being our debut year,
              ASE’s team is working hard to ensure a first year con experience
              unlike any other. As the team is filled out, ASE will be comprised
              of staff, coordinators, board members, and our con chairs.
            </p>
            <p>Anthro SouthEast’s goal/mission is to create a safe environment
              for convention attendees. While ASE’s prime demographic are those
              of the Anthropomorphic persuasion, ASE welcomes those of other
              fandoms as well.
            </p>
            <p>Anthro SouthEast will have a plethora of events involving dance,
              music, art, writing, costume design, as well as life skill workshops.
              The city of Chattanooga has plenty to offer in addition to ASE’s events,
              including the Tennessee Aquarium, scenic walking/biking paths, city tours,
              water tours, and dozens of chain and local only restaurants to choose from.
            </p>
            
          </div>
        </div>
      </div>
    </div>
    <v-parallax dark height="400" :src="require(`@/assets/background2.jpg`)"></v-parallax>
    <div class="container-fluid bg-foreground-2 p-5">
      <div class="row">
        <div class="d-flex justify-content-around">
          <div class="col-4 bg-darken text-light p-4">
            <p>Tartii is a self-taught artist of 27 years, born and raised in Florida.
              She grew up learning to draw from watching Disney movies on repeat, and
              continued to grow after discovering the online artist community!
            </p>
            <p>After learning about the furry community in 2006 she delved into expanding
              her commission base from just Lion King and fandom art to include the furry
              fandom. Now she almost exclusively does art for anthropormorphics!
            </p>
            <p>Tartii has been drawing since she could pick up a pencil, and only started
              digital art in 2007, after she bought her first tablet: A Wacom Bamboo Fun.
              Now she works full-time as a free-lance illustrator, using Clip Studio Paint
              and a Wacom Cintiq 13HD as tools of her trade.
            </p>
          </div>
          <div class="col-4 d-flex justify-content-center flex-column p-4">
            <div class="text-center text-light">
              <div class="h4 text-light">Guest of Honor</div>
              <div class="display-4 text-bold">Tartii</div>
            </div>
            <img src="@/assets/tartii.webp" class="rounded mx-auto d-block"/>
          </div>

        </div>

      </div>
    </div>
    <v-parallax dark height="400" :src="require(`@/assets/background1.jpg`)"></v-parallax>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue';
  import Header from '@/components/Header.vue';

  export default {
    name: 'home',
    components: {
      Navbar,
      Header
    },
  };

</script>

<style lang="scss">

  .home {
    .container-fluid {
      $border: 0.1rem solid #000;
      border-top: $border;
      border-bottom: $border;
    }
  }

</style>
