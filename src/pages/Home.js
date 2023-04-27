import React from "react";
import { useTranslation } from 'react-i18next';


function Home(){
    const { t} = useTranslation();
    //, i18n


    return (
        <div  >
            <div className=" bg-red-500 dark:bg-blue-600">
                <h1>{t("welcome")}</h1>


            </div>


        </div>
    );
}

export default Home;