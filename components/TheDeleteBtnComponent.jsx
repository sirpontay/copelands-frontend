import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TheDeleteBtnComponent = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>DELETE ELECTION</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TheDeleteBtnComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5C6B73',
    width: wp('85%'), 
    height: hp('4.5%'), 
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: hp('1.6%'),
    fontWeight: '600',
    color: 'white',
  },
});
