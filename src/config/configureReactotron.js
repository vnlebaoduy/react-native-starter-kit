import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking
} from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import apisaucePlugin from "reactotron-apisauce";

console.disableYellowBox = true; // eslint-disable-line no-console

const reactotron = Reactotron.configure({
  name: "ReactNativeStarterKit"
})
  .useReactNative()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .use(apisaucePlugin())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking());

if (__DEV__) {
  reactotron.connect();
  reactotron.clear();
  console.tron = Reactotron; // eslint-disable-line no-console
}

export default reactotron;
