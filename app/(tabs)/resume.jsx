import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/Colors";
import { Link } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
const resumePdfUrl = "file:///C:/Users/User/Documents/my%20new%20resume.pdf"; // Replace with your actual PDF URL

const explore = () => {
  const handleDownload = () => {
    Linking.openURL(resumePdfUrl).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginTop: 80, alignItems: "center" }}>
          <Text style={styles.title}>Online Resume</Text>
          <TouchableOpacity onPress={handleDownload} style={styles.button}>
            <Text style={styles.buttonText}>Download Resume PDF</Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 80 }}>
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
            Next js & React Native
          </Text>
          <View>
            <View style={styles.contact}>
              <Text><Feather name="phone" size={24} style={{color:colors.mediaIcon}} /></Text>
              <Text style={{fontFamily:"outfit-regular"}}>+2349020266783</Text>
            </View>

            <View style={styles.contact}>
              <Text><Fontisto name="email" size={24} style={{color:colors.mediaIcon}} /></Text>
              <Text style={{fontFamily:"outfit-regular"}}>Ohwojerogodstime@gmail.com</Text>
            </View>

            <View style={styles.contact}>
              <Link href="https://github.com/Ohwojero"><AntDesign name="github" size={24} style={{color:colors.mediaIcon}}/></Link>
              <Text style={{fontFamily:"outfit-regular"}}>Github</Text>
            </View>

            <View style={styles.contact}>
              <Text><FontAwesome6 name="location-dot" size={24} style={{color:colors.mediaIcon}} /></Text>
              <Text style={{fontFamily:"outfit-regular"}}>Asaba Delta State,Nigeria.</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 50,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}
        >
          <Text
            style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Professional Summary
          </Text>
          <Text style={{ lineHeight: 20 }}>
            Results-driven Frontend Engineer with over 3 years + of experience
            specializing in building high-performance, scalable, and secure web
            applications. Proficient in React.js, Nextjs, TypeScript, and state
            management solutions like Redux and ContextAPI. Experienced in
            developing intuitive and responsive UI components while ensuring
            optimal performance across various devices. Adept at collaborating
            with cross-functional teams to deliver innovative and reliable
            solutions
          </Text>
        </View>

        <View
          style={{
            marginTop: 50,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text
            style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            Technical Skills
          </Text>

          <View style={{ lineHeight: 10 }}>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Language:
               <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                JavaScript (ES6+), TypeScript.
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Frontend Technologies: 
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                HTML5, CSS3, SCSS, Tailwind CSS, Bootstrap.
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              React Native: 
               <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                For Mobile
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Frameworks/Libraries:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                React.js, Next.js
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              State Management:
               <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                Redux Toolkit, Axios, Context API
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Testing:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                Jest, React Testing Library
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Version Control:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                Git, GitHub, Git-based workflows
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              API Integration:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                : RESTful APIs, GraphQL
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Performance Optimization:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                Lighthouse, Webpack, PageSpeed Insights, Sentry
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              Development:
              <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                VS Code, Postman, Firebase, Neon.
              </Text>
            </Text>
          </View>
        </View>




        <Text  style={{
              color:"black",
              fontFamily: "outfit-bold",
              fontSize: 20,
              marginTop:80,
            }}>Professional Experience</Text>
        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Experience</Text>
            <Text style={{fontFamily:"outfit-bold"}}>Fronted Developer(Remote Contract)</Text>
            <Text style={{fontFamily:"outfit-regular"}}>Tch Vult | Jan 2025-March 2025</Text>
            <Text style={{marginTop:-10}}> <Text style={{fontSize:40,}}>.</Text> Developed and optimized a company website for the startup, using optimization techniques and 
            framework like React js</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Integrated RESTful APIs for real-time data updates with Axios react-query which is perfecting for 
            caching fetch results and state management. </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>Built a responsive UI using React.js, and SCSS.</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Implemented secure authentication and multi-role access control</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Enhanced application state management using Redux Toolkit for scalability</Text>
            
            <View style={{marginTop:15, cursor:"pointer",  width:"30%"}}>
              <Link href="https://tchvult.com/" style={{color:colors.textColor, fontFamily:"outfit-bold"}}>Live Demo</Link>
            </View>
        </View>



        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Experience</Text>
            <Text style={{fontFamily:"outfit-bold"}}>Fronted Developer</Text>
            <Text style={{fontFamily:"outfit-regular"}}>UPUMI Website (Michigan US) | Feb 2025 –May 2025
            </Text>
            <Text style={{marginTop:-10}}> <Text style={{fontSize:40,}}>.</Text> Empowering lives, and transforming communities</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> At UPUMI the application was dedicated to creating lasting change through education, vocational 
            training, healthcare and community development.
            </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>By Equipping individual with the skills and resources by building bright future for themselves and their 
            communities. </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>  Built a responsive UI using React.js, and SCSS.</Text>
        
            <View style={{marginTop:15, cursor:"pointer",  width:"30%"}}>
              <Link href="https://upumi-website.vercel.app/" style={{color:colors.textColor, fontFamily:"outfit-bold"}}>Live Demo</Link>
            </View>
        </View>


        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Experience</Text>
            <Text style={{fontFamily:"outfit-bold"}}>Volunteer Frontend Developer</Text>
            <Text style={{fontFamily:"outfit-regular"}}>Quru Lab, HQ Agbor (Onsite) | July 2024 – Dec - 2024
            </Text>
            <Text style={{marginTop:-10}}> <Text style={{fontSize:40,}}>.</Text>  Spearheaded the migration of a gym App using React. This was done in efforts, aimed at improving 
            project workflow efficiency by 80%.</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Created interactive, landing page and overall workflow of the application
            </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>Developed reusable React components and optimized rendering performance.  </Text>
            
            <View style={{marginTop:15, cursor:"pointer",  width:"30%"}}>
              <Link href="https://gym-website-dyhn.vercel.app/" style={{color:colors.textColor, fontFamily:"outfit-bold"}}>Live Demo</Link>
            </View>
        </View>


        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Experience</Text>
            <Text style={{fontFamily:"outfit-bold"}}>Food Delivery app</Text>
            <Text style={{fontFamily:"outfit-regular"}}>Quru Lab, HQ Agbor (Onsite) | July 2024 – Dec - 2024
            </Text>
            <Text style={{marginTop:-10}}> <Text style={{fontSize:40,}}>.</Text>  A food delivery app built with react Native</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Implemented the single page application using modern technology like React Native Followed 
                modern design principles which promote user interaction and experience Ensured design is mobile 
                responsive for different device sizes. 
            </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>Tech Stack: React Native, css, React Icons, firebase for backend services </Text>
            
        </View>



        <View style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 10,
            borderLeftWidth: 2,
            borderColor: colors.textColor,
          }}>
          <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Experience</Text>
            <Text style={{fontFamily:"outfit-bold"}}>Tch Vult Dashboard </Text>
            <Text style={{fontFamily:"outfit-regular"}}>Tch Vult | Jan 2025-March 2025
            </Text>
            <Text style={{marginTop:-10}}> <Text style={{fontSize:40,}}>.</Text> Built a scalable admin dashboard for business activity monitoring</Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text>Implemented secure user authentication and multi-level form handling
            </Text>
            <Text style={{marginTop:-15}}> <Text style={{fontSize:40}}>.</Text> Tech Stack: React, scss.
            </Text>
            
            <View style={{marginTop:15, cursor:"pointer",  width:"30%"}}>
              <Link href="https://tchvult.com/" style={{color:colors.textColor, fontFamily:"outfit-bold"}}>Live Demo</Link>
            </View>

           
        </View>
        <View style={{marginTop:20}}>
            <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Education</Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              HND, Computer Science: <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                2015-2019
              </Text>
            </Text>
            <Text style={{ fontFamily: "outfit-regular", fontSize: 18 }}>
              NIIT software training: <Text style={{ fontFamily: "outfit-Regular", fontSize: 15 }}>
                 Nov 2023-June 2024
              </Text>
            </Text>
           
            </View>

            <View style={{marginTop:20}}>
            <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Additional Skills</Text>

            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text> Strong problem-solving and debugging skills.</Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text>  Proficient in responsive design and mobile-first development. </Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text> Experience with unit testing and performance optimization</Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text>  Enthusiastic about integrating AI and automation into web applications. </Text>
            </View>

            <View style={{marginTop:20}}>
            <Text  style={{
              color: colors.textColor,
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}> Soft Skills</Text>

            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text> Strong communication skills</Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text> Ability to work with cross-functional teams wether remotely or on-site </Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text> Team player, Ability to express thoughts clearly</Text>
            <Text style={{marginTop:-18}}> <Text style={{fontSize:40}}>.</Text>  Enthusiatic about knowledge aquisition. Reader, leader, listener goal-oriented problem solver. </Text>
            </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default explore;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontFamily:"outfit-bold"
  },
  button: {
    backgroundColor: "#ff7f50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "outfit-bold",
  },

  contact: {
    display: "flex",
    flexDirection: "row",
    gap:13,
    alignItems:"center",
    margin:10,
  },
});
