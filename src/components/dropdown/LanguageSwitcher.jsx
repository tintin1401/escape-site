import "../../index.css";
import { useTranslation } from 'react-i18next';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>

            <Menu as="div" className="relative items-center">
                <div>
                    <MenuButton className="flex w-full justify-center bg-none border-none text-white md:text-xl text-xs">
                    {t('language')}
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-[-2rem] bg-[#132443] bg-opacity-10 rounded-b-2xl mt-5 z-10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-2 px-8 rounded-md">
                        <MenuItem>
                            <button className="block text-white md:text-xl text-xs" onClick={() => changeLanguage('en')}>
                            {t('English')}
                            </button>
                        </MenuItem>
                        <MenuItem>
                            <button className="block py-2 text-white md:text-xl text-xs" onClick={() => changeLanguage('es')}>
                            {t('Spanish')}
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

        </>
    )
}