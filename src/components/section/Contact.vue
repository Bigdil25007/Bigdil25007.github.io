<script setup>
import { ref } from 'vue';
import Anchor from '@component/utils/Anchor.vue';

const nom = ref('');
const email = ref('');
const message = ref('');
const errorMessage = ref('');

const submitForm = async (event) => {
    if (!nom.value || !email.value || !message.value) {
        displayError("Au moins un champ n'a pas été rempli.");
        return;
    }

    if (!validateEmail(email.value)) {
        displayError("L'adresse e-mail n'est pas valide.");
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
            displayError('L\'API pour stocker le formulaire ne peut pas être implémenté tant que le site tourne en localhost.');
        }
    } catch (error) {
        displayError('L\'API pour stocker le formulaire ne peut pas être implémenté tant que le site tourne en localhost.');
    }
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const displayError = (message) => {
    errorMessage.value = message;

    setTimeout(() => {
        errorMessage.value = '';
    }, 5000);
};
</script>

<template>
    <Anchor id="contact"/>
    <section>
        <form @submit.prevent="submitForm">
            <label for="name">Nom et prénom<span class="required">*</span></label>
            <input v-model="nom" id="name" type="text" placeholder="Nom" maxlength="50" required>
            
            <label for="name">Email<span class="required">*</span></label>
            <input v-model="email" id="email" type="email" placeholder="Adresse e-mail" maxlength="70" required>
            
            <label for="name">Message<span class="required">*</span></label>
            <textarea v-model="message" id="message" placeholder="Votre message" maxlength="2000" required></textarea>
            <div class="char-counter">{{ message.length }}/2000</div>    

            <span v-if="errorMessage" class="error">{{ errorMessage }}</span>

            <button type="submit">Me contacter</button>
        </form>
    </section>
</template>

<style scoped>
form {
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

input, textarea {
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 0.7rem;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 0.15rem;

    &:focus {
        outline: none;
        border-color: rgb(206, 54, 4);
    }

    &::placeholder {
        color: rgb(144, 144, 144);
    }
}

textarea {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 0.2rem;
}

.char-counter {
  align-self: flex-end;
  color: rgb(82, 81, 81);
}

label {
    font-weight: bold;
    margin: 0.2rem 0;
    align-self: flex-start;
}

.required {
    color: rgb(220, 18, 18);
}


.error {
    justify-self: center;
    color: rgb(220, 18, 18);
    margin-bottom: 0.5rem;
}

button {
    height: 4rem;
    width: 75%;
    font-size: 1.1rem;
    background-color: #343434;
    color: #efefef;
    text-transform: uppercase;
    transition: all 0.8s ease-in-out;
    border-color: #343434;

    &:hover {
        color: #343434;
        box-shadow: inset -30vw 0 0 0 #efefef, inset 30vw 0 0 0 #efefef;
    }
}
</style>