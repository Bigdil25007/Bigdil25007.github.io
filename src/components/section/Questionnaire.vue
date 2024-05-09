<script setup>
import { ref } from 'vue';

const nom = ref('');
const email = ref('');
const message = ref('');
const errorMessage = ref('');

const submitForm = async (event) => {
    errorMessage.value = '';
    
    if (!nom.value || !email.value || !message.value) {
        errorMessage.value = "Au moins un champ n'a pas été rempli.";
        return;
    }

    if (!validateEmail(email.value)) {
        errorMessage.value = "L'adresse e-mail n'est pas valide.";
        return;
    }

    try {
        const response = await fetch('api/submit-form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nom: nom.value,
                email: email.value,
                message: message.value,
            }),
        });

        if (response.ok) {
            alert('Merci d\'avoir rempli ce formulaire, je vous recontacterai dans les plus brefs délais');
            window.location.href = window.location.href + '#formulaire';
        } else {
            errorMessage.value = 'Une erreur s\'est produite lors de la soumission du formulaire.';
        }
    } catch (error) {
        errorMessage.value = 'Une erreur s\'est produite lors de la soumission du formulaire.';
    }
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
</script>

<template>
    <section id="formulaire">
        <form @submit.prevent="submitForm" class="FormContact">
            <textarea v-model="nom" placeholder="Nom" maxlength="50"></textarea>
            <textarea v-model="email" placeholder="Adresse e-mail" maxlength="70"></textarea>
            <textarea v-model="message" placeholder="Votre message" maxlength="5000"></textarea>

            <span v-if="errorMessage" id="error">{{ errorMessage }}</span>

            <button type="submit">Me contacter</button>
        </form>
    </section>
</template>