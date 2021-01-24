class FeaturePrTest {
    constructor() {
        this.slide();
    }

    slide() {
        let productContainer = document.querySelector('.hi-products-container');
        let slidesPerView = productContainer.dataset.productItem;

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
                    slidesPerView: slidesPerView,
                    spaceBetween: 40
                }
            }
        });
    }
}

export default FeaturePrTest;