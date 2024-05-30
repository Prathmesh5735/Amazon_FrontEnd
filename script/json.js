let firstproduct = document.getElementsByClassName("main-sec")

function productdata() {
    fetch("http://localhost:3000/cardproduct")
        .then((res) => res.json())
        .then((data) => {
            productlist(data)
        })
        .catch((err) => console.log(err))
}
productdata();

function productlist(data) {
    const prolist = data.map((el) =>
        product(el.h2, el.image1, el.image2, el.image3, el.image4, el.p1, el.p2, el.p3, el.p4)
    )
    firstproduct[0].innerHTML = prolist.join("");
    firstproduct[1].innerHTML = prolist.join("");
}

function product(h2, image1, image2, image3, image4, p1, p2, p3, p4) {
    let singleproduct = `
    <a href="product.html" class="card-product col-sm-6 text-decoration-none">
            <h2>${h2}
            </h2>
            <div class="card-product-nested-card">
                <div class="card-nested">
                        <img src="${image1}" />
                        <p>${p1}</p>
                </div>
                <div class="card-nested">
                        <img src="${image2}"/>
                        <p>${p2}</p>
                </div>
                <div class="card-nested">
                        <img src="${image3}" />
                        <p>${p3}</p>
                </div>
                <div class="card-nested">
                        <img src="${image4}" />
                        <p>${p4}</p>
                </div>
            </div>      
    </a>
    `
    return singleproduct
};

// slider part 

/*let sliderproduct = document.querySelector(".wrap")

function slider(){
    fetch("http://localhost:3000/slider")
    .then((res) => res.json())
    .then((data) => sliderlist(data))
    .catch((err)=>console.log(err))
}
slider();

function sliderlist(data){
   let slidelist=data.map((el)=>
    slidersingle(el.image)
    )
    sliderproduct.innerHTML = slidelist.join(''); 
}

function slidersingle(image){
    let slideprod=`
    <a href="" >
    <img src="${image}" class="w-100 h-100">
    </a>
    `
    return slideprod;
}*/

// SECOND PRODUCTS

let secondproduct = document.querySelector(".prod-append")

function productdata2() {
    fetch("http://localhost:3000/cardproduct2")
        .then((res) => res.json())
        .then((data) => {
            productlist2(data)
            console.log(data);
        })
        .catch((err) => console.log(err))
}
productdata2();

function productlist2(data) {
    const prodlist = data.map((el) =>
        secproduct(el.title, el.image1, el.image2, el.image3, el.image4)
    )
    secondproduct.innerHTML = prodlist.join("");
}

function secproduct(title, image1, image2, image3, image4,) {
    let secondproduct = `
    <div class="product-box col-lg-3 col-md-6 col-sm-12">
                    <a href="product.html">
                        <h3>${title}</h3>
                        <div class="p-s-box">
                            <div class="d-flex flex-wrap flex-sm-column flex-md-row">
                                <div class="s-product-img">
                                    <img src="${image1}" alt="">
                                </div>
                                <div class="s-product-img">
                                    <img src="${image2}" alt="">
                                </div>
                                <div class="s-product-img">
                                    <img src="${image3}" alt="">
                                </div>
                                <div class="s-product-img">
                                    <img src="${image4}" alt="">
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
    `
    return secondproduct
};