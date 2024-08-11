import briyaniImage from '../images/briyani.jpeg';
import chickenImage from '../images/chicken.jpeg';
import sambarImage from '../images/sambar.jpeg';
import pulaoImage from '../images/pulao.jpeg';
import Panner from '../images/pannermasal.jpeg';
import naan from '../images/butternaan.jpg';
import rasam from '../images/rasam.jpg';
import chicken65 from '../images/chicken65.jpg';
import potatofry from '../images/potatofry.jpg';
import Channa from '../images/channa.jpg'
import mutton from '../images/muttonbriyani.jpg'
import curd from '../images/curd.webp'
import kunafa from '../images/kunafa.jpeg'
import jamun from '../images/jamun.jpg'
import coconut from '../images/coconut.jpg'
import rasmalai from '../images/rasmalai.webp'
import mysorepak from '../images/mysorepak.jpeg'
import tiramisu from '../images/tiramisu.jpeg'
import kesri from '../images/kesri.jpeg'
import halwa from '../images/halwa.jpeg'
import ctikka from '../images/ctikka.jpg'
import cnoodles from '../images/cnoodles.jpg'
import rasgula from '../images/rasgula.jpeg'
import lemon from '../images/lemon.jpeg'
const RecipesData = [
    {
        id: 'briyani',
        title: 'Briyani',
        image: briyaniImage,
        description: 'Biryani is a mixed rice dish, mainly popular in South Asia.',
        ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
        instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
    },
    {
        id: 'chicken-curry',
        title: 'Chicken Curry',
        image: chickenImage,
        description: 'Chicken curry is a South Asian dish originating from the Indian subcontinent.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
    },
    {
        id: 'sambar',
        title: 'Sambar',
        image: sambarImage,
        description: 'Sambar is a popular dish in South Indian cuisine.',
        ingredients: ['Lentils', 'Tamarind', 'Vegetables', 'Spices', 'Mustard Seeds', 'Curry Leaves'],
        instructions: 'Cook lentils separately. Prepare tamarind extract. Cook vegetables with spices, add tamarind and lentils. Simmer until flavors blend.'
    },
    {
        id: 'pulao',
        title: 'Pulao',
        image: pulaoImage,
        description: 'Pulao is a delicious one-pot Indian dish made with rice, vegetables, spices, and herbs.',
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'panner',
        title: 'Panner Butter Masala',
        image: Panner,
        description: "This paneer butter masala is a curry lover's dream!! Soft paneer dunked in a creamy, silky, super flavorful and delicious curry.",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'butter naan',
        title: 'Butter Naan',
        image: naan,
        description: "Naan is a single-layer bread with a light and slightly fluffy texture and golden-brown spots from the baking process. ",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'jamun',
        title: 'Gulab Jamun',
        image: jamun,
        description: ' It is a milk-solid-based sweet from the Indian subcontinent, popular in India. It is made mainly from milk solids, traditionally from Khoya, which is milk reduced to the consistency of a soft dough.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
    },
    {
        id: 'mysorepak',
        title: 'Mysore Pak',
        image: mysorepak,
        description: 'Mysore pak is an Indian sweet prepared in ghee. It originated in the city of Mysore, one of the major cities in the Indian state of Karnataka. ',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
    },
    {
        id: 'ctikka',
        title: 'Chiken Tikka',
        image: ctikka,
        description: 'Chicken tikka, a delicious Indian appetizer! Marinated chicken cubes (aka kebabs), threaded on skewers and grilled to perfection.',
        ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
        instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
    },
    {
        id: 'cnoodles',
        title: 'Chicken Noodles',
        image: cnoodles,
        description: 'Chicken noodles are a delicious flavor packed meal of stir fried noodles, chicken, vegetables and sauces.',
        ingredients: ['Rice', 'Chicken', 'Spices', 'Onions', 'Yogurt'],
        instructions: 'Cook rice separately. Marinate chicken with spices and yogurt. Fry onions, add marinated chicken, and cook until done. Layer cooked rice and chicken, cook on low heat.'
    },
    {
        id: 'kunafa',
        title: 'Kunafa',
        image: kunafa,
        description: 'Kunafa- A traditional, Middle Eastern dessert made with fine semolina dough, soaked in sweet, sugar-based syrup, then layered with cheese, or with ingredients such as cream and nuts.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
    },
    {
        id: 'rasmalai',
        title: 'Rasmalai',
        image: rasmalai,
        description: 'Ras malai consists of flattened balls of chhena soaked in malai (a type of clotted cream) flavoured with cardamom.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
    },
    {
        id: 'potato fry',
        title: 'Potato Fry',
        image: potatofry,
        description: "Potato fry is an Indian side dish made with potatoes, spices and herbs. Also known as aloo fry.",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'chicken 65',
        title: 'Chicken 65',
        image:chicken65,
        description: "Chicken 65 is a South Indian deep fried chicken appetizer, originated in Hotel Buhari in Chennai.",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'rasam',
        title: 'Rasam',
        image: rasam,
        description: "Rasam, a soup of spices, is a traditional South Indian food. It is traditionally prepared using tamarind juice .",
        ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper','Garlic','Cumin','Curry leaves','Coriander','Mustard','Sea salt','Water'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'mutton briyani',
        title: 'Mutton Briyani',
        image:mutton,
        description: "Mutton Biryani is a royal dish with beautifully spiced and fragrant layers of biryani rice centered with juicy, tender mutton.",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'curd rice',
        title: 'Curd Rice',
        image: curd ,
        description: "Curd Rice is a South Indian dish where soft cooked mushy rice is simply mixed with curd (Indian yogurt) and salt. ",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'lemon rice',
        title: 'Lemon Rice',
        image: lemon ,
        description: "Lemon rice recipe also known as chitrannna or nimmakaya pulihora is a South Indian dish made with rice, tempering spices & curry leaves.",
        ingredients: ['Rice', 'Vegetables', 'Spices', 'Onions', 'Ginger', 'Garlic'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'tiramisu',
        title: 'Tiramisu',
        image: tiramisu,
        description: "Tiramisu is an Italian dessert that has layers of coffee-soaked ladyfingers and a cream made from mascarpone, eggs and sugar.",
        ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper','Garlic','Cumin','Curry leaves','Coriander','Mustard','Sea salt','Water'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
    },
    {
        id: 'chana-masala',
        title: 'Chana Masala',
        image: Channa,
        description: 'Chana masala is a North Indian curried dish made with white chickpeas, onions, tomatoes, spices and herbs. Chana is a Hindi word for Chickpeas and Masala here refers to a spiced gravy.',
        ingredients: ['Chickpeas', 'Onions', 'Tomatoes', 'Spices', 'Ginger', 'Garlic'],
        instructions: 'Cook chickpeas with onions, tomatoes, and spices to make a flavorful curry.'
      },
      {
        id: 'kesari',
        title: 'Kesari',
        image: kesri,
        description: 'Kesari is a pudding like sweet that is good to look at as it is to eat. To make this delicious sweet dish the rava is roasted/toasted in ghee',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
      },
      {
        id: 'halwa',
        title: 'Halwa',
        image: halwa,
        description: 'Halwa is said to have originated in the Middle East and the word comes from Arabic which means “sweet” & is a confectionary.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
      },
      {
        id: 'rasgula',
        title: 'Rasgula',
        image: rasgula,
        description: 'Rasgulla is a milk based sweet made by curdling milk, draining the whey and kneading the milk solids to make balls.',
        ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Spices', 'Garlic', 'Ginger'],
        instructions: 'Fry onions until golden. Add garlic and ginger, cook briefly. Add tomatoes and spices, cook until oil separates. Add chicken, cook until done.'
      },
      {
        id: 'coconut burfi',
        title: 'Coconut Burfi',
        image: coconut,
        description: "Coconut burfi recipe, or thengai burfi is very easy to make with just two main ingredients. No sugar syrup consistency required.",
        ingredients: [' chilly pepper', 'Tamarind juice', 'Tomato', 'Onions', 'Turmeric', 'Pepper', 'Garlic', 'Cumin', 'Curry leaves', 'Coriander', 'Mustard', 'Sea salt', 'Water'],
        instructions: 'Fry onions, garlic, and ginger. Add spices and vegetables, cook briefly. Add rice and water, cook until rice is done.'
      },
];

export default RecipesData;
