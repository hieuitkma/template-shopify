class FeaturePrTest {
    constructor() {
        this.slideProduct();
    }

    slideProduct() {
        let productContainer = document.querySelector('.hi-products-container');
        let slidesPerViews = productContainer.dataset.productItem;
        console.log(slidesPerViews)

        let container = '.hi-products-container';
        let swiper = new Swiper(`${container} .swiper-container`, {
            navigation: {
                nextEl: `${container} .swiper-button-next`,
                prevEl: `${container} .swiper-button-prev`,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                640: {
                    slidesPerView: slidesPerViews,
                    spaceBetween: 40
                }
            }
        });
    }
}

export default FeaturePrTest;