import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NewDetailsform from "./NewDetailsform";

const NewHeaderComponent = ({ forceUpdate, navigation, moderator }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handlePlusButtonPress = () => {
    // setModalVisible(true);
    navigation.navigate("NewDetailsForm", { moderator, forceUpdate });
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.textHolder}>
        <Text style={styles.textStyle}>Add an item for voting</Text>
      </View>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={handlePlusButtonPress}
      >
        <View>
          <Icon name="plus" size={25} color="#5c6b73" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewHeaderComponent;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#5c6b73",
    height: hp("7%"),
    width: wp("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textHolder: {
    marginLeft: wp("5%"),
  },
  textStyle: {
    fontSize: hp("2%"),
    color: "#fff",
    fontFamily: "ibmPlexMono-bold",
  },
  iconContainer: {
    backgroundColor: "#9db4c0",
    width: wp("9%"),
    height: hp("4%"),
    borderRadius: hp("0.5%"),
    marginRight: wp("5.5%"),
    justifyContent: "center",
    alignItems: "center",
  },
});
