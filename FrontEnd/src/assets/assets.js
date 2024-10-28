import logo from './logo1.png'
import search_icon from './search-icon.png'
import cart_icon from './cart.png'
import header from'./header2.png'
import combination from'./comb.png'
import normal from './normal.png'
import Dry from './Dry.png'
import oily from './oily.png'
import sensetive from'./sensetive.png'
import problemHeader from './problemHeader.png'
import Acne from './Acne.jpeg'
import Large_Pores from './Large_Pores.jpeg'
import Anti_Aging from './Anti_Aging.jpeg'
import Dry_Skin_and_flakes from './Dry_Skin_and_ flakes.jpeg'
import Dark_Circles from './Dark_Circles.jpeg'
import Hyperpigmentation from './Hyperpigmentation.jpeg'
import Fine_Lines_and_Wrinkles from './Fine_Lines_and_Wrinkles.jpeg'
import FaceWash from './Face wash.jpg';
import serum from './serum.jpg';
import sunscreen  from './sunscreen.jpg';
import moisturizingCream from './moisturizing cream.jpeg';
import  image_1 from './1.jpg';
import  image_2 from './2.jpg';
import  image_3 from './3.jpg';
import   image_4 from './4.jpg';
import  image_5 from './5.jpg';
import  image_6 from './6.jpg';
import  image_7 from './7.jpg';
import  image_8 from './8.jpg';
import  image_9 from './9.jpg';
import  image_10 from './10.jpg';
import  image_11 from './11.jpg';
import  image_12 from './12.jpg';
import  image_13 from './13.jpg';
import  image_14 from './14.jpg';
import  image_15 from './15.jpg';
import  image_16 from './16.jpg';
import  image_17 from './17.jpg';
import  image_18 from './18.jpg';








//import Box1 from './Box1.png'

export const menu_list = [
    { menu_name:"Combination Skin",menu_image: combination },
    {menu_name:"Normal Skin", menu_image: normal },
    { menu_name:"Dry Skin",menu_image: Dry },
    { menu_name:"Oily Skin",menu_image: oily },
    { menu_name:"Sensetive Skin",menu_image: sensetive }
];
export const menu_problem = [
    { menu_name:"Acne",menu_image: Acne},
    {menu_name:"Large Pores", menu_image: Large_Pores },
    { menu_name:"Anti_Aging",menu_image: Anti_Aging },
    { menu_name:"Dry Skin and flakes",menu_image:Dry_Skin_and_flakes },
    { menu_name:"Dark_Circles",menu_image: Dark_Circles },
    { menu_name:"Hyperpigmentation",menu_image: Hyperpigmentation },
    { menu_name:"Fine Lines and Wrinkles",menu_image: Fine_Lines_and_Wrinkles}
];


export const assets = {
    logo,
    search_icon,
    cart_icon,
    header,
    menu_list,problemHeader
}

export const skincareMenu = [
    { menu_name:"Face wash",menu_image: FaceWash },
    {menu_name:"serum", menu_image: serum },
    { menu_name:"sunscreen",menu_image: sunscreen },
    { menu_name:"moisturizing cream",menu_image: moisturizingCream }
];


