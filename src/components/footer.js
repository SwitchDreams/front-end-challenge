import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function footer() {
  const navigation = useNavigation();
  const {isLogged, signOut} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.contentView}
        >
          <Image source={require("../../src/assets/halter.png")}></Image>
          <Text style={styles.text}>Home</Text>
        </Pressable>
      </View>
      {isLogged === true ? (
        <>
        <View>
            <Pressable
              onPress={() => {signOut()}}
              style={styles.contentView}
            >
              <Image source={require("../../src/assets/signOut.png")}></Image>
              <Text style={styles.text}>Sair</Text>
            </Pressable>
          </View></>
      ) : (
        <>
          <View>
            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={styles.contentView}
            >
              <Image source={require("../../src/assets/login.png")}></Image>
              <Text style={styles.text}>Login</Text>
            </Pressable>
          </View>
          <View>
            <Pressable
              onPress={() => navigation.navigate("Register")}
              style={styles.contentView}
            >
              <Image source={require("../../src/assets/register.png")}></Image>
              <Text style={styles.text}>cadastrar</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#230E49",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "black",
    width: "100%",
    height: 80,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  text: {
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#2BB39C",
  },
  contentView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
