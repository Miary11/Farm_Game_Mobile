import HeaderSub from '../components/HeaderSub';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {checkLogin} from '../assets/js/Function';

const Connexion: React.FC = () => {
    const [formData, setFormData] = useState({
        mail: 'leTest@gmail.com',
        motDePasse: 'test',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await checkLogin(formData.mail, formData.motDePasse);
    };

    useEffect(() => {
        document.title = 'Se connecter';
    }, []);

    return (
        <div>
            <HeaderSub logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='formClass'>
                <h1>Se Connecter</h1>
                <p className='desc'>Bienvenue sur Farm Game : le jeu de simulation de culture sur terrain.<br/>Sur ce site, vous êtes libre de personnaliser votre expérience à volonté en allant de créer vos cultures jusqu’à interagir avec d’autres utilisateurs.</p>
                <form method='get' className='login' onSubmit={handleSubmit}>
                    <p className='First'>Mail : <input type='mail' name='mail' value={formData.mail} onChange={handleInputChange}/></p>
                    <p>Mot de passe : <input id='pwd' type='password' name='motDePasse' value={formData.motDePasse} onChange={handleInputChange}/></p>
                    <p className='link'><a href='/inscription'>Vous n’avez pas de compte ? Inscrivez-vous en appuyant ici</a></p>
                    <Button text='Valider'/>
                </form>
            </main>
            <Footer copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default Connexion;