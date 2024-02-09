import HeaderSub from '../components/HeaderSub';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {insertUser} from '../assets/js/Function';

const Inscription: React.FC = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        naissance: '',
        mail: '',
        mdp: '',
        pseudo: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await insertUser(formData.nom, formData.prenom, formData.naissance, formData.mail, formData.mdp, formData.pseudo);
    };

    useEffect(() => {
        document.title = 'S\'inscrire';
    }, []);

    return (
        <div>
            <HeaderSub logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='formClass'>
                <h1>S'inscrire</h1>
                <p className='desc'>Bienvenue sur Farm Game : le jeu de simulation de culture sur terrain.<br/>Sur ce site, vous êtes libre de personnaliser votre expérience à volonté en allant de créer vos cultures jusqu’à interagir avec d’autres utilisateurs.</p>
                <form method='post' className='login2' onSubmit={handleSubmit}>
                    <p id='First'>Nom : <input type='text' name='nom' value={formData.nom} onChange={handleInputChange}/></p>
                    <p>Prénom : <input id='pr' type='text' name='prenom' value={formData.prenom} onChange={handleInputChange}/></p>
                    <p>Date de naissance : <input id='dN' type='date' name='naissance' value={formData.naissance} onChange={handleInputChange}/></p>
                    <p>Mail : <input id='ma' type='mail' name='mail' value={formData.mail} onChange={handleInputChange}/></p>
                    <p>Mot de passe : <input id='mdp' type='password' name='mdp' value={formData.mdp} onChange={handleInputChange}/></p>
                    <p>Pseudo : <input id='ps' type='text' name='pseudo' value={formData.pseudo} onChange={handleInputChange}/></p>
                    <Button text = 'Valider'/>
                </form>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default Inscription;