import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';

const FROM_COLOR = 'rgb(213, 255, 240)';
const TO_COLOR = 'rgb(225, 213, 255 )';

export const Background1 = ({ children }) => {
    return (
        <View style={ { flex: 1 } }>
            <Svg style={ StyleSheet.absoluteFillObject }>
                <Defs>
                    <LinearGradient id="grad" x1="0%" y1="50%" x2="45%" y2="100%">
                        <Stop offset="0" stopColor={ FROM_COLOR }/>
                        <Stop offset="1" stopColor={ TO_COLOR }/>
                    </LinearGradient>
                </Defs>
                <Rect width="100%" height="100%" fill="url(#grad)"/>
            </Svg>
            { children }
        </View>
    );
};