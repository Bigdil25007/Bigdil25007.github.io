<script setup>
const props = defineProps({
    imageUrl: {
        type: String,
        default: ''
    },
    date: {
        type: String,
        required: true
    },
    paragraph: {
        type: String,
        required: true
    }
});
</script>

<template>
  <li :class="$attrs.class">
    <div>
      <time>{{ date }}</time> 
      <p>{{ paragraph }}</p>
      <img :src="imageUrl" alt="">
    </div>
  </li>
</template>

<style scoped>
li {
  position: relative;
  width: 4px;
  margin: 0 auto;
  padding-top: 50px;
  background: #82828262;
}


li::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: inherit;
  z-index: 1;
}

li div {
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 0;
  width: 400px;
  padding: 15px;
  background: #f45b69;
}

li div::before {
  content: "";
  position: absolute;
  bottom: 7px;
  width: 0;
  height: 0;
  border-style: solid;
}

li:nth-child(odd) div {
  left: 45px;

  &:before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #f45b69 transparent transparent;
  }
}

li:nth-child(even) div {
  left: -439px;

  &:before {
      right: -15px;
      border-width: 8px 0 8px 16px;
      border-color: transparent transparent transparent #f45b69;
  }
}

time {
  display: block;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}

img {
  width: 60%;
  height: auto;
  margin-top: 8%;
  align-self: center;
}


/* EFFECTS
–––––––––––––––––––––––––––––––––––––––––––––––––– */

li::after {
  transition: all 0.5s ease-in-out;
}

li.in-view::after {
  background: #f45b69;
}

li div {
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

li:nth-child(odd) div {
  transform: translate3d(200px, 0, 0);
}

li:nth-child(even) div {
  transform: translate3d(-200px, 0, 0);
}

li.in-view div {
  transform: none;
  visibility: visible;
  opacity: 1;
}


/* GENERAL MEDIA QUERIES
–––––––––––––––––––––––––––––––––––––––––––––––––– */

@media screen and (max-width: 900px) {
  li div {
    width: 250px;
  }
  li:nth-child(even) div {
    left: -289px;
    /*250+45-6*/
  }
}

@media screen and (max-width: 600px) {
  li {
    margin-left: 20px;
  }
  li div {
    width: calc(100vw - 91px);
  }
  li:nth-child(even) div {
    left: 45px;
  }
  li:nth-child(even) div::before {
    left: -15px;
    border-width: 8px 16px 8px 0;
    border-color: transparent #f45b69 transparent transparent;
  }
}
</style>
