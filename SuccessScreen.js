import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      {/* Hình ảnh thành công */}
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' }} style={styles.image} />
      
      <Text style={styles.successText}>Payment Success, Yayy!</Text>
      <Text style={styles.description}>We will send order details and invoice to your contact no. and registered email</Text>

      <TouchableOpacity>
        <Text style={styles.linkText}>Check Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  image: { width: 120, height: 120, marginBottom: 20 },
  successText: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  description: { fontSize: 14, textAlign: 'center', color: '#777', marginBottom: 20 },
  linkText: { fontSize: 16, color: '#007bff', marginBottom: 20 },
  downloadButton: { backgroundColor: '#007bff', padding: 15, borderRadius: 10, width: '100%', alignItems: 'center' },
  downloadButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default SuccessScreen;
