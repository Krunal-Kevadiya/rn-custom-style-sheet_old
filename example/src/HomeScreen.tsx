import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomStyleSheet, ThemeType, useMyTheme } from 'rn-custom-style-sheet';

const styleSheet = (themeType: ThemeType) =>
  CustomStyleSheet.createScaledTheme(
    {
      screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        fontWeight: 'bold',
        fontSize: '14@ms',
        color: 'white'
      },
      button: {
        borderRadius: '10@s',
        backgroundColor: 'black',
        width: '250@s',
        height: '45@vs',
        marginTop: '15@vs',
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    themeType
  );

export const HomeScreen = () => {
  const styles = useMyTheme(styleSheet);
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Scaled' as never)}>
        <Text style={styles.text}>Scaled Style</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Theme' as never)}>
        <Text style={styles.text}>Theme Style</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('ScaledTheme' as never)}>
        <Text style={styles.text}>Scaled Theme Style</Text>
      </Pressable>
    </View>
  );
};