export const List = [
    {
        _id: "1",
        name: "The Ordinary Glycolic Acid",
        description: "This AHA toner contains 7% glycolic acid for gentle exfoliation and aloe vera and Tasmanian pepperberry extract for soothing and skin-rejuvenating effects.",
        period: "evening",
        image : image_1,
        skinType: "combination skin",
        category: "Toner",
        price: 20,
        quantity: 5,

    },
    {
        _id: "2",
        name: "1004 Skin Centella Toner",
        description: "A gentle PHA toner that soothes, exfoliates, hydrates and brightens in equal measure.",
        image :image_2,
        period: "morning",
        skinType: "sensitive skin",
        category: "Toner",
        price: 20,
        quantity: 5,
    },
    {
        _id: "3",
        name: "Anua Peach 77 Niacin Essence Toner",
        description: "This hydrating toner is formulated with 77% peach extract to leave skin looking flawless with a glowy finish.",
        image :image_3,
        period: "morning",
        skinType: "oily skin",
        category: "Toner",
        price: 20,
        quantity: 5,
    },
    {
        _id: "4",
        name: "1004 Skin Centella Cleanser",
        image :image_4,
        description: "Formulated with baking soda for deep cleansing and 84% Madagascan cica extract for soothing and hydrating benefits.",
        period: "evening",
        skinType: "sensitive skin",
        category: "Cleanser",
        price: 20,
        quantity: 5,
    },
    {
        _id: "5",
        name: "Beauty of Jonson Cleanser",
        image :image_5,
        description: "Infused with plum water, mung bean seed extract and nourishing herbal ingredients.",
        period: "morning",
        skinType: "dry skin",
        category: "Cleanser",
        price: 20,
        quantity: 5,
    },
    {
        _id: "6",
        name: "The Face Shop Cleanser",
        image :image_6,
        description: "Gentle cleanser suitable for normal skin.",
        period: "morning",
        skinType: "normal skin",
        category: "Cleanser",
        price: 20,
        quantity: 5,
    },
    {
        _id: "7",
        name: "InsTree Sun Gel",
        image :image_7,
        description: "Keep harmful UV rays at bay with this watery sun gel that contains eight types of hyaluronic acid to replenish moisture.",
        period: "morning",
        skinType: "dry skin",
        category: "Sunscreen",
        price: 20,
        quantity: 5,
    },
    {
        _id: "8",
        name: "Anua Sunscreen",
        image :image_8,
        description: "This sun cream uses chemical filters for SPF 50+ PA++++ protection with ingredients like houttuynia cordata extract and panthenol.",
        period: "morning",
        skinType: "oily skin",
        category: "Sunscreen",
        price: 20,
        quantity: 5,
    },
    {
        _id: "9",
        name: "Shiseido Sunscreen",
        image :image_9,
        description: "SPF 50 PA++++ sunscreen with a milky lotion texture, combines physical and chemical filters.",
        period: "morning",
        skinType: "sensitive skin",
        category: "Sunscreen",
        price: 20,
        quantity: 5,
    },
    {
        _id: "10",
        name: "AXIS_Y Night Renewal Set",
        image :image_10,
        description: "For overnight nourishment to rejuvenate dull skin, this duo works wonders.",
        period: "evening",
        skinType: "combination skin",
        category: "Night Cream",
        price: 20,
        quantity: 5,
    },
    {
        _id: "11",
        name: "MISSHA Night Cream",
        image :image_11,
        description: "Combat signs of aging with MISSHA’s Time Revolution Night Repair Ampoule Cream 5X.",
        period: "evening",
        skinType: "dry skin",
        category: "Night Cream",
        price: 20,
        quantity: 5,
    },
    {
        _id: "12",
        name: "By WishTrend Night Cream",
        image :image_12,
        description: "This nourishing night cream is perfect for anti-aging beginners.",
        period: "evening",
        skinType: "normal skin",
        category: "Night Cream",
        price: 20,
        quantity: 5,
    },
    {
        _id: "13",
        name: "MediCube Jelly Cream",
        image :image_13,
        description: "Reverse signs of aging with this gel cream containing collagen and elastin for skin elasticity and wrinkle reduction.",
        period: "morning",
        skinType: "combination skin",
        category: "Moisturizer",
        price: 20,
        quantity: 5,
    },
    {
        _id: "14",
        name: "Cosrx Intensive Cream",
        image :image_14,
        description: "Superbly hydrating cream with 3,000ppm sodium hyaluronate for deep moisture and a stronger moisture barrier.",
        period: "morning",
        skinType: "dry skin",
        category: "Moisturizer",
        price: 20,
        quantity: 5,
    },
    {
        _id: "15",
        name: "Mixsoon Bean Cream",
        image :image_15,
        description: "Highly moisturizing cream with fermented soybean extract for balanced oil-moisture levels.",
        period: "morning",
        skinType: "oily skin",
        category: "Moisturizer",
        price: 20,
        quantity: 5,
    },
    {
        _id: "16",
        name: "Anua Niacinamide 10% + TXA 4% Serum",
        image :image_16,
        description: "Formulated with 10% niacinamide and 4% tranexamic acid to fade dark spots and acne scars.",
        period: "evening",
        skinType: "normal skin",
        category: "Serum",
        price: 20,
        quantity: 5,
    },
    {
        _id: "17",
        name: "MediCube Triple Collagen Serum 4.0",
        image :image_17,
        description: "This serum contains Triple Collagen Complex for skin suppleness and a glowing finish.",
        period: "evening",
        skinType: "dry skin",
        category: "Serum",
        price: 20,
        quantity: 5,
    },
    {
        _id: "18",
        name: "APLB Retinol Vitamin C Vitamin E Serum",
        image :image_18,
        description: "Contains 21.6% RETINOL VITA CEN™ with retinol, Vitamin C, and Vitamin E to combat aging, brighten skin, and provide moisturizing and soothing benefits.",
        period: "morning",
        skinType: "combination skin",
        category: "Serum",
        price: 20,
        quantity: 5,
    }
];