import InputSearch from "./common/inputSearch.jsx";
import Selection from "./common/Selection.jsx";
import '/src/styles/base/common/Selection.scss'
import '../styles/components/Caralog.scss'
import CardProduct from "./common/CardProduct.jsx";
import Button from "./common/Button.jsx";
import {useState} from "react";
import ImgScroll from "./common/ImgScroll.jsx";
const Catalog = () => {
    const totalPages = 3
    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const guitars = [
        {
            id: 1,
            name: 'Ibanez Gio GRG17ODX Black Night',
            price: '37 000₽',
            image: '/src/assets/ibanez-gio'
        },
        {
            id: 2,
            name: 'Belucci 3810 N',
            price: '7 900₽',
            image: '/src/assets/belucci'
        },
        {
            id: 3,
            name: 'Yamaha F310',
            price: '18 990₽',
            image: '/src/assets/yamaha-f310'
        },
        {
            id: 4,
            name: 'Fender CD-60 Black',
            price: '24 000₽',
            image: '/src/assets/fender-cd'
        },
        {
            id: 5,
            name: 'Yamaha FG800',
            price: '44 990₽',
            image: '/src/assets/yamaha-fg'
        },
        {
            id: 6,
            name: 'SQUIER MM Stratocaster Black',
            price: '17 900₽',
            image:  '/src/assets/belucci'
        },
        {
            id: 7,
            name: 'Cort MR Series',
            price: '39 900₽',
            image: '/src/assets/cort-mr'
        },
        {
            id: 8,
            name: 'Martin Guitars LX1 Little Martin',
            price: '39 900₽',
            image:  '/src/assets/belucci'
        }
    ];
    const logo = [
        {
            id:1,
            path:'/src/assets/logo-yamaha'
        },
        {
            id:2,
            path:'/src/assets/logo-squier'
        },
        {
            id:3,
            path:'/src/assets/logo-roland'
        },
        {
            id:4,
            path:'/src/assets/logo-martin'
        },
        {
            id:5,
            path:'/src/assets/logo-ibanez'
        },
        {
            id:6,
            path:'/src/assets/logo-fender'
        },
        {
            id:7,
            path:'/src/assets/logo-dunlup'
        }
    ]

    return (
        <div className="catalog-container">
       <div className="catalog">
           <h1 className='catalog-header'>Каталог</h1>
           <div className="catalog-filters">
               <div className="catalog-filters__search">
                   <InputSearch
                       placeholder="Поиск гитар, усилителей..." />
               </div>
                    <Selection>
                    </Selection>
           </div>
           <div className="catalog-body">
               {guitars.map((item) => (
                   <CardProduct
                    price={item.price}
                    key={item.id}
                    path={item.image}
                    name={item.name}
                   />
               ))}
           </div>
           <div className="count-pages">
               {Array.from({ length: totalPages }, (_, index) => (
                   <button
                       key={index + 1}
                       className={`count-pages__number ${
                           activePage === index + 1 ? 'count-pages__number--active' : ''
                       }`}
                       onClick={() => handlePageClick(index + 1)}
                   >
                       {index + 1}
                   </button>
               ))}
           </div>
           <div className="popular-brends">
               <h1 className="popular-brends__header">Популярные бренды</h1>
               <div className='popular-brends__content'>
                   {logo.map((item) => (
                       <ImgScroll
                           key={item.id}
                           path={item.path}
                       />
                   ))}
                   {logo.map((item) => (
                       <ImgScroll
                           key={item.id}
                           path={item.path}
                       />
                   ))}

               </div>
           </div>
       </div>

        </div>
    )
}
export default Catalog
