import { SignUpCompanies } from "./components/auth/SignUpCompanies";
import { Routes, Route, Navigate } from "react-router-dom";
import { SignUpUsers } from "./components/auth/SignUpUsers";
import { Landing } from "./components/routes/Landing";
import { SignIn } from "./components/auth/SignIn";
import { SignInCompanies } from "./components/auth/SignInCompanies";
import logo from "./assets/imgs/Place1.jpg";
import { CardLocation } from "./components/cards/CardLocation";
import { Home } from "./components/routes/Home";
import { AccountSettings } from "./components/profile/AccountSettings"
import { AccountSettingsCompany } from "./components/profile/AccountSettingsCompany"
import { MapPage } from './components/map/MapPage';
import {PersonalInformation} from "./components/profile/PersonalInformation"
import {PersonalInformationCompany} from "./components/profile/PersonalInformationCompany"
import { InformationCompany } from "./components/profile/InformationCompany.jsx";
import { SearchResults } from "./components/routes/SearchResults";
import { ForgotPassword } from './components/password/ForgotPassword.jsx';
import { ForgotPasswordCompany } from './components/password/ForgotPasswordCompany.jsx';
import { ComponentProvider } from './components/hooks/useComponentContext.jsx';
import { CreatePost } from "./components/routes/CreatePost.jsx";
import { Categories } from "./components/routes/Categories.jsx";
import { Favorites } from "./components/routes/Favorites.jsx";
import { UpdatePost } from "./components/routes/UpdatePost.jsx";
import { RouteMap } from "./components/map/RouteMap";
import { AppProvider  } from "./context/AppContext.jsx";


export function App() {

 

    return (

        <AppProvider>
        <ComponentProvider >
            <Routes className="dark:bg-[#2a2a2a]">
                <Route path="/" element={<Landing />} /> 
                <Route path="/Card" element={<CardLocation image={logo} name="Soda Maria" city="Esparza Centro" starts="4.2"/>} />  
                <Route path="/signUpCompanies" element={<SignUpCompanies />} /> 
                <Route path="/signUpUser" element={<SignUpUsers/>} />
                <Route path="/Categories" element={<Categories />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signInCompanies" element={<SignInCompanies />} />
                <Route path="/home" element={<Home />} />
                <Route path="/accountSettings" element={<AccountSettings />} />
                <Route path="/accountSettingsCompany" element={<AccountSettingsCompany />} />
                <Route path="/PersonalInformation" element={<PersonalInformation  />} />
                <Route path="/PersonalInformationCompany" element={<PersonalInformationCompany  />} />
                <Route path="/InformationCompany" element={<InformationCompany  />} />
                <Route path="/map" element={<MapPage />} /> 
                <Route path="/mapWithRoute" element={<RouteMap />} /> 
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/forgot-password-company" element={<ForgotPasswordCompany />} />
                <Route path="/favorites" element={<Favorites  />} />

                <Route path="/create-post" element={<CreatePost />} />
                <Route path="/update-post/:id" element={<UpdatePost />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </ComponentProvider>
        </AppProvider>
    )
}

