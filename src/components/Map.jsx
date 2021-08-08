import '../assets/scss/_map.scss';

const BASE_URL = "https://maps.googleapis.com/maps/api/staticmap?";

const params = [
    ["center", "40.876032,141.063222"],
    ["zoom", "15"],
    ["size", "1200x300"],
    ["key", "AIzaSyBqt4XYJ8JZbzaV_7hjZmA57eKHo8BYq00"],
    ["maptype", "satellite"],
];


const reqUrl = BASE_URL + params.filter( p => {
    return !!p[1];
} ).map( p => {
    return p.map( v => {
        // return encodeURIComponent( v.trim() ) 
        return v.trim();
    } ).join( '=' )
} ).join( '&' );

const Map = () => {
    return (
        <div id="map">
            <div className="map__container">
                <div className="map__wrapper">
                    {/* <img src="https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=980x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyBqt4XYJ8JZbzaV_7hjZmA57eKHo8BYq00" className="map__img" alt="location map" /> */}
                    <img src={reqUrl} className="map__img" alt="location_map" />
                </div>
                <div className="location__wrapper">
                    <div className="location__item">
                        <a href="https://sanrok-makado.com/" target="_blank" rel="noopener noreferrer">まかど観光ホテル</a>
                        <p className="address">青森県上北郡野辺地町湯沢９</p>
                    </div>
                    <div className="location__item">
                        <a href="http://www.town.noheji.aomori.jp/kanko/spot/pr"  target="_blank" rel="noopener noreferrer">野辺地町観光物産PRセンター</a>
                        <p className="address">青森県上北郡野辺地町中小中野１７−１７</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map;