import { Navigation } from "react-native-navigation";
import { startApp } from "./App";

Navigation.events().registerAppLaunchedListener(() => {
    startApp();
});