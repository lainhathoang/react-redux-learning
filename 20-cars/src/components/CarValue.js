import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, car) => {
        return acc + car.cost;
      }, 0);

    return filteredCars;
  });

  return <div className="car-value">Total value: ${totalCost}</div>;
}

export default CarValue;
