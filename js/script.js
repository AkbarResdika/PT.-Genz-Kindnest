/* ==========================================
   KINDNEST - script.js
   ========================================== */

/* =========================================
WISHLIST
========================================= */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelector(".wishlist").onclick = function(){

this.classList.toggle("liked");

if(this.classList.contains("liked")){

this.innerHTML="❤";

this.style.color="red";

showToast("Produk ditambahkan ke Wishlist ❤️");

wishlist.push("Stroller Baby");

}else{

this.style.color="#555";

wishlist.pop();

showToast("Produk dihapus dari Wishlist");

}

localStorage.setItem("wishlist",JSON.stringify(wishlist));

};

/* =========================================
CART
========================================= */

let cartTotal = Number(localStorage.getItem("cart")) || 0;

updateCart();

document.querySelector(".cart").onclick=function(){

cartTotal++;

localStorage.setItem("cart",cartTotal);

updateCart();

showToast("Produk masuk ke keranjang 🛒");

}

function updateCart(){

const badge=document.getElementById("cartBadge");

if(badge){

badge.innerHTML=cartTotal;

}

}

/* =========================================
TOAST
========================================= */

function showToast(text){

const toast=document.getElementById("toast");

document.getElementById("toastText").innerHTML=text;

toast.classList.add("show");

setTimeout(()=>{

toast.classList.remove("show");

},2500);

}

/* =========================================
DARK MODE
========================================= */

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.style.position="fixed";

darkBtn.style.bottom="100px";

darkBtn.style.right="30px";

darkBtn.style.width="60px";

darkBtn.style.height="60px";

darkBtn.style.borderRadius="50%";

darkBtn.style.border="none";

darkBtn.style.cursor="pointer";

darkBtn.style.fontSize="22px";

darkBtn.style.background="#222";

darkBtn.style.color="white";

darkBtn.style.zIndex="999";

document.body.appendChild(darkBtn);

let dark=false;

darkBtn.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="#1f1f1f";

document.body.style.color="white";

showToast("Dark Mode Aktif");

}else{

document.body.style.background="#FFF8EE";

document.body.style.color="#333";

showToast("Light Mode Aktif");

}

}

   function openTab(tab){

document.querySelectorAll(".tab-content").forEach(content=>{

content.classList.remove("active");

});

document.querySelectorAll(".tab-btn").forEach(btn=>{

btn.classList.remove("active");

});

document.getElementById(tab).classList.add("active");

event.target.classList.add("active");

}

document.addEventListener("DOMContentLoaded", () => {

    console.log("KindNest Loaded Successfully!");

    /* ==============================
       NAVBAR SHADOW
    ============================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";
        }

    });


    /* ==============================
       BUTTON ANIMATION
    ============================== */

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "scale(1.05)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "scale(1)";

        });

    });


    /* ==============================
       PRODUCT CARD HOVER
    ============================== */

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".3s";
            card.style.transform = "translateY(-10px)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0)";

        });

    });


    /* ==============================
       ADD TO CART
    ============================== */

    let cart = 0;

    const cartButtons = document.querySelectorAll(".product-card button");

    cartButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            cart++;

            alert("Produk berhasil ditambahkan ke keranjang.\n\nTotal Item : " + cart);

        });

    });


    /* ==============================
       SEARCH (SIMPLE)
    ============================== */

    const searchInput = document.querySelector("#searchInput");

    if(searchInput){

        searchInput.addEventListener("keyup", function(){

            const keyword = this.value.toLowerCase();

            document.querySelectorAll(".product-card").forEach(card=>{

                const title = card.querySelector("h3").innerText.toLowerCase();

                if(title.includes(keyword)){

                    card.style.display="block";

                }else{

                    card.style.display="none";

                }

            });

        });

    }


    /* ==============================
       SCROLL ANIMATION
    ============================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    });

    document.querySelectorAll(".product-card").forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    document.querySelectorAll(".cat-card").forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });


    /* ==============================
       HERO BUTTON
    ============================== */

    const heroBtn = document.querySelector(".btn-primary");

    if(heroBtn){

        heroBtn.addEventListener("click",()=>{

            console.log("Menuju halaman produk...");

        });

    }


    /* ==============================
       BACK TO TOP
    ============================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML="⬆";

    topBtn.style.position="fixed";
    topBtn.style.bottom="30px";
    topBtn.style.right="30px";
    topBtn.style.width="50px";
    topBtn.style.height="50px";
    topBtn.style.border="none";
    topBtn.style.borderRadius="50%";
    topBtn.style.background="#ffb703";
    topBtn.style.color="white";
    topBtn.style.cursor="pointer";
    topBtn.style.display="none";
    topBtn.style.fontSize="20px";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>300){

            topBtn.style.display="block";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

});

/* =========================
COUNTDOWN
========================= */

let total = 2 * 60 * 60;

setInterval(function(){

let h = Math.floor(total / 3600);

let m = Math.floor((total % 3600) / 60);

let s = total % 60;

document.getElementById("hour").innerHTML = String(h).padStart(2,'0');

document.getElementById("minute").innerHTML = String(m).padStart(2,'0');

document.getElementById("second").innerHTML = String(s).padStart(2,'0');

if(total>0){

total--;

}

},1000);


/* =========================
ONGKIR
========================= */

function cekOngkir(){

const kota=document.querySelector(".shipping select").value;

let biaya="";

switch(kota){

case "Bandung":

biaya="Rp15.000";

break;

case "Jakarta":

biaya="Rp20.000";

break;

case "Surabaya":

biaya="Rp25.000";

break;

case "Semarang":

biaya="Rp18.000";

break;

default:

biaya="Rp22.000";

}

document.getElementById("ongkirResult").innerHTML=

"Estimasi ongkir ke <b>"+kota+"</b> adalah <b>"+biaya+"</b>";


}

/* =====================================
   ECO IMPACT COUNTER
===================================== */

function animateCounter(id, target){

let count=0;

let step=Math.ceil(target/120);

let element=document.getElementById(id);

if(!element) return;

let interval=setInterval(function(){

count+=step;

if(count>=target){

count=target;

clearInterval(interval);

}

element.innerHTML=count.toLocaleString()+"+";

},20);

}

window.addEventListener("load",function(){

animateCounter("counterBarang",12540);

animateCounter("counterFamily",8300);

animateCounter("counterWaste",2180);

animateCounter("counterSeller",1250);

});

/* =====================================
AUTO SLIDER
===================================== */

let slideIndex=0;

showSlides();

function showSlides(){

let slides=document.getElementsByClassName("slides");

let dots=document.getElementsByClassName("dot");

if(slides.length===0) return;

for(let i=0;i<slides.length;i++){

slides[i].style.display="none";

dots[i].classList.remove("active-dot");

}

slideIndex++;

if(slideIndex>slides.length){

slideIndex=1;

}

slides[slideIndex-1].style.display="block";

dots[slideIndex-1].classList.add("active-dot");

setTimeout(showSlides,4000);

}