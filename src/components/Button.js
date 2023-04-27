import React from 'react'
import i18n from "i18next";
import en_flag from "../img/en_flag.png";
import fr_flag from "../img/fr_flag.png";


import cookies from 'js-cookie';

let lang = 'fr';
let flag = cookies.get('i18next') === 'fr' ? fr_flag : en_flag;
const handleTrans = () => {
    lang =  cookies.get('i18next') === 'fr' ? 'en' : 'fr' ;
    flag = cookies.get('i18next') === 'fr' ? en_flag : fr_flag;
    i18n.changeLanguage(lang);
};

const Button = (props) => {
    return (
        <button onClick={handleTrans} className=' text-white font-[Poppins] py-2 px-6 rounded duration-500'>
            {props.children}
            <img src={flag} alt="change language"
                 className="w-10 h-10 p-0 m-0  rounded-full ring-blue-500 ring-4"/>
        </button>
    )
}

export default Button