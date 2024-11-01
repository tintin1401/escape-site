import "../../../index.css";
import logo from '../../../assets/imgs/logo-celeste.png';
import play from '../../../assets/imgs/Play.svg';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LanguageSwitcher } from "../../dropdown/LanguageSwitcher";
import { useTranslation } from 'react-i18next';

export function HeaderLanding() {
    const { t } = useTranslation();
    const [isLanguageSwitcherActive, setIsLanguageSwitcherActive] = useState(false);
    const [isLoginMenuVisible, setIsLoginMenuVisible] = useState(false);
    const [isRegisterMenuVisible, setIsRegisterMenuVisible] = useState(false);

    const handleLanguageSwitch = () => {
        setIsLanguageSwitcherActive(!isLanguageSwitcherActive);
    };

    const toggleLoginMenu = () => {
        setIsLoginMenuVisible(!isLoginMenuVisible);
    };

    const toggleRegisterMenu = () => {
        setIsRegisterMenuVisible(!isRegisterMenuVisible);
    };

    return (
        <header className="bg-[url('./assets/imgs/escape.jpg')] bg-cover bg-center text-white">
            <div className=" bg-[url('./assets/imgs/a.svg')] bg-cover p-8">
                <div className={`flex justify-between bg-[#132443] bg-opacity-10 items-center px-8 py-3 ${isLanguageSwitcherActive ? 'rounded-tl-full rounded-tr-full rounded-bl-full rounded-br-none' : 'rounded-full'}`}>
                    <img className="md:w-[7rem] w-[6rem]" src={logo} alt="Logo" />
                    <div className="flex md:gap-8 gap-4">
                        
                        <div className="relative">
                            <span
                                className="text-white md:text-xl text-xs cursor-pointer"
                                onClick={toggleLoginMenu} 
                            >
                                {t('login')}
                            </span>

                            {isLoginMenuVisible && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-[#132443] bg-opacity-10 text-white rounded-lg shadow-lg"
                                >
                                    <NavLink
                                        to="/signIn"
                                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#132443]"
                                        onClick={() => setIsLoginMenuVisible(false)} 
                                    >
                                        {t('Iniciar sesión como Escapista')}
                                    </NavLink>
                                    <NavLink
                                        to="/signInCompanies"
                                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#132443]"
                                        onClick={() => setIsLoginMenuVisible(false)}
                                    >
                                        {t('Iniciar sesión como compañía')}
                                    </NavLink>
                                </div>
                            )}
                        </div>

                        <div className="relative">
                            <span
                                className="text-white md:text-xl text-xs cursor-pointer"
                                onClick={toggleRegisterMenu} 
                            >
                                {t('signup')}
                            </span>


                            {isRegisterMenuVisible && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-48 bg-[#132443] bg-opacity-10 text-white rounded-lg shadow-lg"
                                >
                                    <NavLink
                                        to="/signUpUser"
                                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#132443]"
                                        onClick={() => setIsRegisterMenuVisible(false)} 
                                    >
                                        {t('Registrarse como Escapista')}
                                    </NavLink>
                                    <NavLink
                                        to="/signUpCompanies"
                                        className="block px-4 py-2 hover:bg-gray-200 hover:text-[#132443]"
                                        onClick={() => setIsRegisterMenuVisible(false)} 
                                    >
                                        {t('Registrarse como compañía')}
                                    </NavLink>
                                </div>
                            )}
                        </div>
                        <div onClick={handleLanguageSwitch}>
                            <LanguageSwitcher />
                        </div>
                    </div>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold lg:w-[18ch] mt-20 mb-16 md:mb-28">{t('headerTitle')}</h1>
                <NavLink className="text-white text-3xl font-bold bg-[#132443] bg-opacity-10 px-6 py-4 rounded-full " to="/signUpUser">{t('headerBtn')} <img className="inline-block" src={play} alt="arrow" /></NavLink>
                <h2 className="text-white md:text-7xl text-5xl font-bold md:m-20 mt-8 grid justify-end ">100+ <span className="md:text-3xl text-xl md:ml-4 ml-2 mb-8">{t('activities')}</span></h2>
            </div>
        </header>
    );
}
