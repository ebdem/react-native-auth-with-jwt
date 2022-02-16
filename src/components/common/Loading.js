import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const Loading = ({ size }) => {
    return(
        <View style={styles.spinnerContainer}>
            <ActivityIndicator color='#999999' size={size}/>
        </View>
    )
}



const styles = StyleSheet.create({
    spinnerContainer: {
        flex: -1,
        marginTop: 12,
        marginBottom: 12,
        
    },
  });

export { Loading };