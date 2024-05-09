import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen"
import DetailScreen from "../screens/DetailScreen"
import MoreWallet from "../screens/MoreWallet"
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native"
import KesfetScreen from "../screens/KesfetScreen"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

type CustomTabBarButtonProps = {
	children: string
	onPress: () => void
}

function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="Detail" component={DetailScreen} />
		</Stack.Navigator>
	)
}

const CustomTabBarButton = ({ children, onPress }: CustomTabBarButtonProps) => (
	<TouchableOpacity
		style={{
			top: -20,
			justifyContent: "center",
			alignItems: "center",
			...style.shadow,
		}}
		onPress={onPress}
	>
		<View
			style={{
				width: 70,
				height: 70,
				borderRadius: 35,
				backgroundColor: "#33333",
			}}
		>
			{children}
		</View>
	</TouchableOpacity>
)

const Tabs = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: {
					position: "absolute",
					backgroundColor: "#ffffff",
					borderRadius: 35,
					borderColor: "#ECEEEF",
					height: 90,
					paddingHorizontal: 20,
					...style.shadow,
				},
			}}
		>
			<Tab.Screen
				name="Kesfet"
				component={KesfetScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								top: 10,
							}}
						>
							<Image
								source={require("../assets/a.png")}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									marginBottom: 10,
								}}
							/>
							<Text
								style={{
									color: focused ? "#e32f45" : "#748c94",
									fontSize: 12,
									fontWeight: "bold",
									fontFamily: "HelveticaNeue-Bold",
								}}
							>
								KEŞFET
							</Text>
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Home"
				component={HomeStack}
				options={{
					tabBarIcon: () => (
						<Image
							source={require("../assets/homeIcon.png")}
							resizeMode="contain"
							style={{
								width: 70,
								height: 70,
							}}
						/>
					),
					tabBarButton: (props: any) => (
						<CustomTabBarButton {...props} />
					),
				}}
			/>
			<Tab.Screen
				name="MoreWallet"
				component={MoreWallet}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								alignItems: "center",
								justifyContent: "center",
								top: 10,
							}}
						>
							<Image
								source={require("../assets/dahacuzdanIcon.png")}
								resizeMode="contain"
								style={{
									width: 25,
									height: 25,
									marginBottom: 10,
								}}
							/>
							<Text
								style={{
									color: focused ? "#e32f45" : "#748c94",
									fontSize: 12,
									fontWeight: "bold",
									fontFamily: "HelveticaNeue-Bold",
								}}
							>
								DAHA CÜZDAN
							</Text>
						</View>
					),
				}}
			/>
		</Tab.Navigator>
	)
}

const style = StyleSheet.create({
	shadow: {
		shadowColor: "#0000000D",
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.5,
		elevation: 5,
	},
})

export default Tabs
