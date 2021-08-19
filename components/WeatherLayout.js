import WeatherNavbar from "./WeatherNavbar";

const WeatherLayout = ({ children }) => {
  return (
    <div>
      <WeatherNavbar />
      {children}
    </div>
  );
}
 
export default WeatherLayout;