import { Platform } from "react-native";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
//import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-status-bar-height";
export const wp = (val:any) => widthPercentageToDP(val);
export const hp = (val:any) => heightPercentageToDP(val);
export const statusBarHeight = getStatusBarHeight();
export const isIOS = Platform.OS === "ios";

//export const fontSize = (val) => RFValue(val, 812);
export const isIos = Platform.OS === "ios" ? true : false;