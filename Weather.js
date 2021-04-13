import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Thunderstorm: { iconName: "weather-lightning-rainy", gradient: ["#373B44", "#4286f4"], title: "Thunderstorm", subtitle: "" },
  Drizzle: { iconName: "weather-lightning-rainy", gradient: ["#89F7FE", "#66A6FF"], title: "Drizzle", subtitle: "" },
  Rain: { iconName: "weather-rainy", gradient: ["#00C6FB", "#005BEA"], title: "Rain", subtitle: "" },
  Snow: { iconName: "weather-snowy-heavy", gradient: ["#7DE2FC", "#B9B6E5"], title: "Snow", subtitle: "" },
  Atmosphere: { iconName: "weather-hail", gradient: ["#89F7FE", "#66A6FF"], title: "Atmosphere", subtitle: "" },
  Clear: { iconName: "weather-sunny", gradient: ["#FF7300", "#FEF253"], title: "Clear", subtitle: "" },
  Clouds: { iconName: "weather-cloudy", gradient: ["#D7D2CC", "#304352"], title: "Clouds", subtitle: "" },
  Mist: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Mist", subtitle: "" },
  Smoke: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Smoke", subtitle: "" },
  Haze: { iconName: "weather-hazy", gradient: ["#D7D2CC", "#304352"], title: "Haze", subtitle: "" },
  Dust: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Dust", subtitle: "" },
  Fog: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Fog", subtitle: "" },
  Sand: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Sand", subtitle: "" },
  Dust: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Dust", subtitle: "" },
  Ash: { iconName: "weather-fog", gradient: ["#4DA0B0", "#D39D38"], title: "Ash", subtitle: "" },
  Squall: { iconName: "weather-pouring", gradient: ["#4DA0B0", "#D39D38"], title: "Squall", subtitle: "" },
  Tornado: { iconName: "weather-tornado", gradient: ["#4DA0B0", "#D39D38"], title: "Tornado", subtitle: "" },
};

export default function Weather({ temp, condition }) {
  return <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
    <StatusBar barStyle="light-content" />
    <View style={styles.halfContainer}>
      <MaterialCommunityIcons size={95} name={weatherOptions[condition].iconName} color="white" />
      <Text style={styles.temp}>{temp}°</Text>
    </View>
    <View style={{...styles.halfContainer, ...styles.textContainer}}>
      <Text style={styles.title}>{weatherOptions[condition].title}</Text>
      <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
    </View>
  </LinearGradient>
};

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Dust",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "#fff"
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "300",
    marginBottom: 10
  },
  subtitle: {
    color: "#fff",
    fontSize: 24
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: 'flex-start'
  }
});