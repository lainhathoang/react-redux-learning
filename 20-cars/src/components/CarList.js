import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList() {
  const dispatch = useDispatch();

  // only display without searchTerm
  // const cars = useSelector((state) => {
  //   return state.cars.data;
  // });

  const { cars, formName } = useSelector(
    ({ form, cars: { data, searchTerm } }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        formName: form.name,
      };
    }
  );

  const handleCarDelete = (car) => {
    dispatch(removeCar(car));
  };

  const renderedCars = cars.map((car) => {
    // decide if this car should be bold
    // check the new name when the user is entering
    // state.form.name
    const bold =
      formName && car.name.toLowerCase().includes(formName.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleCarDelete(car.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;
