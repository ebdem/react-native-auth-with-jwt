import React from "react";

import { View } from "react-native";
import { Button } from "../components/common";

const LoggedIn = () => {
    return(
        <View>
            <Button style={styles.container}>
                Log Out
            </Button>
        </View>
    )
}

const styles = {
    container: {
      flex: 1,
      justifyContent: 'center'
    }
  };