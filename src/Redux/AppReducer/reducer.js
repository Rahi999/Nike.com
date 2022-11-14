import { 
    ADD_TO_CART,
    KIDS_SHOES_FAILURE,
    KIDS_SHOES_LOADING,
    KIDS_SHOES_SUCCESS,
    MEN_CLOTHING_FAILURE,
    MEN_CLOTHING_LOADING,
    MEN_CLOTHING_SUCCESS,
    MEN_SHOES_FAILURE,
    MEN_SHOES_LOADING,
    MEN_SHOES_SUCCESS,
    WOMEN_CLOTHING_FAILURE,
    WOMEN_CLOTHING_LOADING,
    WOMEN_CLOTHING_SUCCESS,
    WOMEN_SHOES_FAILURE,
    WOMEN_SHOES_LAODING,
    WOMEN_SHOES_SUCCESS

} from "./actionType";

const initState = {
    menClothes : [],
    menShoes : [],
    womenClothes : [],
    womenShoes : [],
    kidsShoes : [],
    cartItems: [],
    menClothesLoading : false,
    menClothesError : false,
    menShoesLoading : false,
    menShoesError : false,
    womenClothesLoading : false,
    womenClothesError : false,
    womenShoesLoading : false,
    womenShoesError : false,
    kidsShoesLoading : false,
    kidsShoesError : false,
    carouselData : [
        {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/d5f84f54-480d-4186-a0ea-3fea15f59d67\/air-force-1-high-se-shoes-6b703K.png",
            "title": "Women's Shoes",
            "color": "2 Colours",
            "price": "11 295",
            "id": 1
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/66aa646c-0b5b-49b8-b56c-5a919e428b00\/court-vision-mid-shoe-BRbtzJ.png",
            "title": "Women's Shoe",
            "color": "1 Colour",
            "price": "5 995",
            "id": 2
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/65e8933a-0779-4a62-b914-4ae96cd4c854\/air-force-1-07-next-nature-shoes-Kwpn0q.png",
            "title": "Women's Shoes",
            "color": "4 Colours",
            "price": "8 895",
            "id": 3
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/0e3f1cb7-e139-4a3b-b58e-9cb8b319d228\/air-force-1-fontanka-shoes-sJrqz3.png",
            "title": "Women's Shoes",
            "color": "5 Colours",
            "price": "10 447",
            "id": 4
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/91f481e7-5887-454a-8d04-c485c70052fe\/air-force-1-pltaform-shoes-pwWPHX.png",
            "title": "Women's Shoes",
            "color": "4 Colours",
            "price": "8 695",
            "id": 5
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/808fb7a1-a6be-4a26-815b-dcde515adec1\/air-force-1-07-shoes-KJhDMJ.png",
            "title": "Women's Shoes",
            "color": "1 Colour",
            "price": "9 695",
            "id": 6
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/1d317a3b-b511-454f-a940-b931125ee25f\/air-force-1-shadow-shoes-mN8Glx.png",
            "title": "Women's Shoes",
            "color": "3 Colours",
            "price": "8 995",
            "id": 7
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/52256ee1-146d-494b-b449-a8522185343f\/dunk-low-shoes-r8QXCd.png",
            "title": "Women's Shoes",
            "color": "3 Colours",
            "price": "8 295",
            "id": 8
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/1f3c4476-8c68-4e0f-af4d-ebc3a0528e29\/blazer-low-77-se-shoes-QZvPdl.png",
            "title": "Women's Shoes",
            "color": "1 Colour",
            "price": "8 167",
            "id": 9
           },
           {
            "image": "https:\/\/static.nike.com\/a\/images\/c_limit,w_592,f_auto\/t_product_v1\/628d6169-0414-4587-8899-c71b35dc1c90\/nikecourt-legacy-next-nature-shoes-rdTfqH.png",
            "title": "Women's Shoes",
            "color": "5 Colours",
            "price": "5 695",
            "id": 10
           }
    ]
}

export const reducer = (state=initState, {type,payload}) => {
    switch(type) {
        // Cases For MenClothing Data
        case MEN_CLOTHING_LOADING : {
            return {
                ...state,
                menClothesLoading : true,
                menClothesError : false
            }
        }
        case MEN_CLOTHING_FAILURE : {
            return {
                ...state,
                menClothesLoading : false,
                menClothesError : true
            }
        }
        case MEN_CLOTHING_SUCCESS : {
            return {
                ...state,
                menClothesLoading : false,
                menClothesError : false,
                menClothes : [...payload]
            }
        }
        //  Cases For menShoes Data
        case MEN_SHOES_LOADING : {
            return {
                ...state,
                menShoesLoading : true,
                menShoesError : false
            }
        }
        case MEN_SHOES_FAILURE : {
            return{
                ...state,
                menShoesLoading : false,
                menShoesError : true
            }
        }
        case MEN_SHOES_SUCCESS : {
            return {
                ...state,
                menShoesLoading: false,
                menShoesError : false,
                menShoes : [...payload]
            }
        }
        // Cases For Women_Clothing Data
        case WOMEN_CLOTHING_LOADING : {
            return {
                ...state,
                womenClothesLoading : true,
                womenClothesError : false
            }
        }
        case WOMEN_CLOTHING_FAILURE : {
            return {
                ...state,
                womenClothesLoading : false,
                womenClothesError : true
            }
        }
        case WOMEN_CLOTHING_SUCCESS : {
            return {
                ...state,
                womenClothesLoading : false,
                womenClothesError : false,
                womenClothes : [...payload]
            }
        }
        // Cases Women_Shoes Data
        case WOMEN_SHOES_LAODING : {
            return {
                ...state,
                womenShoesLoading : true,
                womenShoesError  : false,
            }
        }
        case WOMEN_SHOES_FAILURE : {
            return {
                ...state,
                womenShoesLoading: false,
                womenShoesError : true
            }
        }
        case WOMEN_SHOES_SUCCESS : {
            return {
                ...state,
                womenShoesLoading : false,
                womenShoesError : false,
                womenShes : [...payload]
            }
        }
        // Cases For Kids Shoes Data
        case KIDS_SHOES_LOADING : {
            return {
                ...state,
                kidsShoesLoading : true,
                kidsShoesError : false
            }
        }
        case KIDS_SHOES_FAILURE : {
            return {
                ...state,
                kidsShoesLoading : false,
                kidsShoesError : true
            }
        }
        case KIDS_SHOES_SUCCESS : {
            return {
                ...state,
                kidsShoesLoading : false,
                kidsShoesError : false,
                kidsShoes : [...payload]
            }
        }
        case ADD_TO_CART : {
            return {
                ...state,
                cartItems : [...payload]
            }
        }
        default : return state;
    }
}