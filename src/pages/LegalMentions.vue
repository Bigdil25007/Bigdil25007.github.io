<script setup>
import Header from "@component/Header.vue";
</script>

<template>
  <Header noeffect/>
  <section class="legal-mentions">
    <h1>Mentions légales</h1>
    
    <div class="wrapper">
      <h2>Informations égales</h2>
      <p>
        <ul>
          <li><strong>Nom du site</strong> : "Non établi pour le moment"</li>
          <li><strong>Propriétaire</strong> : Bilal Oulahal</li>
          <li><strong>Adresse</strong> : 2 allée des dauphins, Andrézieux-Bouthéon (42160)</li>
          <li><strong>Téléphone</strong> : 07 83 90 52 63</li>
          <li><strong>Email</strong> : bilaloulahal@gmail.com</li>
        </ul>
      </p>
    </div>
    
    <div class="wrapper">
  <h2>Collecte des Données</h2>
  <p>
    Les seules données collectées sur ce site sont celles renseignées dans le formulaire de contact. Les informations collectées incluent :
    <ul>
      <li>Nom/Prénom</li>
      <li>Adresse email</li>
      <li>Message</li>
    </ul>
    Ces données sont collectées dans le but de pouvoir répondre à vos messages et demandes d'information. Elles ne seront en aucun cas utilisées à des fins commerciales ou transmises à des tiers.
  </p>
    </div>
    
    <div class="wrapper">
      <h2>Protection des Données Personnelles</h2>
      <p>
        Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée, et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant. Vous pouvez exercer ces droits en nous contactant par email à bilaloulahal@gmail.com.
      </p>
    </div>
    
    <div class="wrapper">
      <h2>Utilisation des Cookies</h2>
      <p>
        Ce site n'utilise pas de cookies pour collecter des données personnelles.
      </p>
    </div>
    
    <div class="wrapper">
      <h2>Propriété Intellectuelle</h2>
      <p>
        Tout le contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété de Bilal Oulahal sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de Bilal Oulahal.
      </p>
    </div>
    
    <div class="wrapper">
      <h2>Responsabilité</h2>
      <p>
        Le propriétaire du site met à disposition des utilisateurs des informations et des outils disponibles et vérifiés, mais ne saurait être tenu pour responsable des erreurs ou de l'indisponibilité de certaines informations.
      </p>
    </div>
    
    <div class="wrapper">
      <h2>Contact</h2>
      <p>
        Pour toute question ou demande d'information concernant les mentions légales, vous pouvez me contacter par email à bilaloulahal@gmail.com ou via le formulaire de contact.
      </p>
    </div>
  </section>
</template>

<style scoped>
.legal-mentions {
    margin-top: 13rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper {
  width: 80%; 
  max-width: 1000px; 
  margin: 0 auto;
  box-sizing: border-box;

  * {
    text-align: justify;
  }
}

h1, h2 {
  color: #333;
  font-weight: 200;
  color: rgb(3, 34, 76);
}

h1 {
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
}

h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
</style>