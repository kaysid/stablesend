import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const authFailure = () => {
  //will add logic to change return area based on whether it was a failure at the login page or trying to update receiving address
  return (
    <View>
      <Text>User did not authenticate.</Text>
      <Link href="/protected" asChild>
        <Button title="Try again" />
      </Link>
    </View>
  );
};

export default authFailure;
