export function extractText(htmlString: any) {
	// HTML taglarını kaldır
	const cleanText = htmlString?.replace(/<[^>]*>/g, "")

	// HTML özel karakterlerini düz metne dönüştür
	const decodedText = cleanText
		?.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&quot;/g, '"')
		.replace(/&#x27;/g, "'")
		.replace(/&#x2F;/g, "/")
		.replace(/&Uuml;/g, "Ü")
		.replace(/&uuml;/g, "ü")
		.replace(/&Ouml;/g, "Ö")
		.replace(/&ouml;/g, "ö")
		.replace(/&Ccedil;/g, "Ç")
		.replace(/&ccedil;/g, "ç")
		.replace(/&Iuml;/g, "İ")
		.replace(/&iuml;/g, "i")
		.replace(/&Scedil;/g, "Ş")
		.replace(/&scedil;/g, "ş")
		.replace(/&Yacute;/g, "Y")
		.replace(/&yacute;/g, "y")

	// Stringi trimleme işlemi yap
	const trimmedText = decodedText?.trim()

	return trimmedText
}
