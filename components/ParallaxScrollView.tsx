import React, { ReactElement } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

interface ParallaxScrollViewProps {
  headerImage: ReactElement;
  headerBackgroundColor: {
    dark: string;
    light: string;
  };
  children: ReactElement;
}

const ParallaxScrollView = ({ headerImage, children }: ParallaxScrollViewProps) => {
  return (
    <ScrollView>
      <View style={styles.headerContainer}>
        {headerImage}
      </View>
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 300,
  },
});

export default ParallaxScrollView; 