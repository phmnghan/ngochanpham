function generateproduct(product) {
    const {name, discount, image, short_desc, tag, unit_price} = product;

    const generatedproduct = '
        <div class="product">
            <div class="image">
                <img src=`data:image/png;base64,${image}`>
            </div>

            <div class="information">
                <h4 class="name">${name}</h4>
                <p class="desc">${short_desc}</p>
                <p class="tag">${tag}</p>
            </div>

            <div class="total">
                if ( ${discount} > 0 ) {
                    <p class="discount">${discount}%</p>
                    <h5 class="price">Rp ${unit_price-(unit_price*discount)/100}</h5>
                    <p class="unit_price">Rp ${unit_price}</p>
                } else {
                    <h5 class="unit_price">Rp ${unit_price}</h5>
                }            

        </div>
        '
    return generatedproduct;
}
