import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const ProductDetails = ({ item, onRender }) => {
  useEffect(() => {
    onRender();
  }, [onRender]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <View style={styles.detailsContainer}>
        <Text>ID: {item.id}</Text>
        <Text>Title: {item.title}</Text>
        {/* Display other details */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f5f5f5",
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default ProductDetails;
