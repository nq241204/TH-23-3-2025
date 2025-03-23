import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Phương thức thanh toán */}
      <View style={styles.paymentMethod}>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentText}>💳 Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.paymentButtonApple}>
          <Text style={styles.paymentText}> Apple Pay</Text>
        </TouchableOpacity>
      </View>

      {/* Form nhập thông tin */}
      <TextInput style={styles.input} placeholder="Card number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Cardholder name" />
      <View style={styles.row}>
        <TextInput style={[styles.input, { flex: 1 }]} placeholder="Expiry date (MM/YY)" keyboardType="numeric" />
        <TextInput style={[styles.input, { flex: 1 }]} placeholder="CVV / CVC" secureTextEntry />
      </View>

      {/* Nút thanh toán */}
      <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Success')}>
        <Text style={styles.payButtonText}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  paymentMethod: { flexDirection: 'row', marginBottom: 20 },
  paymentButton: { flex: 1, padding: 15, backgroundColor: '#28a745', borderRadius: 10, alignItems: 'center' },
  paymentButtonApple: { flex: 1, padding: 15, backgroundColor: '#000', borderRadius: 10, alignItems: 'center', marginLeft: 10 },
  paymentText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  input: { width: '100%', height: 50, borderWidth: 1, borderRadius: 10, padding: 10, marginBottom: 15, borderColor: '#ccc' },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  payButton: { backgroundColor: '#28a745', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 20 },
  payButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});

export default PaymentScreen;
