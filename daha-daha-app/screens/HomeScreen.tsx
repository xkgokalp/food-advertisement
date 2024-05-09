import React from "react"
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native"
import BrandCards from "../components/BrandCards/BrandCards"
import Header from "../components/Header/Header"

const HomeScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<Header />
			<BrandCards />
		</View>
	)
}

export default HomeScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
})
