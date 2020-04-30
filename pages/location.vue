<template>
  <v-layout column align-center>
    <img class="location__image" src="/location.png" alt="location" />
    <h1 class="location__header">Where are you located?</h1>
    <!-- <ais-instant-search-ssr>
      <ais-search-box placeholder="Start typing a location..." />
      <ais-powered-by />
      <ais-stats />
      <ais-hits>
        <ul class="location__list" v-for="(item, i) in items" :key="i">
          <li
            class="location__item"
            @click.stop="setLocation(item.suggestion.latlng)"
          >{{ item.suggestion.value }}</li>
        </ul>
      </ais-hits>
      <ais-pagination />
    </ais-instant-search-ssr>-->
    <div class="location__selected">
      <i class="fas fa-globe-americas"></i>
      <h3 class="location__note">{{` Lat: ${location.lat}, Lng: ${location.lng}`}}</h3>
    </div>
    <nuxt-link to="/home" :disabled="!hasLocation">
      <button :class="['btn--cta', {'btn--disabled': !hasLocation}]">CONTINUE</button>
    </nuxt-link>
  </v-layout>
</template>

<script>
import {
  AisInstantSearchSsr,
  AisHits,
  AisSearchBox,
  AisPoweredBy,
  AisStats,
  AisPagination,
  createInstantSearch
} from "vue-instantsearch";
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

const searchClient = algoliasearch(
  "pl3CEAG0GBNS",
  "e45aa94fadb52f421aa4fc481d90396c"
);

const { instantsearch, rootMixin } = createInstantSearch({
  searchClient,
  indexName: "instant_search"
});

export default {
  middleware: "notAuthenticated",
  // asyncData() {
  //   return instantsearch
  //     .findResultsState({
  //       // find out which parameters to use here using ais-state-results
  //       hitsPerPage: 5
  //     })
  //     .then(() => ({
  //       instantSearchState: instantsearch.getState()
  //     }));
  // },
  // beforeMount() {
  //   instantsearch.hydrate(this.instantSearchState);
  // },
  // mixins: [rootMixin],
  // components: {
  //   AisInstantSearchSsr,
  //   AisHits,
  //   AisSearchBox,
  //   AisPoweredBy,
  //   AisStats,
  //   AisPagination
  // },
  data() {
    return {
      location: {
        lat: null,
        lng: null
      }
    };
  },
  computed: {
    hasLocation() {
      return this.location.lat && this.location.lng;
    }
  },
  methods: {
    setLocation(loc) {
      this.location.lat = loc.lat;
      this.location.lng = loc.lng;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/app";

.location {
  &__image {
    margin-top: 10vh;
    height: 30vh;
    width: auto;
  }

  &__header {
    margin: 5vh 10vw 5vh 10vw;
  }

  &__search-box {
    width: 80vw;
  }

  &__selected {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10vw;
    font-size: 24px;
  }
}

.btn--cta {
  background: $green;
  height: 7vh;
  width: 80vw;
  color: white;
  font-size: 24px;

  .btn--disabled {
    background: $disabled-green;
  }
}
</style>
