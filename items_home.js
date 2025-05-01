fetch('items.json')
            .then(response => response.json())
            .then(data =>{
                const swiper_items_sale  = document.getElementById("items_sale")
                all_product_json = data
                data.forEach(product => {
                    if(product.old_price){

                        const percent_disc = Math.floor((product.old_price - product.price) / product.old_price * 100)
                        swiper_items_sale.innerHTML +=`
                        
                        <div class="product swiper-slide">


                        <div class="icons">
                            <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        <span class="sale_present">%${percent_disc}</span>

                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                        
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>

                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>

                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>
                        
                        `
                    }
                });
                const swiper_items_electronics  = document.getElementById("items_electronics")
                data.forEach(product => {
                    const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""; 
                    const persent_disc_paragraph = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`  : "";
                    swiper_items_electronics.innerHTML +=`
                    
                    <div class="product swiper-slide">


                    <div class="icons">
                        <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    ${persent_disc_paragraph}
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
                    
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>

                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>

                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        ${old_price_paragraph}
                    </div>
                </div>
                    
                    `

            });
            const swiper_items_other  = document.getElementById("items_others")
            data.forEach(product => {
                const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""; 
                const persent_disc_paragraph = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`  : "";
                swiper_items_other.innerHTML +=`
                
                <div class="product swiper-slide">


                <div class="icons">
                    <span><i onclick ="addToCart(${product.id}, this)" class="fa-solid fa-cart-plus"></i></span>
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-share"></i></span>
                </div>
                ${persent_disc_paragraph}
                <div class="img_product">
                    <img src="${product.img}" alt="">
                    <img class="img_hover" src="${product.img_hover}" alt="">
                </div>
                
                <h3 class="name_product"><a href="#">${product.name}</a></h3>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>

                <div class="price">
                    <p><span>$${product.price}</span></p>
                    ${old_price_paragraph}
                </div>
            </div>
                
                `

        });
            })