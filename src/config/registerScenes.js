import { Navigation } from 'react-native-navigation';
import sceneWrapper from 'config/sceneWrapper';
import {
  splashScene, authScene, signUpScene, signOutScene, drawerComponentScene,
} from 'scenes/constants';
import Splash from 'scenes/Splash';
import Auth from 'scenes/Auth';
import SignUp from 'scenes/SignUp';
import SignOut from 'scenes/SignOut';
import Drawer from 'scenes/Drawer';

export default function registerScenes() {
  Navigation.registerComponentWithRedux(splashScene.id, () => sceneWrapper(Splash, splashScene));
  Navigation.registerComponentWithRedux(authScene.id, () => sceneWrapper(Auth, authScene, true));
  Navigation.registerComponentWithRedux(signUpScene.id, () => sceneWrapper(SignUp, signUpScene, true));
  Navigation.registerComponentWithRedux(signOutScene.id, () => sceneWrapper(SignOut, signOutScene));
  Navigation.registerComponentWithRedux(drawerComponentScene.id, () => sceneWrapper(Drawer, Drawer));
}
