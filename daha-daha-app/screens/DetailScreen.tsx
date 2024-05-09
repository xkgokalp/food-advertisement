import React, { useState, useEffect } from "react"
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native"
import { useRoute } from "@react-navigation/native"
import axios from "axios"
import { extractText } from "../utils/helper"
import AntDesign from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native"

const DetailScreen = () => {
	const route = useRoute()
	const { Id }: any = route.params
	const [data, setData] = useState<any>(null)
	const navigation: any = useNavigation()

	const apiHeaders = {
		"Content-Type": "application/json",
		" X-Country-Id": "TR",
		" X-Language-Id": "TR",
	}

	const fetchDetails = async () => {
		try {
			const response = await axios.get(
				`https://api.extrazone.com/promotions?Id=${Id}`,
				{
					headers: apiHeaders,
					method: "GET",
				},
			)

			if (response?.status === 200) {
				setData(response?.data)
			} else {
				console.error("API request failed:", response?.statusText)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchDetails()
	}, [Id])

	console.log(data)

	return (
		<View style={styles.container}>
			<View style={styles.goBackButton}>
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={{
						width: 40,
						height: 40,
						backgroundColor: "#1D1E1C",
						borderRadius: 25,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<AntDesign name="arrowleft" size={25} color="#FFF" />
				</TouchableOpacity>
			</View>
			<View style={styles.imageContainer}>
				<Image source={{ uri: data?.ImageUrl }} style={styles.image} />
				<Image
					source={{ uri: data?.BrandIconUrl }}
					style={styles.brandImg}
				/>
			</View>
			<ScrollView style={styles.detailContainer}>
				<View style={{ flex: 1, gap: 8 }}>
					<Text style={styles.title}>{extractText(data?.Title)}</Text>
					<Text style={styles.description}>
						{extractText(data?.Description)}
					</Text>
					{data?.PromotionDetailItemAreas?.map((item: any) => (
						<>
							<Text style={styles.title}>
								{extractText(item?.Title)}
							</Text>
							<Text style={styles.description}>
								{extractText(item?.Description)}
							</Text>
						</>
					))}
				</View>
			</ScrollView>
			<View style={styles.transparentButton}>
				<TouchableOpacity
					style={styles.detailButton}
					onPress={() => console.log("Detail butonuna tıklandı")}
				>
					<Text style={{ color: "#fff", fontWeight: 700 }}>
						{data?.DetailButtonText}
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default DetailScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "#fff",
		gap: 10,
	},
	goBackButton: {
		position: "absolute",
		top: 60,
		left: 30,
		zIndex: 1,
	},
	imageContainer: {
		width: "100%",
		height: 350,
	},
	image: {
		width: "100%",
		height: 350,
		borderBottomLeftRadius: 150,
	},
	brandImg: {
		width: 90,
		height: 90,
		borderRadius: 50,
		overflow: "hidden",
		position: "relative",
		zIndex: 1,
		top: -75,
		left: 10,
		borderWidth: 6,
		borderColor: "#fff",
	},
	detailContainer: {
		flex: 1,
		width: "100%",
		padding: 20,
		gap: 20,
		marginBottom: 110,
		marginLeft: 40,
		marginRight: 20,
	},
	title: {
		fontWeight: "700",
		fontSize: 26,
	},
	description: {
		fontWeight: "400",
		fontSize: 14,
		lineHeight: 22,
	},
	detailButton: {
		width: "100%",
		height: 50,
		backgroundColor: "#F40000",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
	},
	transparentButton: {
		width: "95%",
		height: 50,
		backgroundColor: "rgba(255, 255, 255, 0.5)",
		borderRadius: 25,
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		bottom: "15%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
})
