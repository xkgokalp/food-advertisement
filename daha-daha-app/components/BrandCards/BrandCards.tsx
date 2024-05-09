import React, { useState, useRef, useEffect } from "react"
import { View, FlatList, StyleSheet, Animated } from "react-native"
import BrandCardItem from "./BrandCardItem"
import Paginator from "./Paginator"
import axios from "axios"
import TagCardItem from "../TagCards/TagCardItem"

const BrandCards = ({ navigation }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current
	const [cardColors, setCardColors] = useState([])

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const sliderRef = useRef(null)
	const [foodData, setFoodData] = useState<any>([])
	const [tagData, setTagData] = useState([])
	//const [detailData, setDetailData] = useState<any>(null)

	const apiHeaders = {
		"Content-Type": "application/json",
		" X-Country-Id": "TR", //api header değerleri
		" X-Language-Id": "TR",
	}

	const fetchTagData = async () => {
		try {
			const response = await axios.get(
				"https://api.extrazone.com/tags/list",
				{
					headers: apiHeaders,
					method: "GET",
				},
			)

			if (response?.status === 200) {
				//api isteği başarılı ise
				setTagData(response?.data)
			} else {
				console.error("API request failed:", response?.statusText)
			}
		} catch (error) {
			console.log(error)
		}
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
		fetchTagData()
		fetchFoodData()
	}, [])

	//FİLTRELEME İŞLEMİ

	// const mappedData = foodData.map((item: any) => {
	// 	return {
	// 		Id: item.Id,
	// 		PromotionCardColor: item.PromotionCardColor,
	// 		ImageUrl: item.ImageUrl,
	// 		BrandIconUrl: item.BrandIconUrl,
	// 		Title: item.Title,
	// 		ListButtonText: item.ListButtonText,
	// 	}
	// })

	// const filteredFoodData = React.useMemo(() => {
	// 	debugger
	// 	if (!tagData?.length) return foodData

	// 	const filtered = foodData?.filter((foodItem: any) => {
	// 		const foodDetails = detailData?.find(
	// 			(detail: any) => detail?.Id === foodItem?.Id,
	// 		)
	// 		if (!foodDetails) return false

	// 		// Combine PromotionDetailItems from all PromotionDetailItemAreas
	// 		const allPromotionDetailItems =
	// 			foodDetails?.PromotionDetailItemAreas?.flatMap(
	// 				(area: any) => area?.PromotionDetailItems,
	// 			)

	// 		return tagData?.some((tag: any) =>
	// 			allPromotionDetailItems?.some(
	// 				(detailItem: any) => detailItem?.Title === tag?.Title,
	// 			),
	// 		)
	// 	})

	// 	return filtered
	// }, [detailData, foodData, tagData])

	//FİLTRELEME İŞLEMİ

	return (
		<View style={styles.container}>
			<FlatList
				data={tagData} // Render tags from initial API call
				renderItem={(
					{ item }, // Render each tag
				) => <TagCardItem key={item.Id} item={item} />}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled
				bounces={false}
				keyExtractor={(item: any) => item.Id}
				ref={sliderRef}
			/>
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

			<Paginator
				data={foodData}
				scrollX={scrollX}
				dotColors={cardColors}
			/>
		</View>
	)
}

export default BrandCards

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-evenly",

		marginTop: 20,
	},
	cards: {
		flex: 22,
	},
})
