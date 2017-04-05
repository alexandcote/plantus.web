export const selectJWT = state => state.session;
export const selectAuthReady = state => state.auth;

export const selectPlaces = state => state.places.list;
export const selectPlace = state => state.place;
export const selectPlacesModalVisibility = state => state.places.modalVisibility;

export const selectPlants = state => state.plants.list;
export const selectPlant = state => state.plant;
export const selectPlantsModalVisibility = state => state.plants.modalVisibility;

export const selectUsers = state => state.users;

export const selectPlantTypes = state => state.plantTypes;

export const selectTimeseries = state => state.timeseries;
