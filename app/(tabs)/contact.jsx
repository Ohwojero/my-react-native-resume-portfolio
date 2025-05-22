import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "../../constants/Colors";
import Fontisto from "@expo/vector-icons/Fontisto";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Link } from "expo-router";

const contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "Form Submitted",
      `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
  };

  return (
    <SafeAreaView style={{ padding: 20, }}>
      <ScrollView>
        <View>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Contact me
          </Text>

          <Text style={{ textAlign: "center", lineHeight: 20 }}>
            Are you ready to build your next big project? Do you more hands and
            brains on your team? Are you looking for a Web developer tutor? You
            can contact me with the information below, or connect with me on my
            socials
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
              gap: 10,
            }}
          >
            <Link href={"https://www.linkedin.com/in/ohwojero-godstime-b35208176"}>
              <AntDesign name="linkedin-square" size={34} color="black" />
            </Link>
            <Link href={"https://www.facebook.com/profile.php?id=100087432254461"}>
              <AntDesign name="facebook-square" size={34} color="black" />
            </Link>
            <Link href={"https://x.com/OhwojeroGT?t=mu3ayD6Jle9cLMj_KlIy-w&s=09"}>
              <FontAwesome name="twitter-square" size={34} color="black" />
            </Link>
          </View>

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
              Contact Details
            </Text>
          </View>
          <Text style={{ marginTop: 20 }}>
            Feel free to contact through any of the media below: I typically
            response in 2 minutes.
          </Text>

          <View style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <View style={styles.first}>
              <Text
                style={{
                  width: "1%",
                  height: "200%",
                  backgroundColor: colors.textColor,
                  display: "flex",
                  gap: 10,
                }}
              ></Text>

              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <FontAwesome name="mobile-phone" size={34} color="black" />
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      color: colors.textColor,
                      fontFamily: "outfit-regular",
                    }}
                  >
                    Phone
                  </Text>
                  <Text style={{ fontFamily: "outfit-regular" }}>
                    +2349020266783
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.second}>
              <Text
                style={{
                  width: "1%",
                  height: "200%",
                  backgroundColor: colors.textColor,
                  display: "flex",
                  gap: 10,
                }}
              ></Text>

              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Fontisto name="email" size={30} color="black" />
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      color: colors.textColor,
                      fontFamily: "outfit-regular",
                    }}
                  >
                    Email
                  </Text>
                  <Text style={{ fontFamily: "outfit-regular" }}>
                    Ohwojerogodstime@gmail.com
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.third}>
              <Text
                style={{
                  width: "1%",
                  height: "200%",
                  backgroundColor: colors.textColor,
                  display: "flex",
                  gap: 10,
                }}
              ></Text>

              <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <EvilIcons name="location" size={34} color="black" />
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      color: colors.textColor,
                      fontFamily: "outfit-regular",
                    }}
                  >
                    Location
                  </Text>
                  <Text style={{ fontFamily: "outfit-regular" }}>
                    Asaba, Nigeria
                  </Text>
                </View>
              </View>
            </View>
          </View>

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
          <Text style={{ marginTop: 30 }}>
            Are you looking for a seasoned developer to work on your next
            project? Do you need more hands on your team to bring your ideas to
            life? Get in touch for exceptional web development or mobile
            development projects.
          </Text>

          {/* Form Section */}
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <AntDesign
                name="user"
                size={20}
                color="#666"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Full Name"
                value={fullname}
                onChangeText={setFullname}
              />
            </View>
            <View style={styles.inputContainer}>
              <Fontisto
                name="email"
                size={20}
                color="#666"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="phone"
                size={20}
                color="#666"
                style={styles.icon}
              />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Phone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
              />
            </View>
            <TextInput
              style={[styles.input, styles.textarea]}
              placeholder="Your message"
              multiline={true}
              numberOfLines={4}
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default contact;

const styles = StyleSheet.create({
  whatIdoContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 35,
  },
  first: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  second: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  third: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  formContainer: {
    marginTop: 40,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
    borderColor: colors.textColor,
  },
  icon: {
    marginRight: 10,
  },
  inputWithIcon: {
    flex: 1,
    fontSize: 16,
    fontFamily: "outfit-regular",
    paddingLeft: 0,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: colors.textColor,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: "outfit-regular",
    textAlignVertical: "top",
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: colors.textColor,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "outfit-bold",
  },
});
