import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";

const MainLogo = (props: SvgProps) => (
  <Svg width={240} height={108} fill="none" {...props}>
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M8.866 40.855c-.668 12.755 4.786 22.72 0 40.68"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M6 97.014c1.534-9.25 5.784-27.869 12.884-35.491 7.801-8.377 23.001-10.427 24.847 3.454 1.315 9.885-6.047 24.653 1.183 29.655 7.23 5.002 15.236-31.425 22.861-36.07"
    />
    <Path
      stroke="url(#c)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M98.35 95.055c6.29 4.668 25.567 8.124 39.345-7.632"
    />
    <Path
      stroke="url(#d)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M147.62 81.095c4.935-7.236 15.579-23.97 19.115-38.667 4.419-18.37 5.303-31.344-.663-34.684-6.63-3.711-14.806 6.608-18.452 27.804-2.569 14.931-3.094 22.81-3.094 34.114"
    />
    <Path
      stroke="url(#e)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M144.632 69.283c-.193 10.446-1.428 31.753 13.419 32.205 17.283.526 29.424-19.056 34.798-28.796"
    />
    <Path
      stroke="url(#f)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M201.856 73.225c3.796-8.067 10.279-25.847 13.001-40.724 3.132-17.117 1.463-23.084-2.847-25.111-5.409-2.545-11.483 7.546-14.425 25.11-2.685 16.034-5.504 37.212-2.088 50.743"
    />
    <Path
      stroke="url(#g)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M192.849 69.283c.8 11.86 5.019 31.716 14.291 32.191 12.229.627 20.915-10.871 26.515-32.19"
    />
    <Path
      stroke="url(#h)"
      strokeLinecap="round"
      strokeWidth={12}
      d="M70.232 58.405c13.17 5.304 3.237 35.699 7.845 37.47 14.751 5.672 35.34-19.917 31.116-39.576-3.325-15.473 6.244 45.446-6.318 42.12"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(97.585 -9.342 31.88) scale(66.9999 61.1609)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.012} stopColor="#ACD15E" />
        <Stop offset={0.736} stopColor="#29949C" />
        <Stop offset={0.882} stopColor="#23929E" />
        <Stop offset={0.955} stopColor="#1E91A0" />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(-16.46263 58.83562 -18.25977 -5.10921 157.454 31.38)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.027} stopColor="#F45343" />
        <Stop offset={0.909} stopColor="#FD9156" />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(99.694 83.871 107.483) scale(50.1575 15.3413)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.001} stopColor="#EF716F" />
        <Stop offset={0.027} stopColor="#9174B5" />
      </RadialGradient>
      <RadialGradient
        id="h"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(7.56206 -38.65843 34.17765 6.68557 97.201 81.729)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.149} stopColor="#FF9932" />
        <Stop offset={0.735} stopColor="#FFD570" />
      </RadialGradient>
      <LinearGradient
        id="b"
        x1={6}
        x2={73.279}
        y1={94.156}
        y2={97.637}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D6D90D" />
        <Stop offset={0.495} stopColor="#FAD500" />
        <Stop offset={1} stopColor="#FDD35D" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={135.374}
        x2={103.142}
        y1={87.815}
        y2={100.859}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9246" />
        <Stop offset={1} stopColor="#FF9F38" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={142.74}
        x2={190.47}
        y1={89.772}
        y2={97.887}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F55544" />
        <Stop offset={1} stopColor="#EE7271" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={193.217}
        x2={232.104}
        y1={89.865}
        y2={95.244}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#9575B3" />
        <Stop offset={1} stopColor="#625EAA" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default MainLogo;
