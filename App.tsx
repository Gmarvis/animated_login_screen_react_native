import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";
import Animated, {
    SlideInDown,
    SlideInRight,
    SlideInUp,
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    withDelay,
    runOnJS,
    withSequence,
    withSpring,
} from "react-native-reanimated";
import { styles } from "./styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import { Dimensions } from "react-native";
import { opacity } from "react-native-reanimated/lib/typescript/reanimated2/Colors";
import { useState } from "react";

const { height, width } = Dimensions.get("window");

export default function App() {
    const imagePosition = useSharedValue(1);
    const formButtonScale = useSharedValue(1);
    const [displayForm, setDisplayForm] = useState<"none" | "flex">("none");
    const [isRegistering, setIsRegistering] = useState(false);

    const buttonAnimatiedStyles = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imagePosition.value,
            [0, 1],
            [250, 0]
        );
        return {
            opacity: withTiming(imagePosition.value, { duration: 500 }),
            transform: [
                { translateY: withTiming(interpolation, { duration: 1000 }) },
            ],
        };
    });

    const imageAnimatedSyles = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imagePosition.value,
            [0, 1],
            [-height / 2, 0]
        );
        return {
            transform: [
                { translateY: withTiming(interpolation, { duration: 1000 }) },
            ],
        };
    });

    const formButtonAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{scale: formButtonScale.value}]
        }
    })

    const closeButtonContainerStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(
            imagePosition.value,
            [0, 1],
            [180, 360]
        );
        return {
            opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {
                duration: 800,
            }),
            transform: [
                {
                    rotate: withTiming(interpolation + "deg", {
                        duration: 1000,
                    }),
                },
            ],
        };
    });
    const loginHandler = () => {
        imagePosition.value = 0;
        setDisplayForm("flex");
        if(isRegistering){
            runOnJS(setIsRegistering)(false)
        }
        
    };

    const registerHandler = () => {
        imagePosition.value = 0;
        setDisplayForm("flex");
        if(!isRegistering){
            runOnJS(setIsRegistering)(true)
        }
    };

    const formAnimatesStyle = useAnimatedStyle(() => {
        return {
            opacity:
                imagePosition.value === 0
                    ? withDelay(400, withTiming(1, { duration: 800 }))
                    : withTiming(0, { duration: 300 }),
        };
    });

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <Animated.View style={[styles.absoluteFill, imageAnimatedSyles]}>
                <Svg height={height + 100} width={width}>
                    <ClipPath id="clipPathId">
                        <Ellipse cx={width / 2} rx={height} ry={height + 100} />
                    </ClipPath>
                    <Image
                        href={require("./assets/bgf.jpeg")}
                        height={height + 100}
                        width={width + 100}
                        preserveAspectRatio="xMidYMid slice"
                        clipPath="url(#clipPathId)"
                    />
                </Svg>
                <Pressable
                    onPress={() => {
                        imagePosition.value = 1;
                        setDisplayForm("none");
                    }}
                >
                    <Animated.View
                        style={[
                            styles.closeButtonContainer,
                            closeButtonContainerStyle,
                        ]}
                    >
                        <Text>X</Text>
                    </Animated.View>
                </Pressable>
            </Animated.View>
            <View style={styles.buttonContainer}>
                <Animated.View style={buttonAnimatiedStyles}>
                    <Pressable onPress={loginHandler} style={[styles.button]}>
                        <Text style={styles.buttonText}>LOG IN</Text>
                    </Pressable>
                </Animated.View>
                <Animated.View style={buttonAnimatiedStyles}>
                    <Pressable onPress={registerHandler} style={styles.button}>
                        <Text style={styles.buttonText}>Register</Text>
                    </Pressable>
                </Animated.View>
                <Animated.View
                    style={[
                        styles.formInputContainer,
                        formAnimatesStyle,
                        { display: displayForm },
                    ]}
                >
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="black"
                        placeholder="Email"
                    />
                    {isRegistering && (
                        <TextInput
                            style={styles.textInput}
                            placeholderTextColor="black"
                            placeholder="Full Name"
                        />
                    )}
                    <TextInput
                        style={styles.textInput}
                        placeholderTextColor="black"
                        placeholder="Password"
                    />

                    <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
                    <Pressable onPress={()=> {
                        formButtonScale.value = withSequence(
                            withSpring(1.5),
                            withSpring(1)
                        )
                    }}>
                        <Text style={styles.buttonText}>
                            {isRegistering ? "Register" : "Log In"}
                        </Text>
                    </Pressable>
                    </Animated.View>
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}
