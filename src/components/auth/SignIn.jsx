import "../../index.css";
import { AuthInput } from "../inputs/AuthInput";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthCarousel } from "./AuthCaruosel";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useUser } from "../../context/UserContext.jsx";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import logo from "../../assets/imgs/logoCeleste.png";

export function SignIn() {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { user, setUser } = useUser();
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateFields = () => {
        let isValid = true;

        if (!email) {
            setEmailError(true);
            isValid = false;
        } else {
            setEmailError(false);
        }

        if (!password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        return  isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!validateFields()) {
            setShowError(true);
            setShowSuccess(false);
            return;
        }

        setShowError(false);

        const response = await fetch('https://myescape.online/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        });
        //const content = await response.json();
        //console.log(content);

        const data = await response.json();

        if (response.ok) {
            setShowError(false);
            setShowSuccess(true);
            setUser(data.user);
            console.log(data.user);
            setTimeout(() => {
                navigate('/home');
            }, 2500);
        }
        else 
        {
            setShowSuccess(false);
            setShowError(true);
        }
    };

    return (
        <div className="grid justify-center items-center h-[100vh] md:grid-cols-2 gap-4">
        <div className="flex justify-center items-center">
            <form className="w-full lg:w-2/4 " onSubmit={handleSubmit}>
                <img className="w-[15rem] mx-auto mt-8 mb-16 " src={logo} alt="Logo" />
                <h2 className="text-3xl font-bold text-center mb-8 text-sky-500">Sing In</h2>
                <AuthInput name="email" placeholder={t('iEmail')} type="email" onChange={e => setEmail(e.target.value)} className="{emailError ? 'border-red-500' : ''}"/> {emailError && <p className="text-red-500 text-sm mb-5">Este campo es obligatorio</p>}
                <AuthInput name="password" placeholder={t('iPassword')} type="password" onChange={e => setPassword(e.target.value)} className="{passwordError ? 'border-red-500' : ''}"/> {passwordError && <p className="text-red-500 text-sm mb-5">Este campo es obligatorio</p>}
                <div className="text-right">
                    <NavLink className="text-sky-500 font-medium" to="/forgot-password">{t('forgotPassword')}</NavLink>
                </div>

                <input
                    className="text-white p-3 bg-sky-500 flex rounded-xl items-center justify-center w-full lg:my-8 my-10 font-bold text-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:bg-blue-800 hover:text-white"
                    type="submit"
                    name="btn-signip"
                    value={t('iSignIn')}
                />

                <p className="text-gray-400 text-center">{t('goSignUp')}
                    <NavLink className="text-sky-500 ml-2 font-medium" to="/signUpUser">{t('createAccount')}</NavLink>
                </p>
            </form> 

            
        </div>

        <AuthCarousel />

        {showSuccess && (
            <Alert severity="success" className="absolute top-4 right-4">
                <AlertTitle>Éxito</AlertTitle>
                ¡Inicio de sesión correctamente! Serás redirigido en breve.
            </Alert>
        )}

        {showError && (
            <Alert severity="error" className="absolute top-4 right-4">
                <AlertTitle>Error</AlertTitle>
                ¡Error! Credenciales inválidas, por favor introduce las correctas.
            </Alert>
        )}

        </div>
    );
}