fetch('items.json')
            .then(response => response.json())
            .then(data =>{
                all_product_json = data
                const products_dev  = document.getElementById("products_dev")
                data.forEach(product => {
                    const old_price_paragraph = product.old_price ? `<p class="old_price">$${product.old_price}</p>` : ""; 
                    const persent_disc_paragraph = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>`  : "";
                        products_dev.innerHTML +=`
                        
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
