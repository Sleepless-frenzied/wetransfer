import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import {useNavigate} from 'react-router-dom';


function About(){

    const { t} = useTranslation();
    const optionsCellar = [
        { label: t("aboveground") },
        { label: t("semi_buried") },
        { label: t("buried") },
    ];
    const optionsTemp = [
        { label: "12 C°" },
        { label: "13 C°" },
        { label: "14 C°" },
        { label: "15 C°" },
        { label: "16 C°" },
    ];
    const optionsFloor = [
        { label: t("expanded_polystyrene") },
        { label: t("extruded_polystyrene") },
        { label: t("polyurethane") },
        { label: t("concrete_only") },
        { label: t("brick_only") },
        { label: t("clay") },
    ];
    const optionsCeiling = [
        { label: t("expanded_polystyrene") },
        { label: t("extruded_polystyrene") },
        { label: t("polyurethane") },
        { label: t("concrete_only") },
        { label: t("brick_only") },
        { label: t("clay") },
    ];
    
    function Dropdown({ name, text, options, CN, value, handleChange }) {
        return (
            <div className={CN}>
                <div className={"grid grid-rows border-2 dark:border-darkDivi dark:divide-darkDivi border-lightDivi divide-lightDivi"}>
                    <div className="grid grid-cols-9 divide-x-2 dark:border-darkDivi dark:divide-darkDivi border-lightDivi divide-lightDivi ">
                        <p className=" col-span-5 py-1.5">{text}</p>
                        <select
                            className=" col-span-4 text-black"
                            placeholder={"test"}

                            name={name}
                            value={value}
                            onChange={handleChange}
                        >
                            {options.map((item) => {
                                return (
                                    <option key={item.index} name={name} value={item.label}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }

    const [details, setDetails] = useState({
        name: "",
        Cellar: "Aboveground",
        Temp:"12 C°",

        FloorMaterial:"Polyurethane",
        FloorThick:"1",

        CeilingMaterial:"Polyurethane",
        CeilingThick:"1",

    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };


    console.log(details);


    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(details);
        navigate('/contacts', {
            state : {details: details}
        });
    };


    const isEnabled = Object.values(details).every(Boolean);

    return (

        <>
            <br className={"select-none"}/>

            <form onSubmit={handleSubmit} className={"m-6"}>
                <div className={"shadow-xl dark:bg-darkModule bg-lightModule text-black dark:text-darkTxt  w-full  md:w-1/3 2xl:w-1/5"}>
                    <div className=" grid gird-cols mx-2 my-2  ">
                        <span className={"h-2.5"}></span>


                        <Dropdown
                            name={"Cellar"}
                            options={optionsCellar}
                            value={details.Cellar}
                            text={t("your_cellar_is")}
                            CN={""}
                            handleChange={handleChange}
                        />
                        <span className={"h-3"}></span>
                        <Dropdown
                            name={"Temp"}
                            options={optionsTemp}
                            value={details.Temp}
                            text={t("desired_temperature")}
                            CN={""}
                            handleChange={handleChange}
                        />

                        <div>
                            <h3 className={""}>{t("your_floor_settings")}</h3>
                            <hr className={"dark:border-darkHR border-lightHR my-2.5"}/>
                            <Dropdown
                                name={"FloorMaterial"}
                                options={optionsFloor}
                                value={details.FloorMaterial}
                                text={t("material")}
                                CN={""}
                                handleChange={handleChange}
                            />

                            {/*TODO Problem here with input*/}
                            <div className={"my-1.5 "}>
                                <label className={" grid grid-cols-7 divide-x-2  border-2 dark:border-darkDivi dark:divide-darkDivi border-lightDivi divide-lightDivi"}>
                                    <p className={" col-span-3"}>{t("thickness")}</p>
                                    <input
                                        className={"col-span-3 text-black"}
                                        type="number"
                                        name="FloorThick"
                                        value={details.FloorThick}
                                        onChange={handleChange}
                                        min="10"
                                        max="1000"
                                    />
                                    <p>mm</p>
                                </label>
                            </div>
                        </div>


                        {/*Your ceiling settings*/}
                        <div>
                            <h3 className={""}>{t("your_ceiling_settings")}</h3>
                            <hr className={"dark:border-darkHR border-lightHR my-2.5"}/>
                            <Dropdown
                                name={"CeilingMaterial"}
                                options={optionsCeiling}
                                value={details.CeilingMaterial}
                                text={t("material")}
                                CN={""}
                                handleChange={handleChange}
                            />

                            <div className={"my-1.5    "}>
                                <label className={" grid grid-cols-7 divide-x-2  border-2 dark:border-darkDivi dark:divide-darkDivi border-lightDivi divide-lightDivi"}>
                                    <p className={" col-span-3"}>{t("thickness")}</p>
                                    <input
                                        className={"col-span-3 text-black"}
                                        type="number"
                                        name="CeilingThick"
                                        value={details.CeilingThick}
                                        onChange={handleChange}
                                        min="10"
                                        max="1000"
                                    />
                                    <p>mm</p>
                                </label>
                            </div>
                        </div>

                    </div>
                </div>





                <label>
                    Enter your name:
                    <input
                        className={"text-black"}
                        type="text"
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                        autocomplete="off"
                    />
                </label>


                <button
                    type="submit"
                    disabled={!isEnabled}
                    className={"dark:bg-darkButton bg-lightButton p-2.5 disabled:opacity-75"}
                >
                    {t("define_windows")}

                </button>


            </form>

        </>
    );



}


export default About;


