import React from "react";
import WebView, { WebViewProps } from "react-native-webview";

export interface IBaseWebView extends WebViewProps {
  uri: string;
}
const BaseWebView = ({ uri, ...props }: IBaseWebView) => {
  return <WebView source={{ uri }} {...props} />;
};

export default BaseWebView;
