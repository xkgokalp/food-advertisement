import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import React, { useState } from "react"

const TagCardItem = (data: any) => {
	const [isClicked, setIsClicked] = useState<boolean>(false)

	const handlePress = () => {
		setIsClicked(!isClicked)
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[
					styles.tagContainer,
					isClicked && { borderColor: "red" },
				]}
				onPress={handlePress}
			>
				<Image
					source={{ uri: data?.item?.IconUrl }}
					style={styles.image}
				/>
				<Text style={styles.tagText}>{data?.item?.Name}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default TagCardItem

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: 40,
		paddingRight: 5,
	},
	tagContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		width: 120,
		height: 40,
		borderRadius: 10,
		borderWidth: 1.5,
		borderColor: "#ECEEEF",
	},
	image: {
		width: 24,
		height: 24,
		borderRadius: 8,
	},
	tagText: {
		fontSize: 12,
		color: "#1D1E1C",
		fontWeight: 500,
	},
})
