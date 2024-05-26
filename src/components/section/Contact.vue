<script setup>
import { ref } from 'vue';
import Anchor from '@component/utils/Anchor.vue';

const { content } = defineProps({
  content: {
    type: Object,
    required: true
  }
});

const errors = ref(content.errors);
const placeholders = ref(content.placeholders);
const labels = ref(content.labels);

const nom = ref('');
const email = ref('');
const message = ref('');
const errorMessage = ref('');
const sujet = ref('');

const submitForm = async (event) => {
    if (!nom.value || !email.value || !message.value) {
        displayError(errors.value.fieldRequired);
        return;
    }

    if (!validateEmail(email.value)) {
        displayError(errors.value.invalidEmail);
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
                sujet: sujet.value,
                message: message.value,
            }),
        });

        if (response.ok) {
            alert(errors.value.successMessage);
        } else {
            displayError(errors.value.apiError);
        }
    } catch (error) {
        displayError(errors.value.apiError);
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
  <Anchor :id="content.id" height="1rem"/>
  <section>
    <form @submit.prevent="submitForm">
      <div class="input-field">
        <label for="name">{{ labels.name }}<span class="required">*</span></label>
        <input v-model="nom" id="name" type="text" :placeholder="placeholders.name" maxlength="50" required>
        
        <label for="email">{{ labels.email }}<span class="required">*</span></label>
        <input v-model="email" id="email" type="email" :placeholder="placeholders.email" maxlength="70" required>

        <label for="sujet">{{ labels.subject }}</label>
        <input v-model="sujet" id="sujet" type="text" :placeholder="placeholders.subject" maxlength="90">
      </div>
      <div class="send">
        <label for="name">{{ labels.message }}<span class="required">*</span></label>
        <textarea v-model="message" id="message" :placeholder="placeholders.message" :maxlength="content.charCounter" required></textarea>

        <div class="char-counter">{{ message.length }}/{{ content.charCounter }}</div>  

        <span v-if="errorMessage" class="error">{{ errorMessage }}</span>  
        <button type="submit">{{ content.buttonText }}</button>
      </div>
    </form>
  </section>
</template>


<style scoped>
form {
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: rgba(243, 243, 248, 0.604);
    border-radius: 1.25rem;
    padding: 2.5rem 2rem;
}

.input-field {
    display: flex;
    flex-direction: column;
    width: 40%;
}

.send {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
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
        border-width: 0.12rem;
    }

    &::placeholder {
        color: rgb(144, 144, 144);
    }
}

textarea {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 0.2rem;
    height: 10rem;
}

.char-counter {
  align-self: flex-end;
  color: rgb(54, 54, 54);
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

@media (max-width: 900px) {
    form {
        flex-direction: column;

        &>* {
            width: 100%;
        }
    }
}
</style>