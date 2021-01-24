class CartTest{
    constructor() {
        this.cart();
    }

    cart() {
        let addBtn = document.querySelectorAll('.hi-add');
        Array.from(addBtn).forEach(item => {
            item.addEventListener('click', (e) => {
                console.log(item);
            })
        })
    }
}

export default CartTest;