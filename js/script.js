/* ==========================================
   KINDNEST - script.js
   ========================================== */

/* =========================================
WISHLIST
========================================= */

let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

const wishlistBtn = document.querySelector(".wishlist");
if (wishlistBtn) {
    wishlistBtn.onclick = function(){
        this.classList.toggle("liked");
        if(this.classList.contains("liked")){
            this.innerHTML="❤";
            this.style.color="red";
            showToast("Produk ditambahkan ke Wishlist ❤️");
            wishlist.push("Stroller Baby");
        } else {
            this.style.color="#555";
            wishlist.pop();
            showToast("Produk dihapus dari Wishlist");
        }
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    };
}

/* =========================================
CART
========================================= */

// Cart stored as array of items in localStorage under key 'cartItems'
function getCartItems(){
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function saveCartItems(items){
    localStorage.setItem('cartItems', JSON.stringify(items));
    updateCartBadge();
    const evt = new Event('cartUpdated');
    window.dispatchEvent(evt);
}

function updateCartBadge(){
    const badge = document.getElementById('cartBadge');
    if(badge){
        const total = getCartItems().reduce((s,i)=>s + (i.qty||1), 0);
        badge.innerText = total;
    }
}

// initialize badge on load
updateCartBadge();

const langTranslations = {
    id: {
        'Home': 'Beranda',
        'New Products': 'Barang Baru',
        'Preloved': 'Barang Bekas',
        'Sell Item': 'Jual Barang',
        'Profile': 'Profil',
        'Cart': 'Keranjang',
        'Search products...': 'Cari produk...',
        'New & Preloved Marketplace': 'Marketplace Barang Baru & Bekas',
        'All Your Little One Needs in One Place.': 'Semua Kebutuhan Si Kecil dalam Satu Tempat.',
        'KindNest helps parents buy or sell baby and child essentials...': 'KindNest membantu orang tua membeli maupun menjual perlengkapan bayi dan anak yang masih layak pakai maupun produk baru dengan harga terbaik.',
        'Shop New Products': 'Belanja Barang Baru',
        'Browse Preloved': 'Cari Barang Bekas',
        'Sell Now': 'Jual Barang Sekarang',
        'Learn How It Works': 'Pelajari Cara Kerja',
        'Up to 50% Off': 'Diskon Hingga 50%',
        'Quality baby essentials at the best prices.': 'Perlengkapan bayi berkualitas dengan harga terbaik.',
        'Quality Preloved Items': 'Barang Bekas Berkualitas',
        'Still usable, budget friendly, and eco-friendly.': 'Layak pakai, hemat biaya, dan ramah lingkungan.',
        'Sell your item in minutes.': 'Upload produk dalam hitungan menit dan temukan pembeli.',
        'Popular Categories': 'Kategori Populer',
        'New Products': 'Produk Baru',
        'Add to Cart': 'Tambah ke Keranjang',
        'Marketplace for baby & child needs.': 'Marketplace kebutuhan bayi & anak.',
        'Shopping Cart': 'Keranjang Belanja',
        'Review your products before checkout.': 'Periksa kembali produk sebelum checkout.',
        'Summary': 'Ringkasan',
        'Subtotal': 'Subtotal',
        'Shipping': 'Ongkir',
        'Voucher': 'Voucher',
        'Checkout Now': 'Checkout Sekarang',
        'Order Successful!': 'Pesanan Berhasil!',
        'Thank you for shopping at KindNest.': 'Terima kasih telah berbelanja di KindNest.',
        'Back to Home': 'Kembali ke Home',
        'Shipping Address': 'Alamat Pengiriman',
        'Recipient Name': 'Nama Penerima',
        'Phone Number': 'No HP',
        'Address': 'Alamat',
        'Choose Courier': 'Pilih Kurir',
        'Payment Method': 'Metode Pembayaran',
        'Order Summary': 'Ringkasan Pesanan',
        'Place Order': 'Buat Pesanan',
        'Category': 'Kategori',
        'Price Filter': 'Filter Harga',
        'All': 'Semua',
        'Baby Clothes': 'Baju Bayi',
        'Feeding': 'Feeding',
        'Toys': 'Mainan',
        'Stroller': 'Stroller',
        'Shoes': 'Sepatu',
        'Books': 'Buku',
        'Kids Bags': 'Tas Anak',
        'Maximum price:': 'Harga maksimum:',
        'Cart is empty.': 'Keranjang kosong.',
        'Order Summary': 'Ringkasan Pesanan'
    },
    en: {
        'Beranda': 'Home',
        'Barang Baru': 'New Products',
        'Barang Bekas': 'Preloved',
        'Jual Barang': 'Sell Item',
        'Profil': 'Profile',
        'Keranjang': 'Cart',
        'Cari produk...': 'Search products...',
        'Marketplace Barang Baru & Bekas': 'New & Preloved Marketplace',
        'Semua Kebutuhan Si Kecil dalam Satu Tempat.': 'All Your Little One Needs in One Place.',
        'KindNest membantu orang tua membeli maupun menjual perlengkapan bayi dan anak yang masih layak pakai maupun produk baru dengan harga terbaik.': 'KindNest helps parents buy or sell baby and child essentials in good condition or new products at the best prices.',
        'Belanja Barang Baru': 'Shop New Products',
        'Cari Barang Bekas': 'Browse Preloved',
        'Jual Barang Sekarang': 'Sell Now',
        'Pelajari Cara Kerja': 'Learn How It Works',
        'Diskon Hingga 50%': 'Up to 50% Off',
        'Perlengkapan bayi berkualitas dengan harga terbaik.': 'Quality baby essentials at the best prices.',
        'Barang Bekas Berkualitas': 'Quality Preloved Items',
        'Layak pakai, hemat biaya, dan ramah lingkungan.': 'Still usable, budget friendly, and eco-friendly.',
        'Upload produk dalam hitungan menit dan temukan pembeli.': 'Upload your product in minutes and find buyers.',
        'Kategori Populer': 'Popular Categories',
        'Produk Baru': 'New Products',
        'Tambah ke Keranjang': 'Add to Cart',
        'Marketplace kebutuhan bayi & anak.': 'Marketplace for baby & child needs.',
        'Keranjang Belanja': 'Shopping Cart',
        'Periksa kembali produk sebelum checkout.': 'Review your products before checkout.',
        'Ringkasan': 'Summary',
        'Ongkir': 'Shipping',
        'Checkout Sekarang': 'Checkout Now',
        'Pesanan Berhasil!': 'Order Successful!',
        'Terima kasih telah berbelanja di KindNest.': 'Thank you for shopping at KindNest.',
        'Kembali ke Home': 'Back to Home',
        'Alamat Pengiriman': 'Shipping Address',
        'Nama Penerima': 'Recipient Name',
        'No HP': 'Phone Number',
        'Alamat': 'Address',
        'Pilih Kurir': 'Choose Courier',
        'Metode Pembayaran': 'Payment Method',
        'Ringkasan Pesanan': 'Order Summary',
        'Buat Pesanan': 'Place Order',
        'Kategori': 'Category',
        'Filter Harga': 'Price Filter',
        'Semua': 'All',
        'Baju Bayi': 'Baby Clothes',
        'Feeding': 'Feeding',
        'Mainan': 'Toys',
        'Sepatu': 'Shoes',
        'Buku': 'Books',
        'Tas Anak': 'Kids Bags',
        'Harga maksimum:': 'Maximum price:',
        'Keranjang kosong.': 'Cart is empty.'
    }
};

function translateTextNodes(lang){
    const all = document.querySelectorAll('body *');
    all.forEach(el => {
        if(el.children.length === 0){
            const text = el.textContent.trim();
            if(text && langTranslations[lang] && langTranslations[lang][text]){
                el.textContent = langTranslations[lang][text];
            }
        }
        if(el.placeholder && langTranslations[lang] && langTranslations[lang][el.placeholder]){
            el.placeholder = langTranslations[lang][el.placeholder];
        }
        if(el.value && langTranslations[lang] && langTranslations[lang][el.value]){
            el.value = langTranslations[lang][el.value];
        }
    });
    if(langTranslations[lang] && langTranslations[lang][document.title]){
        document.title = langTranslations[lang][document.title];
    }
}

function getCurrentLanguage(){
    return localStorage.getItem('kindnestLang') || 'id';
}

function setCurrentLanguage(lang){
    localStorage.setItem('kindnestLang', lang);
    const html = document.documentElement;
    html.lang = lang;
    const switchBtn = document.getElementById('langSwitch');
    if(switchBtn){
        switchBtn.textContent = lang === 'id' ? 'EN' : 'ID';
        switchBtn.title = lang === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia';
    }
    translateTextNodes(lang);
}

function createLanguageSwitcher(){
    const headerIcon = document.querySelector('.header-icon');
    if(!headerIcon) return;
    const existing = document.getElementById('langSwitch');
    if(existing) return;
    const btn = document.createElement('button');
    btn.id = 'langSwitch';
    btn.className = 'lang-switch';
    btn.type = 'button';
    btn.textContent = getCurrentLanguage() === 'id' ? 'EN' : 'ID';
    btn.title = getCurrentLanguage() === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia';
    btn.addEventListener('click', ()=>{
        const next = getCurrentLanguage() === 'id' ? 'en' : 'id';
        setCurrentLanguage(next);
    });
    headerIcon.appendChild(btn);
}

function initLanguage(){
    createLanguageSwitcher();
    setCurrentLanguage(getCurrentLanguage());
}

function setupBlogModal(){
    const btn = document.getElementById('openBlogModal');
    const modal = document.getElementById('blogModal');
    if(!btn || !modal) return;
    const closeBtn = modal.querySelector('.modal-close');
    btn.addEventListener('click', ()=> modal.classList.add('active'));
    closeBtn?.addEventListener('click', ()=> modal.classList.remove('active'));
    modal.addEventListener('click', e => {
        if(e.target === modal) modal.classList.remove('active');
    });
}

function setupDonationPage(){
    const form = document.getElementById('donationForm');
    if(!form) return;
    const success = document.getElementById('donationSuccess');
    form.addEventListener('submit', e => {
        e.preventDefault();
        if(success) success.style.display = 'block';
        form.reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function createMobileMenu(){
    if(document.getElementById('mobileMenu')) return;
    const header = document.querySelector('header');
    if(!header) return;
    const navLinks = Array.from(header.querySelectorAll('nav a'));
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.className = 'mobile-menu';
    const listItems = navLinks.map(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        return `<li><a href="${href}">${text}</a></li>`;
    }).join('');
    mobileMenu.innerHTML = `
        <div class="mobile-menu-panel">
            <button class="mobile-menu-close">&times;</button>
            <h2>Menu</h2>
            <ul>${listItems}</ul>
        </div>
    `;
    document.body.appendChild(mobileMenu);
    const closeButton = mobileMenu.querySelector('.mobile-menu-close');
    closeButton.addEventListener('click', () => mobileMenu.classList.remove('active'));
    mobileMenu.addEventListener('click', e => {
        if(e.target === mobileMenu) mobileMenu.classList.remove('active');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => mobileMenu.classList.remove('active'));
    });
    const button = document.createElement('button');
    button.id = 'mobileMenuBtn';
    button.className = 'mobile-menu-btn';
    button.type = 'button';
    button.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
    button.addEventListener('click', () => mobileMenu.classList.add('active'));
    const headerIcon = header.querySelector('.header-icon');
    if(headerIcon){
        headerIcon.prepend(button);
    } else {
        header.appendChild(button);
    }
}

function createBackButton(){
    if(document.getElementById('backButton')) return;
    const button = document.createElement('button');
    button.id = 'backButton';
    button.className = 'back-btn';
    button.type = 'button';
    button.innerHTML = '<i class="fa-solid fa-arrow-left"></i>Kembali';
    button.addEventListener('click', () => {
        if(window.history.length > 1){
            window.history.back();
        } else {
            window.location.href = 'index.html';
        }
    });
    const header = document.querySelector('header');
    if(header && header.nextElementSibling){
        header.parentNode.insertBefore(button, header.nextElementSibling);
    } else if(header){
        header.parentNode.appendChild(button);
    } else {
        document.body.insertBefore(button, document.body.firstChild);
    }
}

/* =========================================
TOAST
========================================= */

function showToast(text){
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toastText");
    if (!toast || !toastText) {
        console.log(text);
        return;
    }
    toastText.innerHTML = text;
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
    initLanguage();
    setupBlogModal();
    setupDonationPage();    createMobileMenu();
    createBackButton();
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
       ADD TO CART (persistent)
    ============================== */

    function addToCart(item, redirectTo){
        const items = getCartItems();
        const existing = items.find(i => i.id === item.id || i.title === item.title);
        if(existing){
            existing.qty = (existing.qty || 1) + 1;
        } else {
            items.push({ ...item, qty: 1 });
        }
        saveCartItems(items);
        showToast('Produk ditambahkan ke keranjang 🛒');
        if(redirectTo) window.location.href = redirectTo;
    }

    function addToCartFromCard(card, redirectTo){
        const title = card.querySelector('h3') ? card.querySelector('h3').innerText.trim() : 'Produk';
        const imgEl = card.querySelector('img');
        const image = imgEl ? imgEl.getAttribute('src') : '';
        const price = Number(card.dataset.price || (card.querySelector('.price') ? card.querySelector('.price').innerText.replace(/[^0-9]/g,'') : 0));
        const id = card.dataset.id || (title + '|' + image);
        addToCart({ id, title, price, image }, redirectTo);
    }

    function addToCartFromDetail(redirectTo){
        const title = document.querySelector('.product-title') ? document.querySelector('.product-title').innerText.trim() : 'Produk';
        const imageEl = document.getElementById('mainImage') || document.querySelector('.main-image img');
        const image = imageEl ? imageEl.getAttribute('src') : '';
        const priceText = document.querySelector('.price') ? document.querySelector('.price').innerText : '0';
        const price = Number(priceText.replace(/[^0-9]/g,'')) || 0;
        const id = title + '|' + image;
        addToCart({ id, title, price, image }, redirectTo);
    }

    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if(card) addToCartFromCard(card, 'cart.html');
        });
    });

    const detailCartButton = document.querySelector('.cart');
    const detailBuyButton = document.querySelector('.buy');
    if(detailCartButton){
        detailCartButton.addEventListener('click', () => addToCartFromDetail('cart.html'));
    }
    if(detailBuyButton){
        detailBuyButton.addEventListener('click', () => addToCartFromDetail('checkout.html'));
    }


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