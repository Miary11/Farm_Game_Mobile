import Header from '../components/Header';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {getUserTerrain,updateTerrain} from '../assets/js/Function';

const ModifierTerrain: React.FC = () => {
    const [userData, setUserData] = useState(null);
    const [terrainData, setTerrainData] = useState(null);

    const [formData, setFormData] = useState({
        photo: '',
        description: '',
        terrain: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('photo', e.target.photo.files[0]);
        form.append('description', e.target.description.value);
        form.append('terrain', e.target.terrain.value);
        await updateTerrain(form);
    };

    useEffect(() => {
        document.title = 'Modifier un terrain';
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
            <main className='formInsClass'>
                <h1>Modifier un terrain</h1>
                <p className='desc2'>Dans ce menu, vous pouvez modifier un terrain qui vous est propre et qui sera uniquement visible sur votre profil.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                <form method='put' className='Insert' encType="multipart/form-data" onSubmit={handleSubmit}>
                    <p id='InsFirst'>Terrain : 
                        <select name='terrain' value={formData.terrain} onChange={handleInputChange}>
                            {terrainData && terrainData.map((terrain) => (
                                <option key={terrain.idTerrain} value={terrain.idTerrain}>{terrain.idTerrain}</option>
                            ))}
                        </select>
                    </p>
                    <p>Sélectionner une photo : <input type ='file' name = 'photo' onChange={handleInputChange}/></p>
                    <p>Description : <input type = 'text' name='description' value={formData.description} onChange={handleInputChange}/></p>
                    <Button text = 'Valider'/>
                </form>
            </main>
            <Footer id='footer2' copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default ModifierTerrain;