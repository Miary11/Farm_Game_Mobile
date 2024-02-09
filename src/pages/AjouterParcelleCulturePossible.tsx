import Header from '../components/Header';
import React, { useEffect,useState } from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {getUserParcelles,insertParcelleCulturePossible} from '../assets/js/Function';

const AjouterCulturePossible: React.FC = () => {
    const [userData, setUserData] = useState(null);
    const [parcelleData, setParcelleData] = useState(null);
    const [typeData, setTypeData] = useState(null);

    const [formData, setFormData] = useState({
        parcelle: '',
        type: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('parcelle', e.target.parcelle.value);
        form.append('type', e.target.type.value);
        await insertParcelleCulturePossible(form);
    };

    useEffect(() => {
        document.title = 'Ajouter une parcelle';
        const userDataString = localStorage.getItem('userData');
        const parsedUserData = JSON.parse(userDataString);
        setUserData(parsedUserData);
        const typeDataString = localStorage.getItem('typeData');
        const parsedTypeData = JSON.parse(typeDataString);
        setTypeData(parsedTypeData);

        const fetchData = async () => {
            try {
                const userParcelleData = await getUserParcelles(parsedUserData[0].id);
                setParcelleData(userParcelleData);
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
                <h1>Insérer une culture possible</h1>
                <p className='desc2'>Dans ce menu, vous pouvez ajouter une culture possible qui vous sera propre et qui sera uniquement visible sur votre profil.<br/>Pour faire cela veuillez remplir les champs ci-dessous.</p>
                <form method='post' className='Insert' encType="multipart/form-data" onSubmit={handleSubmit}>
                    <p id='InsFirst2'>Parcelle : 
                        <select name='parcelle' value={formData.parcelle} onChange={handleInputChange}>
                            {parcelleData && parcelleData.map((parcelle) => (
                                <option key={parcelle.idParcelle} value={parcelle.idParcelle}>{parcelle.idParcelle}</option>
                            ))}
                        </select>
                    </p>
                    <p>Type : 
                            <select name='type' value={formData.type} onChange={handleInputChange}>
                            {typeData.map((type) => (
                                <option key={type.idType} value={type.idType}>{type.nom}</option>
                            ))}
                            </select>
                        </p>
                    <Button text = 'Valider'/>
                </form>
            </main>
            <Footer id='footer2' copyright = "© Tous droits réservés. Farm Game 2024"/>
        </div>
    );
}

export default AjouterCulturePossible;