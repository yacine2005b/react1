import Cards from "./Components/Cards";
import NavBar from "./Components/NavBar";

import { data } from "./data";
export default function App() {
  const datashow = data.map((item, index) => (
    <Cards
      key={index}
      img={item.img}
      title={item.title}
      desc={item.desc}
      review={item.reveiw}
      price={item.price}
      date={item.date}
    />
  ));

  return (
    <div className="cards">
      <NavBar />
      {datashow}
    </div>
  );
}
