// @flow
import http from './plantus-http';
import Plant from '../types/plant';

class PlantusAPI {
  static auth(email: string, password: string) {
    return http.fetch('/auth/token/', 'POST', false, { email, password })
      .then(response => response.token);
  }

  static getPlants() {
    return http.fetch('/pots/', 'GET', true)
      .then(response => response.results);
  }

  static getPlant(id: string) {
    return http.fetch(`/pots/${id}/`, 'GET', true);
  }

  static newPlant(plant: Plant) {
    return http.fetch('/pots/', 'POST', true, plant);
  }

  static getPlaces() {
    return http.fetch('/places/', 'GET', true)
      .then(response => response.results);
  }

  static getPlace(id: string) {
    return http.fetch(`/places/${id}/`, 'GET', true);
  }
}

export default PlantusAPI;
