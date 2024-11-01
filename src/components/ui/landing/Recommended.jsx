import "../../../index.css";
import { RecommendedCard } from "../../cards/RecommendedCard";
import Place1 from '../../../assets/imgs/Place1.jpg';
import Place2 from '../../../assets/imgs/Place2.jpg';
import Place3 from '../../../assets/imgs/Place3.jpg';
import Place4 from '../../../assets/imgs/Place4.jpg';
import { useTranslation } from 'react-i18next';

export function Recommended() {
    const { t } = useTranslation();
    return (
        <div className="lg:p-12 p-8">
            <h1 className="text-white lg:text-[2rem] text-2xl font-bold text-center">{t('recommendations')}</h1>
            <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] lg:pt-12 pt-8">
                <RecommendedCard image={Place1}name={t('placeName')} city="PUNTARENAS"/>
                <RecommendedCard image={Place2}name={t('placeName')} city="PUNTARENAS"/>
                <RecommendedCard image={Place3}name={t('placeName')} city="PUNTARENAS"/>
                <RecommendedCard image={Place4}name={t('placeName')} city="PUNTARENAS"/>
            </div>
        </div>
    )
}