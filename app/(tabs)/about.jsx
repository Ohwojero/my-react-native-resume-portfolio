import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import { Link } from "expo-router";
import { colors } from "@/constants/Colors";
import { stackData } from "../../components/ui/stacks.js";
const About = () => {
  const renderHeader = () => (
    <>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "900",
            fontFamily: "outfit-bold",
          }}
        >
          Hi, I'm
        </Text>
        <Text
          style={{
            color: colors.textColor,
            fontFamily: "outfit-bold",
            fontSize: 30,
          }}
        >
          Ohwojero Godstime
        </Text>
        <Text
          style={{
            marginTop: -6,
            marginBottom: 5,
            color: colors.textdesc,
            fontSize: 16,
            fontFamily: "outfit-semibold",
          }}
        >
          Web developer | Mobile Engineer
        </Text>
        <Text style={{ textAlign: "center", fontSize:17, marginTop: 10, marginBottom: 10 }}>
          I am a web developer specialized in building scalable and efficient
          platform for businesses to thrive on the internet. Explore{" "}
        </Text>
        <Text style={{fontSize:18}}>
          
          My <Link
            href="/resume"
            style={{
              color: colors.textColor,
              fontFamily: "outfit-semibold",
              fontSize: 16,
            }}
          >
            Resume </Link>and <Link
            href="/portfolio"
            style={{
              color: colors.textColor,
              fontFamily: "outfit-semibold",
              fontSize: 16,
            }}
          >
            
            Portfolio
          </Link>
        </Text>
      </View>

      {/*=======================RESUME AND PORTFOLIO===============================*/}
      <View style={styles.resumeContainer}>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: colors.textColor,
              fontSize: 30,
              fontFamily: "outfit-bold",
            }}
          >
            3+
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "outfit-semibold" }}>
            Years experience
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: "center",
              color: colors.textColor,
              fontSize: 30,
              fontFamily: "outfit-bold",
            }}
          >
            8+
          </Text>
          <Text style={{ fontSize: 16, fontFamily: "outfit-semibold" }}>
            Completed projects
          </Text>
        </View>
      </View>

      {/*========================What I Do=====================*/}
      <View style={{ marginTop: 50 }}>
        
      <View style={styles.whatIdoContainer}>
          <Text
            style={{
              width: "1%",
              height: "250%",
              backgroundColor: colors.textColor,
              display: "flex",
            }}
          ></Text>
          <Text
            style={{
              fontSize: 20,
              color: colors.textColor,
              fontFamily: "outfit-regular",
            }}
          >
            What I Do
          </Text>
        </View>
        <Text style={{ marginTop: 23, lineHeight: 20 }}>
          As a web developer, I specialize in building scalable and maintanable
          web applications with mordern user interfaces and functionalities. I
          build applications that will stand the test of time because they
          follow universal industry standards. I build fullstack applications
          that are secure, fast and robust to handle complex business logic
          allowing businesses carry out their activities efficiently.
        </Text>
      </View>
    </>
  );

  return (
    <FlatList
      style={styles.content}
      data={stackData}
      renderItem={({ item }) => (
        <View style={styles.stackwrapper}>
          <Image source={item.image} />
          <Text
            style={{
              lineHeight: 20,
              color: colors.textColor,
              fontFamily: "outfit-semibold",
              fontSize: 17,
            }}
          >
            {item.title}
          </Text>
          <Text style={{ lineHeight: 20 }}>{item.text}</Text>
        </View>
      )}
      ListHeaderComponent={renderHeader}
    />
  );
};

export default About;

const styles = StyleSheet.create({
  whatIdoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 35,
  },
  content: {
    height: "100%",
    backgroundColor: colors.background,
    padding: 25,
  },
  container: {
    marginTop: "40%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  resumeContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
 
  stackwrapper: {
    marginBottom:30,
    backgroundColor:"white",
    marginTop:30,
    padding:10,
    borderRadius:12,
    borderLeftWidth:2,
    borderLeftColor:colors.textColor,
    
  }
});
