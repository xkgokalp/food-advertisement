import React from "react"
import {
	View,
	FlatList,
	StyleSheet,
	Text,
	useWindowDimensions,
	Image,
	TouchableOpacity,
} from "react-native"
import { data } from "../data"
import { useNavigation } from "@react-navigation/native"

const BrandCardItem = ({ item }: any) => {
	//const { width } = useWindowDimensions()
	const navigation: any = useNavigation()

	// function handleNavigateToDetail() {
	// 	navigation.navigate("Detail")
	// }
	return (
		<View style={styles.outerContainer}>
			<View style={styles.biggerContainer}></View>
			<View style={styles.container}>
				<Image
					source={item.image}
					style={[styles.image, { resizeMode: "contain" }]}
				/>
				<View>
					<Text style={styles.title}>{item.title}</Text>
					{/* <Text style={styles.description}>{item.description}</Text> */}
					<TouchableOpacity
						style={styles.dahaDahaBtn}
						onPress={() => navigation?.navigate("Detail")}
					>
						<Text style={styles.dahaDahaTxt}>Daha Daha</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

export default BrandCardItem

const styles = StyleSheet.create({
	outerContainer: {
		flex: 1,
		borderWidth: 2,
		width: 300,
		height: 500,
		overflow: "hidden",
	},
	biggerContainer: {
		position: "absolute",
		width: 500,
		height: "100%",
		backgroundColor: "#009639",
		borderRadius: 20,
		zIndex: -3,
		transform: [{ skewY: "5deg" }],
	},
	container: {
		borderColor: "red",
		backgroundColor: "#fff",
		borderWidth: 2,
		height: "90%",
		width: 300,
		gap: 10,
		padding: 5,
		marginRight: 10,
		position: "relative",
		zIndex: 0,
	},
	image: {
		//flex: 0.4,
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
		marginBottom: 10,
		textAlign: "center",
	},
	description: {
		fontSize: 16,
		color: "black",
		textAlign: "center",
	},
	dahaDahaBtn: {
		backgroundColor: "#333",
		padding: 10,
		borderRadius: 10,
		textAlign: "center",
		width: 150,
	},
	dahaDahaTxt: {
		color: "#fff",
		fontSize: 18,
	},
})
