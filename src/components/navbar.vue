<template>
    <div>
        <!-- navbar  -->
    <div class="navbar">
        <!-- navbar logo  -->
        <div class="navbar-logo">
            <p>Personal</p>
        </div>
        <!-- navbar items  -->
        <div class="navbar-items">
            <ul>
                <li><a href="" class="active">Home</a></li>
                <li><a href="#projects">About</a></li>
                <li><a href="#stories">Projects</a></li>
                <!-- navbar items button -->
                <li><a class="buttons is-large">
                        <button class="no-fill">Contact</button>
                    </a></li>
            </ul>
        </div>

    </div>
        
    </div>
</template>

<script>

</script>

<style scoped>
/* navbar styles  */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    min-height: 3.25rem;
}

/* moringa logo  */
.navbar-logo p {
    letter-spacing: 2px;
    color: #000;
    font-weight: 700;
}

/* navbar items */
ul {
    list-style-type: none;
    margin: 0;
    display: flex;
    align-items: baseline;
    overflow: hidden;
}

li {
    float: right;
}

li a {
    display: block;
    font-size: medium;
    color: #000;
    text-align: center;
    margin: 0 0.1em;
    padding: 5px 16px;
    text-decoration: none;
    font-weight: 700;

    transition: all 0.3s ease;
}

/* Change the link color to pink on hover */
li a:hover {
    color: #FAAA53;
}
li a.active{
    color: #FAAA53;
}
/* no border on button */
li:last-child a:hover {
    border: none;
}


</style>