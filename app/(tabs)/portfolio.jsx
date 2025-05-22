import {
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { colors } from "@/constants/Colors";
import { projectData } from "../../components/ui/projects";
const portfolio = () => {
  const portfolios = () => (
    <>
      <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>
          <View style={styles.portfolio}>
            <Text
              style={{
                fontFamily: "outfit-bold",
                fontSize: 30,
                textAlign: "center",
              }}
            >
              My Portfolio
            </Text>
            <Text style={{ textAlign: "center", lineHeight: 20 }}>
              Welcome to my portfolio! Dive in to explore some of my favorite
              projects and creative works. A full list of projects can be fond
              
              <Link
                href="https://github.com/Ohwojero"
                style={{
                  color: colors.textColor,
                  fontFamily: "outfit-regular",
                }}
              >
                github
              </Link>
            </Text>
            <Text style={{ textAlign: "center", lineHeight: 20 }}>
              Are you looking for extra hands to join your team of developers? I
              am open to collaborate with you to bring your dreams to live. Give
              me a call and let's work together to take your business to the
              next level.
            </Text>

            <Link
              href="/contact"
              style={{
                padding: 12,
                marginTop: 10,
                backgroundColor: colors.textColor,
                width: "50%",
                margin: "auto",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontFamily: "outfit-bold",
                }}
              >
                Contact Me
              </Text>
            </Link>
          </View>

          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-semibold",
              marginTop: 15,
              fontSize: 18,
            }}
          >
            My Projects
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );

  return (
    <FlatList
      data={projectData}
      renderItem={({ item }) => (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
           
          }}
        >
          <Image
            source={item.image}
            style={styles.images}
            width={330}
            height={700}
          />

          <Link
            href="/"
            style={{
              marginLeft: 40,
              marginTop: -10,
              fontFamily: "outfit-bold",
              color: "black",
             
              fontSize: 20,
            }}
          >
            Github
          </Link>
        </View>
      )}
      ListHeaderComponent={portfolios}
    />
  );
};

export default portfolio;

const styles = StyleSheet.create({
  portfolio: {
    marginTop: 50,
  },
  images: {
    margin: 25,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "grey",
    padding: 5,
    cursor: "pointer",
    objectFit: "fill",
  },
});
