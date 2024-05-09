// // React
// import { useState, useRef } from "react"
// import { useWindowDimensions } from "react-native"
// import { View } from "native-base"

// // Styles
// import { styles } from "./ProductDetailSliderStyle"

// // Components
// import ImageFooter from "@components/productDetail/ImageFooter/ImageFooter"
// import ProductImage from "@components/productDetail/ProductImage/ProductImage"
// import Carousel from "react-native-snap-carousel"

// export default function ProductDetailSlider({ primaryImages, imageCount }) {
// 	const windowDimensions = useWindowDimensions()
// 	const [selectedImageIndex, setSelectedImageIndex] = useState(0)

// 	const sliderRef = useRef()

// 	return (
// 		<View>
// 			<Carousel
// 				ref={sliderRef}
// 				swipeThreshhold={10}
// 				sliderWidth={windowDimensions.width}
// 				itemWidth={windowDimensions.width}
// 				data={primaryImages}
// 				enableSnap={true}
// 				pagingEnabled={true}
// 				onSnapToItem={(slideIndex) => {
// 					setSelectedImageIndex(slideIndex)
// 				}}
// 				renderItem={(product) => {
// 					return <ProductImage source={product.item} />
// 				}}
// 			/>

// 			<ImageFooter selected={selectedImageIndex} count={imageCount} />
// 		</View>
// 	)
// }
