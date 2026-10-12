<template>
    <!-- contact section -->
    <div class="contact">
        <section class="section" id="contact">
            <div class="columns">
                <div class="column is-6 jumpIn">
                    <div class="title fadeIn">
                        <h1>Get In Touch</h1>
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <div class="column is-6">
                    <form ref="form" @submit.prevent="sendEmail" novalidate>
                        <label for="contact-name">Name</label>
                        <input id="contact-name" type="text" name="user_name" placeholder="Name" class="fadeIn"
                            v-model.trim="form.name" autocomplete="name" maxlength="100" required>
                        <label for="contact-email">Email</label>
                        <input id="contact-email" type="email" name="user_email" placeholder="E-mail" class="fadeIn"
                            :class="{ 'is-invalid': form.error }" :aria-invalid="!!form.error"
                            aria-describedby="contact-email-error" v-model.trim="form.email" autocomplete="email"
                            maxlength="254" required>
                        <span id="contact-email-error" class="error" v-if="form.error"> {{ form.error }} </span>
                        <label for="contact-message">Message</label>
                        <textarea id="contact-message" name="message" cols="21" rows="4" placeholder="Message"
                            class="fadeIn" v-model.trim="form.message" maxlength="5000" required></textarea>
                        <div class="buttons fadeIn">
                            <button :disabled="isLoading" type="submit">{{ isLoading ? "Sending" : "Send" }}</button>
                        </div>
                        <Transition name="status">
                            <p v-if="status" class="status" :class="status.type" role="status">{{ status.text }}</p>
                        </Transition>
                    </form>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

// EmailJS IDs are public by design; lock the key to this site's domain in the EmailJS dashboard
const EMAILJS = {
    serviceId: 'service_mvn3n88',
    templateId: 'template_yttdlvj',
    publicKey: 'Qj_lR13PPkYyF676p',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default {
    name: "Contact",
    data() {
        return {
            form: {
                name: "",
                email: "",
                message: "",
                error: ""
            },
            isLoading: false,
            status: null,
        }
    },
    methods: {
        async sendEmail() {
            this.status = null
            if (!this.form.name || !this.form.message) {
                this.status = { type: 'error', text: 'Please fill in your name and a message.' }
                return
            }
            if (!EMAIL_PATTERN.test(this.form.email)) {
                this.form.error = 'Invalid Email'
                return
            }
            this.form.error = ''

            this.isLoading = true
            try {
                await emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, this.$refs.form, {
                    publicKey: EMAILJS.publicKey,
                    // drop rapid repeat submissions from the same browser
                    limitRate: { id: 'contact', throttle: 10000 },
                })
                this.form.name = ""
                this.form.email = ""
                this.form.message = ""
                this.status = { type: 'success', text: "Thank you! Your message is on its way." }
            } catch (error) {
                this.status = { type: 'error', text: "Sorry, the message couldn't be sent. Please try again in a moment." }
            } finally {
                this.isLoading = false
            }
        },
    },
}

</script>

<style scoped>

.is-invalid {
    border: 2px solid red;
}

.column .title h1 {
    font-size: 3em;
    margin: 0;
}

.column .title h2 {
    font-size: 2em;
    margin-top: 0;
    color: #faaa53;
}

.is-dark-mode-active .column .title h2 {
    color: #364cf3;
}

form input {
    margin: .4em 0 0;
    padding: .5em;
    border: 2px solid #faaa53;
    border-radius: .412em;
}

form .error {
    color: red;
    margin: 0 0 1em;
}

form .status {
    margin-top: 1em;
    font-weight: 700;
}

form .status.success {
    color: #2e8b57;
}

form .status.error {
    color: red;
}

.status-enter-active,
.status-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.status-enter-from,
.status-leave-to {
    opacity: 0;
    transform: translateY(-0.5em);
}

.is-dark-mode-active form input {
    border: 2px solid #364cf3;
}

form textarea {

    padding: .5em;
    border: 2px solid #faaa53;
    border-radius: .412em;
}

.is-dark-mode-active form textarea {
    border: 2px solid #364cf3;
}

form {
    display: flex;
    flex-direction: column;
    width: 80%;
    /* margin: 0 auto; */
}

form label {
    margin: 1em 0 0;
}


@media only screen and (max-width: 769px) {
    form {
        width: 100%;
    }

    .section {
        min-height: calc(100vh - 2.75rem) !important;
    }
}
</style>