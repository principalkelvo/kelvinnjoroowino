<template>
 <div class="navigation">
        <ul>
            <li class="list active">
                <a href="#">
                    <span class="icon">
                        <i>i</i>
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list ">
                <a href="#">
                    <span class="icon">
                        <i>i</i>
                    </span>
                    <span class="text">Skills</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <i>i</i>
                    </span>
                    <span class="text">Services</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <i>i</i>
                    </span>
                    <span class="text">Projects</span>
                </a>
            </li> <li class="list">
                <a href="#">
                    <span class="icon">
                        <i>i</i>
                    </span>
                    <span class="text">Contact</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
</template>

<script>
const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item)=>
        item.classList.remove('active'));
        this.classList.add('active');
        console.log('active')
    }
    list.forEach((item)=>
        item.addEventListener('click', activeLink)
    )

export default{
    name:"navbarMobile",
    methods:{}
}

</script>

<style scoped>
/* *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --clr: #FA964D;
}
body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: black;
} */
.navigation{
    width: 400px;
    height: 70px;
    position: fixed;
    background: rgba(0, 0, 0, 0.575);
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    z-index: 41;
}

.navigation ul{
    display: flex;
    width:350px;
}

.navigation ul li{
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
}

.navigation ul li a{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
}

.navigation ul li a .icon{
    position: relative;
    display:block;
    line-height: 75px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: #fff;

}
.navigation ul li.active a .icon{
    transform: translateY(-32px);
}

.navigation ul li a .text{
    position: absolute;
    color: #fff;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity:0;
    transform: translateY(20px);
}


.navigation ul li.active a .text{
    opacity: 1;
    transform: translateY(10px);
}

.indicator{
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    background: red;
    border-radius: 50%;
    border: 6px solid #fff;
    transition: 0.5s;
}
.indicator::before{
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 transparent;
}
.indicator::after{
    content: '';
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 transparent;
}

.navigation ul li:nth-child(1).active ~ .indicator{
    transform: translateX(calc(70px * 0));
}
.navigation ul li:nth-child(2).active ~ .indicator{
    transform: translateX(calc(70px * 1));
}
.navigation ul li:nth-child(3).active ~ .indicator{
    transform: translateX(calc(70px * 2));
}
.navigation ul li:nth-child(4).active ~ .indicator{
    transform: translateX(calc(70px * 3));
}
.navigation ul li:nth-child(5).active ~ .indicator{
    transform: translateX(calc(70px * 4));
}
</style>