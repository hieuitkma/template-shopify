/**
 * Import sections bên dưới
 */
import './sections/sliders/sliders-01';
import { doSomething } from './sections/sliders/sliders-01';

import ProductRender from './pages/products/product-render';
import FeaturePrTest from './pages/products/feature-product-test';
import CollectionTest from './pages/products/collection-test';
import CartTest from './pages/products/cart-test';

// From ./sections/slides/sliders-01
doSomething();
console.log('kmacoders developing...');

console.log(window.location.href)

if(window.location.href == `https://hieukma.myshopify.com/`) {
    const featureTest = new FeaturePrTest();
    const collectionTestH = new CollectionTest();
    const cart = new CartTest();
} else {
    const productRende = new ProductRender();
}