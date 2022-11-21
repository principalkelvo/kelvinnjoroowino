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
                    <form ref="form" @submit.prevent="sendEmail">
                        <label>Name</label>
                        <input type="text" name="user_name" placeholder="Name" class="fadeIn" v-model="form.name"
                            required>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder="E-mail" class="fadeIn"
                            :class="{ 'is-invalid': validEmail }" v-model="form.email" required>
                        <span :style="{ color: 'red' }" v-if="form.error.length"> {{ form.error }} </span>
                        <label>Message</label>
                        <textarea name="message" id="message" cols="21" rows="4" placeholder="Message" class="fadeIn"
                            v-model="form.message" required></textarea>
                        <div class="buttons fadeIn">
                            <button :disabled="isActive" type="submit">{{ isLoading ? "Sending" : "Send" }}</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

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
            isActive: false,
            validEmail: false,
            isLoading: false
        }
    },
    methods: {
        async sendEmail(event) {
            this.isActive = true
            this.isLoading = true
            event.preventDefault()
            const isValid = await this.validateEmail(this.form.email)
            // const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            // const isValid = false
            // console.log("send email", isValid)

            if (isValid) {
                this.form.error = '';
                this.validEmail = false
                console.log("sending email", isValid)
                emailjs.sendForm('service_mvn3n88', 'template_yttdlvj', this.$refs.form, 'Qj_lR13PPkYyF676p')
                    .then((result) => {
                        console.log('SUCCESS!', result.text);
                        this.form.name = ""
                        this.form.email = ""
                        this.form.message = ""
                        console.log("sent email", isValid)
                        alert("Thank you")
                    }, (error) => {
                        console.log('FAILED...', error.text);
                    });
            }
            else {
                this.form.error = 'Invalid Email';
                this.validEmail = true
                console.log(this.form.error, this.validEmail)
            }

            this.isActive = false
            this.isLoading = false


        },

        async validateEmail(email) {
            const API_KEY = "972b54b6cda54461be72830d36ce0909";
            const API_URL = "https://emailvalidation.abstractapi.com/v1/?api_key=" + API_KEY;
            const fullURL = API_URL + "&email=" + email;
            const apiResponse = await fetch(fullURL);
            const data = await apiResponse.json();
            const isValid = data.is_valid_format.value;
            console.log("start here", email)
            console.log(data)
            console.log(data.email, "check email", isValid)
            // return isValid;
            // const isValid = true
            // const deliverability = "UNDELIVERABLE"
            if (data.deliverability === "DELIVERABLE") {
                console.log(data.deliverability, "check email", isValid)
                return isValid;
            }
            else {
                console.log(data.deliverability, "wrong email", isValid)
                return false;
            }

            // return false;
        }

    },
}

</script>

<style scoped>
/* .section .columns{
    align-items: flex-start;
} */
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

form span {
    margin: 0 0 1em;
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