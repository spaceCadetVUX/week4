import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

const CheckoutScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerUnit = 141800;
  const [totalPrice, setTotalPrice] = useState(pricePerUnit);

  const increaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * pricePerUnit);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * pricePerUnit);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Product Image and Info */}
        <View style={styles.productContainer}>
          <Image
            source={{ uri: 'data:image/jpeg;base64,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' }} // Replace with the correct web link
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>Nguyên hàm, Tích phân và ứng dụng</Text>
            <Text style={styles.productSubtitle}>Cung cấp bởi Tiki Trading</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.discountedPrice}>{pricePerUnit.toLocaleString()} ₫</Text>
            </View>
          </View>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={decreaseQuantity}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={increaseQuantity}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Coupon Section */}
        <View style={styles.couponContainer}>
          <TextInput placeholder="Mã giảm giá" style={styles.couponInput} />
          <Button title="Áp dụng" onPress={() => {}} />
        </View>

        {/* Subtotal and Total */}
        <View style={styles.summaryContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Tạm tính</Text>
            <Text style={styles.price}>{totalPrice.toLocaleString()} ₫</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Thành tiền</Text>
            <Text style={styles.totalPrice}>{totalPrice.toLocaleString()} ₫</Text>
          </View>
        </View>
      </ScrollView>

      {/* Proceed to Checkout Button */}
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    
  },
  content: {
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  productImage: {
    width: 80,
    height: 100,
    resizeMode: 'cover',
  },
  productDetails: {
    flex: 1,
    paddingLeft: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E53935',
    marginRight: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  couponContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  couponInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  summaryContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: '#777',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
  },
  checkoutButton: {
    backgroundColor: '#E53935',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;
