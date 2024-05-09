import React, { useState, useEffect } from "react"
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
import { extractText } from "../../utils/helper"

const BrandCardItem = ({ item }: any) => {
	//const { width } = useWindowDimensions()
	const navigation: any = useNavigation()

	item.Title = extractText(item.Title)
	item.ListButtonText = extractText(item.ListButtonText)

	return (
		<View style={styles.outerContainer}>
			<View
				style={[
					styles.biggerContainer,
					{ backgroundColor: item.PromotionCardColor },
				]}
			></View>
			<View style={styles.container}>
				<View style={{ height: 300, paddingHorizontal: 10 }}>
					<Image
						source={{ uri: item.ImageUrl }}
						style={[styles.image, { resizeMode: "cover" }]}
					/>
					<Image
						source={{ uri: item.BrandIconUrl }}
						style={styles.brandImg}
					/>
				</View>
				<View
					style={{
						alignItems: "center",
						flex: 1,
						flexDirection: "column",
						justifyContent: "flex-start",
						margin: 10,
					}}
				>
					<Text style={styles.title}>{item?.Title}</Text>
					{/* <Text style={styles.description}>{item.description}</Text> */}
					<TouchableOpacity
						style={styles.dahaDahaBtn}
						onPress={() =>
							navigation?.navigate("Detail", {
								//SeoName: item.SeoName,
								Id: item.Id,
							})
						}
					>
						<Text
							style={[
								styles.dahaDahaTxt,
								{ color: item.PromotionCardColor },
							]}
						>
							{item.ListButtonText}
						</Text>
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
		width: 300,
		height: 500,
		//overflow: "hidden",
		marginRight: 20,
	},
	biggerContainer: {
		position: "absolute",
		width: 300,
		overflow: "hidden",
		height: "95%",
		borderRadius: 20,
		borderTopLeftRadius: 30,
		borderBottomRightRadius: 20,
		transform: [{ skewY: "3deg" }],
	},
	container: {
		alignItems: "center",
		backgroundColor: "#fff",
		height: "92%",
		width: 300,
		borderRadius: 10,
		gap: 20,
		padding: 5,
		paddingHorizontal: 10,
		marginRight: 20,
		position: "relative",
		zIndex: 0,
	},
	image: {
		justifyContent: "center",
		width: 285,
		height: 300,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderBottomLeftRadius: 130,
		borderBottomRightRadius: 20,
	},
	brandImg: {
		width: 70,
		height: 70,
		borderRadius: 50,
		overflow: "hidden",
		position: "relative",
		zIndex: 1,
		top: -80,
		left: 0,
		borderWidth: 6,
		borderColor: "#fff",
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
		padding: 10,
		borderRadius: 10,
		textAlign: "center",
		width: 150,
		alignItems: "center",
		justifyContent: "center",
	},
	dahaDahaTxt: {
		fontSize: 18,
		fontWeight: "bold",
	},
})
