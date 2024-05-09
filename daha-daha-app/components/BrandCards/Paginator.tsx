import React from "react"
import { View, StyleSheet, Animated, useWindowDimensions } from "react-native"

const Paginator = ({ data, scrollX, dotColors }: any) => {
	const { width } = useWindowDimensions()
	return (
		<View style={{ flexDirection: "row", marginBottom: -30 }}>
			{data.map((_: any, index: number) => {
				const inputRange = [
					(index - 1) * width,
					index * width,
					(index + 1) * width,
				]

				const dotWidth = scrollX.interpolate({
					inputRange,
					outputRange: [10, 20, 10],
					extrapolate: "clamp",
				})

				const opacity = scrollX.interpolate({
					inputRange,
					outputRange: [0.3, 1, 0.3],
					extrapolate: "clamp",
				})

				return (
					<Animated.View
						style={[
							styles.dot,
							{
								width: dotWidth,
								opacity: opacity,
								backgroundColor:
									dotColors.length > 0
										? dotColors[index]
										: "red",
							},
						]}
						key={index.toString()}
					/>
				)
			})}
		</View>
	)
}

export default Paginator

const styles = StyleSheet.create({
	dot: {
		height: 10,
		borderRadius: 5,
		marginHorizontal: 8,
		marginBottom: 134,
		marginTop: -60,
	},
})
