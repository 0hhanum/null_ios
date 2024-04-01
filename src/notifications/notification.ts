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

export function setNotificationListener(navigation: any) {
  Notifications.addNotificationResponseReceivedListener((response) => {
    const {
      notification: {
        request: {
          content: { data },
        },
      },
    } = response;
    const { quizId, category } = data;
    if (quizId === undefined || category === undefined) return;
    navigation.navigate("RootStackNav", {
      screen: "QuizList",
      params: {
        category,
        newQuizId: quizId,
      },
    });
  });
}

export async function initializePushNotification() {
  if (Device.isDevice) {
    requestPermissionForAsync();
    const token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig.extra.eas.projectId,
    });

    return token;
  } else {
    throw new SimulatorNotificationError();
  }
}
async function requestPermissionForAsync() {
  const GRANTED_STATUS = "granted";
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  if (existingStatus !== GRANTED_STATUS) {
    await Notifications.requestPermissionsAsync();
  }
}

class SimulatorNotificationError extends Error {
  constructor() {
    super();
    this.name = "SimulatorNotificationError";
  }
}

export { SimulatorNotificationError };
