import React from "react"
import { View, Text, Button, StyleSheet } from "react-native"

const DetailScreen = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<Text>DetailScreen</Text>
		</View>
	)
}

export default DetailScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
})
