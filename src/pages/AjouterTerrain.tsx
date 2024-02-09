import Header from '../components/Header';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {insertTerrain} from '../assets/js/Function';

const AjouterTerrain: React.FC = () => {
    const [userData, setUserData] = useState(null);

    const [formData, setFormData] = useState({
        user: '',
        description: '',
        localisation: '',
        photo: '',
        creation: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('user', e.target.user.value);
        form.append('description', e.target.description.value);
        form.append('localisation', e.target.localisation.value);
        form.append('photo', e.target.photo.files[0]);
        form.append('creation', e.target.creation.value);
        await insertTerrain(form);
    };

    useEffect(() => {
        document.title = 'Ajouter un terrain';
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
    }, []);

    // console.log('User Data:', userData);

    if (!userData) {
        return null;
    }

    return (
        <div>
            <Header logo = "/assets/img/PNG/Logo.png" description = "Logo"/>
            <main className='formInsClass'>
                <h1>Insérer un terrain</h1>
                <p className='desc2'>Dans ce menu, vous pouvez créer une culture qui vous sera propre et qui sera uniquement visible sur votre profil.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                <form method='post' className='Insert' encType="multipart/form-data" onSubmit={handleSubmit}>
                    <p id='InsFirst'>Description : <input type = 'text' name='description' value={formData.description} onChange={handleInputChange}/></p>
                    <p>Localisation : <input type = 'text' name='localisation' value={formData.localisation} onChange={handleInputChange}/></p>
                    <p>Sélectionner une photo : <input type ='file' name = 'photo' onChange={handleInputChange}/></p>
                    <p>Date de création : <input type = 'date' name='creation' value={formData.creation} onChange={handleInputChange}/></p>
                    <input type='hidden' name='user' value={userData[0].id}/>
                    <Button text = 'Valider'/>
                </form>
            </main>
            <Footer id='footer2' copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default AjouterTerrain;