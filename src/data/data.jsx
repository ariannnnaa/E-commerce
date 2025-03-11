// брендовые значки 
import b1 from '../assets/images/brands/brand1.svg';
import b2 from '../assets/images/brands/brand2.svg';
import b3 from '../assets/images/brands/brand3.svg';
import b4 from '../assets/images/brands/brand4.svg';
import b5 from '../assets/images/brands/brand5.svg';
//категории
import Electronic from '../assets/images/categories/electronic.svg';
import Jewels from '../assets/images/categories/jewels.jpg';
import Men from '../assets/images/categories/men.jpg';
import Women from '../assets/images/categories/women.jpg';
// о нас 
import shipping from '../assets/images/about/shipping.svg';
import money from '../assets/images/about/money.svg';
import support from '../assets/images/about/support.svg';
import secure from '../assets/images/about/secure.svg';
// соц.сети 
import inst from '../assets/images/socials/inst.svg';
import facebook from '../assets/images/socials/facebook.svg';
import youtube from '../assets/images/socials/youtube.svg';

const categories = [
    {
        title: "Главная",
        path: "/",
    },
    {
        title: "Мужская одежда",
        path: "/category/men's clothing",
        img: <Men />,
        category: "men's clothing",
    },
    {
        title: "Женская одежда",
        path: "/category/women's clothing",
        img: <Women />,
        category: "women's clothing",
    },
    {
        title: "Электроника",
        path: "/category/electronics",
        img: <Electronic />,
        category: "electronics",
    },
    {
        title: "Украшения",
        path: "/category/jewelery",
        img: <Jewels />,
        category: "jewelery",
    }
];

const brands = [
    b1,
    b2,
    b3,
    b4,
    b5,
];

const about = [
    {
        title: 'Free Shipping',
        desc: 'Order above $200',
        img: shipping,
    },
    {
        title: 'Money-back',
        desc: '30 days guarantee',
        img: money,
    },
    {
        title: 'Secure Payments',
        desc: 'Secured by Stripe',
        img: secure,
    },
    {
        title: '24/7 Support',
        desc: 'Phone and Email support',
        img: support,
    }
];

const socials = [
    inst,
    facebook,
    youtube,
];

export { categories, brands, about, socials };