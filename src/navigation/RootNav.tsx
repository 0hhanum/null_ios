import React, { useEffect } from "react";
import RootTabNav from "./RootTabNav";
import RootStackNav from "./RootStackNav";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { setNotificationListener } from "notifications/notification";
import { getAdId } from "ads/getAdId";
import mobileAds, { useInterstitialAd } from "react-native-google-mobile-ads";
import { SHOW_INITIAL_AD } from "ads/ad-flag";
import {
  getTrackingPermissionsAsync,
  requestTrackingPermissionsAsync,
  PermissionStatus,
} from "expo-tracking-transparency";
import { ActivityIndicator } from "react-native";
import { CenterViewContainer } from "components/atoms/View/CenterView";

const NativeStack = createNativeStackNavigator();

const RootNav = () => {
  // load ad
  const adId = getAdId("INTERSTITIAL");
  const { isLoaded, isClosed, isClicked, error, show, load } =
    useInterstitialAd(adId);
  useEffect(() => {
    if (adId !== null && SHOW_INITIAL_AD) {
      load();
    }
  }, [load]);

  useEffect(() => {
    if (isLoaded && SHOW_INITIAL_AD) {
      show();
    }
  }, [isLoaded, show]);

  useEffect(() => {
    const init = async () => {
      try {
        const { status } = await getTrackingPermissionsAsync();
        if (status === PermissionStatus.UNDETERMINED) {
          await requestTrackingPermissionsAsync();
        }
        if (SHOW_INITIAL_AD) {
          await mobileAds().initialize();
        }
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, []);

  const navigation = useNavigation();
  // for navigate updated quiz
  useEffect(() => {
    setNotificationListener(navigation);
  }, []);
  if (!isClosed && !isClicked && !error && SHOW_INITIAL_AD) {
    return (
      <CenterViewContainer style={{ flex: 1 }}>
        <ActivityIndicator />
      </CenterViewContainer>
    );
  }

  return (
    <NativeStack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: "fullScreenModal",
        orientation: "portrait_up",
      }}
    >
      <NativeStack.Screen name="RootTabNav" component={RootTabNav} />
      <NativeStack.Screen name="RootStackNav" component={RootStackNav} />
    </NativeStack.Navigator>
  );
};

export default RootNav;
