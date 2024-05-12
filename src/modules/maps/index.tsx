import MapView from "./mapView";

const Maps = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%] shadow-md h-[80vh]">
      <div className="pb-[1vw] text-primary-600 text-[3vw] sm:text-[1.75vw] lg:text-[1vw]">Google Maps</div>
      <div>
        <MapView />
      </div>
    </div>
  );
};

export default Maps;
