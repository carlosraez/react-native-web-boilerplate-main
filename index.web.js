// import { AppRegistry } from "react-native";
// import App from "./App";

// AppRegistry.registerComponent("App", () => App);

// AppRegistry.runApplication("App", {
//   rootTag: document.getElementById("react-root")
// });

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
if (module.hot) {
  module.hot.accept();
}
AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('react-root'),
});