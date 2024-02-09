import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import AccueilMobile from './pages/AccueilMobile';
import AjouterTerrain from './pages/AjouterTerrain';
import AjouterParcelle from './pages/AjouterParcelle';
import AjouterParcelleCulturePossible from './pages/AjouterParcelleCulturePossible';
import ModifierTerrain from './pages/ModifierTerrain';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route> */}
        <Route path="/" component={Connexion} exact />
        <Route path="/inscription" component={Inscription} exact />
        <Route path="/accueilMobile" component={AccueilMobile} exact />
        <Route path="/ajouterTerrain" component={AjouterTerrain} exact />
        <Route path="/ajouterParcelle" component={AjouterParcelle} exact />
        <Route path="/ajouterCulturePossible" component={AjouterParcelleCulturePossible} exact />
        <Route path="/modifierTerrain" component={ModifierTerrain} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
