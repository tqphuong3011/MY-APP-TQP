import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ParallaxScrollView from '../components/ParallaxScrollView';

const Homepage = () => {
     return (
       <ParallaxScrollView
         headerImage={
           <View style={styles.headerContainer}>
             <Image
               source={require('../assets/images/tqp01.png')}
               style={styles.profileImage}
             />
             <Text style={styles.name}>Trần Quốc Phương</Text>
           </View>
         }
         headerBackgroundColor={{
           dark: '#4c669f',
           light: '#4c669f'
         }}
       >
         <View style={styles.contentContainer}>
           {/* Thông tin cá nhân */}
           <View style={styles.section}>
             <Text style={styles.sectionTitle}>Thông tin cá nhân</Text>
             <View style={styles.infoRow}>
               <Text style={styles.label}>Ngày sinh:</Text>
               <Text style={styles.value}>30-11-2003</Text>
             </View>
             <View style={styles.infoRow}>
               <Text style={styles.label}>Quê quán:</Text>
               <Text style={styles.value}>Quảng Ngãi</Text>
             </View>
             <View style={styles.infoRow}>
               <Text style={styles.label}>Giới tính:</Text>
               <Text style={styles.value}>Nam</Text>
             </View>
             <View style={styles.infoRow}>
               <Text style={styles.label}>Nghề nghiệp:</Text>
               <Text style={styles.value}>Sinh viên</Text>
             </View>
           </View>
   
           {/* Phần hình ảnh */}
           <View style={styles.section}>
             <Text style={styles.sectionTitle}>Hình ảnh</Text>
             <View style={styles.imageContainer}>
               <Image
                 source={require('../assets/images/tqp02.png')}
                 style={styles.galleryImage}
               />
               <Image
                 source={require('../assets/images/tqp03.png')}
                 style={styles.galleryImage}
               />
             </View>
           </View>
         </View>
       </ParallaxScrollView>
     );
   };
   
   const styles = StyleSheet.create({
     headerContainer: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#4c669f',
     },
     profileImage: {
       width: 150,
       height: 150,
       borderRadius: 75,
       marginBottom: 15,
     },
     name: {
       fontSize: 28,
       fontWeight: 'bold',
       color: '#ffffff',
       marginBottom: 5,
     },
     contentContainer: {
       padding: 16,
       backgroundColor: '#ffffff',
     },
     section: {
       marginBottom: 24,
     },
     sectionTitle: {
       fontSize: 20,
       fontWeight: 'bold',
       marginBottom: 12,
       color: '#333',
     },
     infoRow: {
       flexDirection: 'row',
       marginBottom: 8,
     },
     label: {
       width: 100,
       fontSize: 16,
       fontWeight: '500',
       color: '#666',
     },
     value: {
       flex: 1,
       fontSize: 16,
       color: '#333',
     },
     imageContainer: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       marginTop: 10,
     },
     galleryImage: {   
       width: '48%',
       height: 150,
       borderRadius: 8,
     },
   });
   
   export default Homepage; 