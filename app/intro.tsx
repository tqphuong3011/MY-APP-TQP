import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const Intro = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/homepage');
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#4158D0', '#C850C0', '#FFCC70']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.background}
      >
        <View style={styles.contentContainer}>
          <Image
            source={require('../assets/images/react-logo.png')}
            style={styles.logo}
          />
          <Text style={styles.name}>Trần Quốc Phương</Text>
          <View style={styles.divider} />
          <Text style={styles.title}>My Expo App</Text>
          <Text style={styles.description}>
            "Live good life good"
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentContainer: {
    alignItems: 'center',
    width: '80%',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  divider: {
    width: 50,
    height: 2,
    backgroundColor: '#ffffff',
    marginVertical: 10,
    opacity: 0.7,
  },
  title: {
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 15,
    opacity: 0.9,
  },
  description: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
    fontStyle: 'italic',
    opacity: 0.8,
  },
});

export default Intro; 