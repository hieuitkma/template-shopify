

// add product 1 select 
// class ProductRender{
//     constructor() {
//         this.addProduct();
//     }

//     addProduct() {
//         addBtn.addEventListener('click', (e) => {
//             let qty = document.querySelector('#quantity').value;
          
//             let listOptions = document.querySelectorAll('select option');
//             let optionSelected = Array.from(listOptions).filter((item, index) => {
//               return item.selected == true;
//             })
          
//             let product = Array.from(hieu.variants).filter(item => {
//               return item.title == optionSelected[0].outerText;
//             })
          
//             var addData = {
//               'id': product[0].id,
//               'quantity': qty
//             };
          
//             fetch('/cart/add.js', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify(addData)
//             })
//             .then(response => {
//               return response.json();
//             })
//             .catch((error) => {
//               console.error('Error:', error);
//             });
//           });
//     }
// }

// add product 2 select 
class ProductRender {
    constructor() {
      this.addProduct();
      this.slideProductRender();
    }
    
    addProduct() {
      let addBtn = document.querySelector('.product__add');
      addBtn.addEventListener('click', (e) => {
          e.preventDefault();
          let qty = document.querySelector('#quantity').value;
        
          let listOptions = document.querySelectorAll('select option');

          let optionSelected = Array.from(listOptions).filter( item => item.selected == true );

          let arr = [];
          Array.from(optionSelected).forEach(item => arr.push(item.outerText.trim()))
          let option = Array.from(hieu.variants).filter(item => JSON.stringify(arr)==JSON.stringify(item.options))

          var addData = {
            'id': option[0].id,
            'quantity': qty
          };
        
          fetch('/cart/add.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(addData)
          })
          .then(response => {
            let click = document.querySelector('#cartTest');
            click.click();
            return response.json();
          })
          .then(json => {
            console.log(json);
            // let data = await response.json()
            // return data;
          })
          .catch((error) => {
            console.error('Error:', error);
          });

          // let liTag = document.querySelectorAll('.HorizontalList__Item:last-child')[1];
          // let cartNumber = liTag.querySelector('.Header__CartCount');
          // let numberNew = parseInt(cartNumber.textContent) + parseInt(qty);
          // cartNumber.innerHTML = numberNew;
      })
    }

    slideProductRender() {
      var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          320: {
            slidesPerView: 1
          }
        }
      });
    }
    
}

export default ProductRender;