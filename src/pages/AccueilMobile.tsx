import Header from '../components/Header';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CardDetails from '../components/CardDetails';
import {getUserTerrain} from '../assets/js/Function';

const AccueilMobile: React.FC = () => {
    const [userData, setUserData] = useState(null);
    const [terrainData, setTerrainData] = useState(null);

    useEffect(() => {
        document.title = 'Accueil - Mobile';
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);

        const fetchData = async () => {
            try {
                const userTerrainData = await getUserTerrain(parsedUserData[0].id);
                setTerrainData(userTerrainData);
            } catch (error) {
                console.error('Error fetching user culture:', error);
            }
        };

        fetchData();
    }, []);

    // console.log('User Data:', userData);

    if (!userData) {
        return null;
    }

    return (
        <div>
            <Header logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='welcome'>
                <div className='welcomeContainer'>
                    <h1>Bienvenue sur FarmGame</h1>
                    <p>Vous êtes actuellement dans le menu mobile de votre partie.<br/>Ici vous pouvez créer un terrain, assigner et créer des parcelles à un terrain et ajouter les types de cultures possibles sur parcelle.<br/>Pour exécuter ces actions, il vous suffit d'appuyer sur l'un des boutons ci-dessous.</p>
                    <section>
                        <Button link='/ajouterTerrain' text ='Ajouter un terrain'/>
                        <Button link='/ajouterParcelle' text ='Ajouter une parcelle'/>
                        <Button link='/ajouterCulturePossible' text ='Ajouter une culture possible'/>
                        <Button link='/modifierTerrain' text ='Modifier un terrain'/>
                    </section>
                </div>
                <div className='listeTerrain'>
                    {terrainData && terrainData.map((terrain) => (
                        <CardDetails key={terrain.idTerrain} pic={`https://farmspring-production.up.railway.app/${terrain.photo}`} description = {terrain.localisation} text1={`Localisation: ${terrain.localisation}`} text2={`Etat : ${terrain.etat === 0 ? 'Non validé' : terrain.etat === 1 ? 'Validé' : terrain.etat}`}/>
                    ))}
                </div>
            </main>
            <Footer id='footer2' copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default AccueilMobile;