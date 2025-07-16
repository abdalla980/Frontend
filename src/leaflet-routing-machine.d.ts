import * as L from 'leaflet';

declare module 'leaflet' {
    namespace Routing {
        interface RoutingControlOptions extends L.ControlOptions {
            waypoints?: L.LatLng[];
            routeWhileDragging?: boolean;
            show?: boolean;
            addWaypoints?: boolean;
            waypointMode?: string;
            draggableWaypoints?: boolean;
            fitSelectedRoutes?: boolean;
            showAlternatives?: boolean;
        }

        class Control extends L.Control {
            constructor(options?: RoutingControlOptions);
            setWaypoints(waypoints: L.LatLng[]): void;
            getWaypoints(): L.LatLng[];
        }

        function control(options?: RoutingControlOptions): Control;
    }
}
