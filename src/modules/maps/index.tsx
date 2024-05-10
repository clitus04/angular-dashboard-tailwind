import MapView from "./mapView";

const Maps = () => {
  return (
    <div className="bg-white rounded-xl p-[1.5%] shadow-md h-[80vh]">
      <div className="pb-[1vh] text-primary-600">Google Maps</div>
      <div>
        <MapView />
      </div>
    </div>
  );
};

export default Maps;
