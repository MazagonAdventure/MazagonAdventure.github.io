/*
 * DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
 * All changes done to this file will be lost upon re-running the 'silence createapi' command.
 * If you want to create new API methods, define them in a new file.
 *
 * Silence is built and maintained by the DEAL research group at the University of Seville.
 * You can find us at https://deal.us.es
 */

"use strict";

import { BASE_URL, requestOptions } from './common.js';

const ubicacionAPI_auto = {

    /** Gets all entries from 'ubicacion' */
    getAll: async function() {
        let response = await axios.get(`${BASE_URL}/ubicacion`, requestOptions);
        return response.data;
    },

    /** Gets an entry from 'ubicacion' by its primary key */
    getById: async function(id_ubicacion) {
        let response = await axios.get(`${BASE_URL}/ubicacion/${id_ubicacion}`, requestOptions);
        return response.data[0];
    },

    /** Creates a new entry in 'ubicacion' */
    create: async function(formData) {
        let response = await axios.post(`${BASE_URL}/ubicacion`, formData, requestOptions);
        return response.data;
    },

    /** Updates an existing entry in 'ubicacion' by its primary key */
    update: async function(formData, id_ubicacion) {
        let response = await axios.put(`${BASE_URL}/ubicacion/${id_ubicacion}`, formData, requestOptions);
        return response.data;
    },

    /** Deletes an existing entry in 'ubicacion' by its primary key */
    delete: async function(id_ubicacion) {
        let response = await axios.delete(`${BASE_URL}/ubicacion/${id_ubicacion}`, requestOptions);
        return response.data;
    },
};

export { ubicacionAPI_auto };