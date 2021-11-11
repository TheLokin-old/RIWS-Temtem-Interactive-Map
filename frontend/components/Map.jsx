import { CRS } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { Component } from 'react';
import { MapContainer, Marker, TileLayer, ZoomControl } from 'react-leaflet';

export default class Map extends Component {
    render() {
        return (
            <MapContainer
                center={[-128, 128]}
                zoom={6}
                minZoom={0}
                maxZoom={6}
                zoomControl={false}
                attributionControl={false}
                crs={CRS.Simple}
                maxBounds={[
                    [0, 256],
                    [-256, 0],
                ]}
                style={{
                    width: '100vw',
                    height: '100vh',
                    background: '#001c42',
                }}
            >
                <ZoomControl position="bottomright"></ZoomControl>
                <TileLayer
                    url="airborne-archipelago/{z}/{x}/{y}.png"
                    noWrap={true}
                />
                <Marker position={[-128, 128]} draggable={true}></Marker>
            </MapContainer>
        );
    }
}
