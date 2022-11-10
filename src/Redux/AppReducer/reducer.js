const initState = {
    menClothes : [],
    menShoes : [],
    womenClothes : [],
    womenShoes : [],
    kidsShoes : [],
    menClothesLoading : false,
    menClothesError : false,
    menShoesLoading : false,
    menShoesError : false,
    womenClothesLoading : false,
    womenClothesError : false,
    womenShoesLoading : false,
    womenShoesError : false,
    kidsShoesLoading : false,
    kidsShoesError : false
}

export const reducer = (state=initState, {type,payload}) => {
    switch(type) {
        default : return state;
    }
}