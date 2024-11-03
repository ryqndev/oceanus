import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    WMSTileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import cn from "./Map.module.scss";
import { LatLng, LatLngBounds, LatLngTuple } from "leaflet";

const SHAWS_COVE_CA_COORDINATES: LatLngTuple = [33.545615, -117.798193];

const southWest = new LatLng(-89.98155760646617, -180),
    northEast = new LatLng(89.99346179538875, 180);
const bounds = new LatLngBounds(southWest, northEast);

export const Map = () => {
    return (
        <MapContainer
            className={cn.map}
            center={SHAWS_COVE_CA_COORDINATES}
            zoom={13}
            minZoom={2}
            attributionControl={false}
            maxBoundsViscosity={1}
            maxBounds={bounds}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {/* <WMSTileLayer
                url="https://wms.gebco.net/mapserv"
                layers="GEBCO_LATEST"
                version="1.3.0"
            ></WMSTileLayer> */}
            <Marker position={SHAWS_COVE_CA_COORDINATES}>
                <Popup>Shaw's Cove</Popup>
            </Marker>
        </MapContainer>
    );
};
