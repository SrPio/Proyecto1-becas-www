const API_URL = `http://localhost:8000/api/beca/`

export const registerBeca = async (newBeca) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(newBeca.nombre).trim(),
            "categoria": String(newBeca.categoria).trim(),
            "porcentaje_financia": String(`${newBeca.porcentaje_financia}%`).trim(),
            "pais": String(newBeca.pais).trim(),
            "universidad": String(newBeca.universidad).trim(),
            "requerimientos": String(newBeca.requerimientos).trim(),
            "popularidad": String(newBeca.popularidad).trim(),
        })
    });
};
export const updateBeca = async (becaId, updatedBeca) => {
    return await fetch(`${API_URL}${becaId}/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "nombre": String(updatedBeca.nombre).trim(),
            "categoria": String(updatedBeca.categoria).trim(),
            "porcentaje_financia": String(`${updatedBeca.porcentaje_financia}%`).trim(),
            "pais": String(updatedBeca.pais).trim(),
            "universidad": String(updatedBeca.universidad).trim(),
            "requerimientos": String(updatedBeca.requerimientos).trim(),
            "popularidad": String(updatedBeca.popularidad).trim(),
        })
    });
};

export const deleteBeca = async (becaId) => {
    return await fetch(`${API_URL}${becaId}/`,
        {
            method: 'DELETE'
        });
};

export const getBeca = async (becaId) => {
    return await fetch(`${API_URL}${becaId}/`);
};
