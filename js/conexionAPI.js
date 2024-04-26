async function listarVideos() {
    const conexion = await fetch('http://localhost:3001/videos');
    const conexionConvertida = conexion.json();

    // console.log(conexion);
    // console.log(conexionConvertida);

    return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch('http://localhost:3001/videos', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    })
    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

export const conexionAPI = {
    listarVideos, enviarVideo
};

// listarVideos();