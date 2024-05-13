<script setup>
import { ref } from 'vue';
import Anchor from '@component/utils/Anchor.vue';

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
    <Anchor id="contact"/>
    <section>
        <form @submit.prevent="submitForm">
            <input v-model="nom" type="text" placeholder="Nom" maxlength="50" required>
            <input v-model="email" type="email" placeholder="Adresse e-mail" maxlength="70" required>
            <textarea v-model="message" placeholder="Votre message" maxlength="5000" required></textarea>

            <span v-if="errorMessage" id="error">{{ errorMessage }}</span>

            <button type="submit">Me contacter</button>
        </form>
    </section>
</template>

<style scoped>
form {
    margin-top: 10%;
    width: 50%;
    margin: auto;

    &>.FormContact {
        display: flex;
        flex-direction: column;

        & textarea[name="nom"] {
            margin-top: 3%;
            height: 5vh;
            padding: 2%;
            padding-top: 1.5%;
            overflow-y: hidden;
            border-color: #DDDDDD;
            resize: none;
            transition: border-color 0.3s ease-out;

            &:hover {
                border-color: #343434;
            }
        }

        & textarea[name="email"] {
            margin-top: 3%;
            height: 5vh;
            padding: 2%;
            padding-top: 1.5%;
            overflow-y: hidden;
            border-color: #DDDDDD;
            resize: none;
            transition: border-color 0.3s ease-out;

            &:hover {
                border-color: #343434;
            }
        }


        & textarea[name="message"] {
            margin-top: 3%;
            margin-bottom: 3%;
            height: 10vh;
            min-height: 5vh;
            max-height: 30vh;
            max-width: 96%;
            min-width: 96%;
            padding: 2%;
            border-color: #DDDDDD;
            transition: border-color 0.4s ease-out;

            &:hover {
                border-color: #343434;
            }
        }

        &>button {
            height: 4.5vh;
            background-color: #343434;
            color: #efefef;
            font-size: 0.8rem;
            text-transform: uppercase;
            transition: all 0.9s ease-in-out;
            border-color: #343434;
        }

        &>button:hover {
            color: #343434;
            box-shadow: inset -25vw 0 0 0 #efefef, inset 25vw 0 0 0 #efefef;
            border-color: #efefef;
        }

        &>#error {
            justify-self: center;
            color: rgb(220, 18, 18);
        }

    }
}
</style>