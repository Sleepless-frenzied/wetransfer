import React from "react";
import { useTranslation } from 'react-i18next';
import {Popper} from "react-popper";


function Home(){
    const { t} = useTranslation();
    //, i18n


    return (
        <div  >
            <div className="">
                <h1>{t("welcome")}</h1>
                <select>
                    <option>test</option>
                    <option>test2</option>
                </select>


            </div>







        </div>
    );
}

export default Home;