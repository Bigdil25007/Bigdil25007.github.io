<template>
  <footer>
    <span>Contactez-moi !</span>
    <div class="barre"></div>
    <ul class="contacts">
      <a href="https://github.com/Bigdil25007" class="icone-github">
        <img src="/icons/github.png?url">
      </a>
      <a href="https://www.linkedin.com/in/bilal-oulahal" class="icone-linkedin">
        <img src="/icons/linkedin.png?url">
      </a>
    </ul>
    <ul class="pages">
      <span>© Copyright 2024 - Bilal Oulahal. Tous droits réservés.</span>
      <div class="wrapper">
        <router-link to="/mentions-legales">Mentions légales</router-link>
        <span>|</span>
        <router-link to="/plan-site">Plan du site</router-link>
      </div>
    </ul>
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

    &>span {
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
    display: flex;
    justify-content: center;
    gap: 10rem;

    img {
        width: 3rem;
        height: auto;
        transition: transform 0.25s ease-in-out;

        &:hover {
            transform: scale(1.1);
            filter: opacity(85%) grayscale(5%);
        }
    }
}

.pages {
    margin-top: 1%;
    padding-top: 0.5%;
    margin-bottom: 0;
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
                opacity: 0.8;
            }
        }
    }
}
</style>