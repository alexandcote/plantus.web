// @flow
import humps from 'humps';
import http from './plantus-http';
import Plant from '../types/plant';
import Place from '../types/place';

class PlantusAPI {
  static auth(email: string, password: string) {
    return http.fetch('/auth/token/', 'POST', false, { email, password })
      .then(response => response.token);
  }

  static getPlants() {
    return http.fetch('/pots/')
      .then(response => humps.camelizeKeys(response.results));
  }

  static getPlant(id: string) {
    return http.fetch(`/pots/${id}/`);
  }

  static newPlant(plant: Plant) {
    return http.fetch('/pots/', 'POST', true, plant);
  }

  static getPlaces() {
    return http.fetch('/places/')
      .then(response => humps.camelizeKeys(response.results));
  }

  static getPlace(id: string) {
    return http.fetch(`/places/${id}/`);
  }

  static newPlace(place: Place) {
    return http.fetch('/places/', 'POST', true, place);
  }

  static getUsers() {
    return http.fetch('/users/')
      .then(response => humps.camelizeKeys(response.results));
  }

  static getPlantTypes() {
    return http.fetch('/plants/')
      .then(response => humps.camelizeKeys(response.results));
  }

  static getTimeseries() {
    return http.fetch('/timeseries/')
      .then(response => humps.camelizeKeys(response.results));
  }

  static newOperation(id: string) {
    return http.fetch('/operations/', 'POST', true, { pot: id, action: 'water' })
      .then(response => humps.camelizeKeys(response.results));
  }
}

export default PlantusAPI;
