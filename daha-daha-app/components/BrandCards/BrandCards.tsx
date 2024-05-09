import React, { useState, useRef } from "react"
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

const BrandCards = ({ navigation }: any) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const scrollX = useRef(new Animated.Value(0)).current

	const viewableItemsChanged = useRef(({ viewableItems }: any) => {
		setCurrentIndex(viewableItems[0].index)
	}).current

	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

	const sliderRef = useRef(null)

	return (
		<View style={styles.container}>
			<View style={styles.cards}>
				<FlatList
					data={data}
					renderItem={({ item }) => <BrandCardItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={(item: any) => item.id}
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

			<Paginator data={data} scrollX={scrollX} />
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
