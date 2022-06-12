import React from "react";
import Carousel from "./components/Carousel.jsx";

function App() {

	const m109 = "https://www.avtorinok.ru/photo/pics/suzuki/m109r-boulevard/62288.jpg";
	const harley = "https://img.tsn.ua/cached/242/tsn-a7bcdedcd32efef57a130292f7597e57/thumbs/1036x648/82/76/a85c9877ecae3257b9131519c7457682.jpg";
	const ducati = "https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2021/11/Harley-Davidson-Sportster-S-2021-FOTO-002.jpeg";


	const images = [m109, harley, ducati]

	return (
		<Carousel links={images} />
	);
}

export default App;
