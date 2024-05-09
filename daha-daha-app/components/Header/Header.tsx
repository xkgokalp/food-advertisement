import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native"
import React from "react"
import FontAwasome from "react-native-vector-icons/FontAwesome"

const Header = () => {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={require("../../assets/dahaDahaImg.png")}
				style={styles.image}
			/>
			<View style={styles.profile}>
				<FontAwasome
					name="user"
					style={{ color: "#fff", fontSize: 20 }}
				/>
				<View style={styles.onlineIndicator}></View>
			</View>
		</SafeAreaView>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%",
	},
	image: {
		width: 100,
		height: 50,
	},
	profile: {
		width: 50,
		height: 50,
		borderRadius: 50,
		overflow: "visible",
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F40000",
	},
	onlineIndicator: {
		position: "absolute",
		width: 16,
		height: 16,
		borderRadius: 10,
		borderColor: "#ffffff",
		borderWidth: 2,
		backgroundColor: "#009639",
		right: 0,
		top: 0,
	},
})
