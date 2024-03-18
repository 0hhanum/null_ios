import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";

export function setNotificationHandler() {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

export async function registerForPushNotificationsAsync() {
  const GRANTED_STATUS = "granted";
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== GRANTED_STATUS) {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== GRANTED_STATUS) {
      alert("Failed to get push token for push notification!");
      // TODO:: send log
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });
    alert(token);
    // TODO:: save log into DB
  } else {
    throw new SimulatorNotificationError();
  }

  return token.data;
}
class SimulatorNotificationError extends Error {
  constructor() {
    super();
    this.name = "SimulatorNotificationError";
  }
}
