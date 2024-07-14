import { StatusBar } from "expo-status-bar";
import { Text, TextInput, View } from "react-native";
import Animated, {
    SlideInDown,
    SlideInRight,
    SlideInUp,
} from "react-native-reanimated";
import { styles } from "./styles";
import Svg, { Image } from "react-native-svg";
import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default function App() {
    return (
        <Animated.View entering={SlideInRight} style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <View style={styles.absoluteFill}>
                <Svg height={height / 2} width={width}>
                    <Image
                        href={require("./assets/bg.jpg")}
                        height={height}
                        width={width}
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Svg>
                <View style={styles.closeButtonContainer}>
                  <Text>X</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                {/* <View style={styles.button}>
                <View>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </View>
            </View>
            <View style={styles.button}>
                <View>
                    <Text style={styles.buttonText}>Register</Text>
                </View>
            </View> */}
            <View style={styles.formInputContainer}>
              <TextInput style={styles.textInput} placeholderTextColor="black" placeholder="Email"/>
              <TextInput style={styles.textInput} placeholderTextColor="black" placeholder="Full Name"/>
              <TextInput style={styles.textInput} placeholderTextColor="black" placeholder="Password"/>
              <View style={styles.formButton}>
                <Text style={styles.buttonText}>LOG IN</Text>

              </View>
            </View>
            </View>
        </Animated.View>
    );
}
