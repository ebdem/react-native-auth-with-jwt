import { useState } from "react";
import { View,StyleSheet, Text } from "react-native";
import { Registration } from "../components";

export default function Auth({ newJWT }) {
    const [showLogin, setShowLogin] = useState(false)

    const authSwitch = () => {
        setShowLogin(!setShowLogin);
    } 

    const whichForm = () => {
        if (!showLogin) {
            return(
                <Registration newJWT={newJWT} authSwitch={authSwitch} />
            )
        } else {
            <Login newJWT={newJWT}  authSwitch={authSwitch} />
        }
    }

    return(
        <View style={styles.container}>
            {whichForm()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    }
})