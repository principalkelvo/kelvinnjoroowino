<template>
 <div class="contact" id="contact">
        <div class="section">
            <div class="columns">
                <div class="column is-6">
                    <div class="title">
                    <h1>Get In Touch</h1>
                    <h2>Contact Me</h2>
                    </div>
                </div>
                <div class="column is-6">
                    <form action="" method="post">
                        <input type="name" placeholder="Name">
                        <input type="email" placeholder="E-mail">
                        <textarea name="message" id="message" cols="21" rows="4" placeholder="Message"></textarea>
                        <div class="buttons">
                            <button>Send</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
 </div>
</template>

<script>
export default{
    name: "Contact",
}

</script>

<style scoped>
/* .section .columns{
    align-items: flex-start;
} */

.column .title h1 {
    font-size: 3em;
    margin: 0;
}
.column .title h2 {
    font-size: 2em;
    margin-top: 0;
    color: #faaa53;
}
.is-dark-mode-active .column .title h2{
    color: #364cf3;
}
form input{
    margin: 1em 0;
    padding: .5em;
    border: 2px solid #faaa53;
    border-radius: .412em;
}
.is-dark-mode-active form input{
    border: 2px solid #364cf3;
}

form textarea{
    padding: .5em;
    border: 2px solid #faaa53;
    border-radius: .412em;
}
.is-dark-mode-active form textarea{
    border: 2px solid #364cf3;
}

form{
    display: flex;
    flex-direction: column;
    width: 80%;
    /* margin: 0 auto; */
}


@media only screen and (max-width: 769px) { 
    form{
    width: 100%;
}

}
</style>