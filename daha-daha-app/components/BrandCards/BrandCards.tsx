import React, { useState, useRef, useEffect } from "react"
import {
	View,
	FlatList,
	StyleSheet,
	Animated,
	Touchable,
	TouchableOpacity,
	Text,
} from "react-native"
import BrandCardItem from "./BrandCardItem"
import { data } from "../data"
import Paginator from "./Paginator"
import axios from "axios"

const BrandCards = ({ navigation }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current
	const [cardColors, setCardColors] = useState([])

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const sliderRef = useRef(null)
	const [foodData, setFoodData] = useState([])

	const apiHeaders = {
		"Content-Type": "application/json",
		" X-Country-Id": "TR", //api header değerleri
		" X-Language-Id": "TR",
	}

	const fetchFoodData = async () => {
		try {
			const response = await axios.get(
				"https://api.extrazone.com/promotions/list?Channel=PWA",
				{
					headers: apiHeaders,
					method: "GET",
				},
			)

			if (response?.status === 200) {
				//api isteği başarılı ise
				setFoodData(response?.data)
				setCardColors(
					response?.data?.map(
						(item: any) => item?.PromotionCardColor,
					),
				)
			} else {
				console.error("API request failed:", response?.statusText)
			}
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchFoodData()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.cards}>
				<FlatList
					data={foodData}
					renderItem={({ item }) => (
						<BrandCardItem key={item.Id} item={item} />
					)}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={(item: any) => item.Id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false },
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={sliderRef}
				/>
			</View>

			<Paginator data={data} scrollX={scrollX} dotColors={cardColors} />
		</View>
	)
}

export default BrandCards

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",

		marginTop: 70,
	},
	cards: {
		flex: 3,
	},
})
