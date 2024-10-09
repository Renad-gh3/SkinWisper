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
