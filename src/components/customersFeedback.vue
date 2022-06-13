<template>
    <div class="customer" id="customer">
        <div class="section">
            <div class="columns">
                <div class="column is-12">
                    <div class="card">
                        <div class="cardHeader">
                            <div class="profileImg">
                                <img src="../assets/profilePic/dp.png" alt="">
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
.section{
    display: flex;
    align-items: center;
    justify-content: center;
}
.column.is-12{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.card{
    width: 70%;
    margin: 2rem;
    border: 2px solid black;
    padding: 1em;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.card .cardHeader{
    display: flex;
    justify-content: center;
    align-items: center;
}
.card .cardHeader .profileImg{
    width: 5em;
    height: 5em;
}
.card .cardHeader .profileImg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: contain;
}
.card .cardBody{
    width:90%;
}
.card .cardBody .feedback{
    width: 100%;
    margin: 1em 0;
    border: 2px solid red;
}
</style>