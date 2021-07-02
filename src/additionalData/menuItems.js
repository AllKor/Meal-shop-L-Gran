import image1 from '../assets/images/menu/1.jpg'
import image2 from '../assets/images/menu/2.jpg'
import image3 from '../assets/images/menu/3.jpg'
import image4 from '../assets/images/menu/4.jpg'
import image5 from '../assets/images/menu/5.jpg'
import image6 from '../assets/images/menu/6.jpg'
import image7 from '../assets/images/menu/7.jpg'
import image8 from '../assets/images/menu/8.jpg'
import image9 from '../assets/images/menu/9.jpg'
import image10 from '../assets/images/menu/10.jpg'


const menuItems = [
    {
        id: 1,
        name: 'СЫРНИКИ + КАПУЧИНО',
        price: 6.90,
        weight: 233,
        pfc: {
            proteins: 17.9,
            fats: 27.5,
            carbonates: 56.5
        },
        image: image1,
        description: "Сырники, сахарная пудра, соус клубничный, сметана, мята"
    },
    {
        id: 2,
        name: 'БРИТАНСКИЙ ЗАВТРАК',
        price: 10.90,
        weight: 400,
        pfc: {
            proteins: 42,
            fats: 81,
            carbonates: 37
        },
        image: image2,
        description: "Рагу из фасоли (фасоль красная, лук репчатый, морковь, сельдерей, томатная паста, бекон, вино белое), яйцо, колбаски охотничьи, томаты..."
    },
    {
        id: 3,
        name: 'АМЕРИКАНСКИЙ СЭНДВИЧ С ГОВЯДИНОЙ',
        price: 9.70,
        weight: 300,
        pfc: {
            proteins: 29.2,
            fats: 33.4,
            carbonates: 39.7
        },
        image: image3,
        description: "Тост пшеничный, фирменная котлета из говядины, сыр Чеддер, микс салатов, огурец маринованный, соус Бургер, сыр Моцарелла"
    },
    {
        id: 4,
        name: 'АМЕРИКАНСКИЙ СЭНДВИЧ С КУРИЦЕЙ',
        price: 8.40,
        weight: 300,
        pfc: {
            proteins: 38.0,
            fats: 22.6,
            carbonates: 39.2
        },
        image: image4,
        description: "Тост пшеничный, куриное филе, микс салатов, томат, соус Цезарь, сыр Моцарелла"
    },
    {
        id: 5,
        name: 'СЫРНИКИ СО СМЕТАНОЙ И КУЛИ ИЗ КЛУБНИКИ',
        price: 5.90,
        weight: 220,
        pfc: {
            proteins: 16.6,
            fats: 23.5,
            carbonates: 55.1
        },
        image: image5,
        description: "Сырники, сахарная пудра, соус клубничный, сметана, мята"
    },
    {
        id: 6,
        name: 'ТОСТАДА С КУРИНЫМ ФИЛЕ И ЯЙЦОМ',
        price:  8.00,
        weight: 270,
        pfc: {
            proteins: 24.7,
            fats: 32.1,
            carbonates: 43.2
        },
        image: image6,
        description: "Тортилья,яйцо, филе куриное,томат, соус Гуакамоле, микс салатов"
    },
    {
        id: 7,
        name: 'ТОСТАДА С БЕКОНОМ И ЯЙЦОМ',
        price:  7.50,
        weight: 270,
        pfc: {
            proteins: 20.2,
            fats: 51.8,
            carbonates: 42.7
        },
        image: image7,
        description: "Тортилья, яйцо, бекон, томат, соус Бургер, микс салатов"
    },
    {
        id: 8,
        name: 'БЛИНЧИКИ С ВЕТЧИНОЙ, КУРИЦЕЙ И СЫРОМ',
        price:  6.40,
        weight: 250,
        pfc: {
            proteins: 22.6,
            fats: 55.8,
            carbonates: 43.4
        },
        image: image8,
        description: "Блинчики, ветчина, куриное филе, сыр Моцарелла, майонез, сметана, микс салатов"
    },
    {
        id: 9,
        name: 'ОВСЯНАЯ КАША С КУРАГОЙ',
        price:  3.20,
        weight: 185,
        pfc: {
            proteins: 4.4,
            fats: 3.3,
            carbonates: 25.6
        },
        image: image9,
        description: "Молоко, овсяные хлопья, курага, соус клубничный, миндаль, мята"
    },
    {
        id: 10,
        name: 'БУЛЬОН КУРИНЫЙ С КРУТОНАМИ',
        price:  2.90,
        weight: 320,
        pfc: {
            proteins: 3.3,
            fats: 5.8,
            carbonates: 17.5
        },
        image: image10,
        description: "Бульон, крутоны, укроп"
    }
]


export default menuItems
