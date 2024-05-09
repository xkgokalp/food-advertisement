import React, { useState } from "react"
import { View, TouchableOpacity } from "react-native"

const KesfetScreen = () => {
	const [expanded, setExpanded] = useState(false)

	const toggleShape = () => {
		setExpanded(!expanded)
	}

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<TouchableOpacity onPress={toggleShape}>
				<View
					style={{
						width: 0,
						height: 0,
						borderTopWidth: 200, // Yukarıdaki kenar boyutu
						borderBottomWidth: 200, // Aşağıdaki kenar boyutu
						borderLeftWidth: expanded ? 100 : 200, // Sol kenar boyutu
						borderRightWidth: expanded ? 200 : 100, // Sağ kenar boyutu
						borderTopColor: "transparent", // Yukarıdaki kenar rengi
						borderBottomColor: "blue", // Aşağıdaki kenar rengi
						borderLeftColor: "blue", // Sol kenar rengi
						borderRightColor: "blue", // Sağ kenar rengi
					}}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default KesfetScreen
