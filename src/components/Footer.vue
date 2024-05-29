<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

import Contact from '@component/section/Contact.vue';
import ChangeLang from '@component/utils/ChangeLang.vue';
import yml from '@content/section/footer.yml';

const router = useRoute();
const content = ref(yml[router.params.lang]);
const path = ref(router.path);

watch(() => router.params.lang, (newLang) => {
  content.value = yml[newLang];
  console.log(content.value.form);
});

watch(() => router.path, (newPath) => {
  path.value = newPath;
});

const props = defineProps({
  disableContact: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <footer>
    <div v-if="!props.disableContact" class="contactSection">
      <span>{{ content.contactMe }}</span>
      <div class="barre" />
      <Contact :content="content.form" />
      <div class="contacts">
        <a v-for="network in content.socialNetworks" :key="network.name" :href="network.url">
          <img :src="network.icon">
        </a>
      </div>
    </div>

    <div class="subfooter">
      <ChangeLang :path="path"/>
      <div class="pages">
        <span>{{ content.copyright }}</span>
        <div class="wrapper">
          <router-link :to="content.mentionsLegales.to">{{ content.mentionsLegales.text }}</router-link>
          <span>|</span>
          <router-link :to="content.planSite.to">{{ content.planSite.text }}</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
span {
    color: white;
    text-align: center;
}

footer {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    background-color: #244057;
}

.contactSection {
    display: flex;
    flex-direction: column;

    & span {
        font-size: 200%;
        margin-top: 1%;
    }    
}

.barre {
    background-color: #F54337;
    width: 45%;
    height: 1vh;
    margin-top: 1%;
    margin-left: auto;
    margin-right: auto;
}

.contacts {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 10rem;

    img {
        width: 3rem;
        height: auto;
        transition: transform 0.25s ease-in-out;
        border: none;

        &:hover {
            transform: scale(1.1);
            filter: opacity(85%) grayscale(5%);
        }
    }
}

.subfooter {
    display: flex;
    flex-direction: column;
    box-shadow: 0px -2px 10px 5px rgba(0, 0, 0, 0.2);

    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 0.5rem;

        a {
            transition: all 0.25s ease-in-out;
            &:hover {
                opacity: 0.7;
            }
        }
    }
}

.pages {
  padding-top: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
</style>