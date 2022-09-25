import axios from 'axios';

export class RestaurantService {
    static serverURL = `http://localhost:9000`;

    static getAllRestaurants() {
        let dataURL = `${this.serverURL}/restaurants`;
        return axios.get(dataURL);
    }
}

export default new RestaurantService();