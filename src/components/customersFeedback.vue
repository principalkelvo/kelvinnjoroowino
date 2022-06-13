<template>
    <div class="customer" id="customer">
        <div class="section">
            <div class="columns">
                <div class="column is-12">
                    <div class="card">
                        <div class="cardHeader">
                            <div class="profileImg">
                                <img src="#" alt="">
                            </div>
                        </div>
                        <div class="cardBody">
                            <div class="feedback">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti accusamus cum non fugiat quod iure minima distinctio molestiae, voluptas assumenda.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomersFeedback",
}

</script>

<style scoped>
.column.is-12{
    width: 100%;
}
.card{
    width: 70%;
    margin: 2rem;
    border: 2px solid black;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.card .cardHeader{
    width: 70%;
}
.card .cardHeader .profileImg{
    width: 5em;
    height: 5em;
    border-radius: 50%;
}
.card .cardHeader .profileImg img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.card .cardBody{
    width:90%;
}
.card .cardBody .feedback{
    width: 100%;
    margin: .3em;
    border: 2px solid red;
}
</style>