// 1. Importar las herramientas que instalamos
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const path = require('path');

// 2. Inicializar nuestro servidor
const app = express();
const PORT = process.env.PORT || 8000; // Toolforge usa process.env.PORT


// 3. Configurar el servidor
app.use(cors()); // Habilitar CORS
// ¡Esta línea es clave! Le dice a Express que sirva todos los archivos de la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const WIKIMEDIA_ANALYTICS_URL = 'https://analytics.wikimedia.org/published/datasets/geoeditors_monthly/';

// 4. Crear las "rutas" o "endpoints" de nuestra API
// Esta ruta obtiene la lista de nombres de archivo
app.get('/api/files', async (req, res) => {
  try {
    const { data } = await axios.get(WIKIMEDIA_ANALYTICS_URL, {
      headers: {
        'User-Agent': 'GeoEditoresWikimediaChile/1.0 (https://wikimedia.cl; contacto@wikimedia.cl)'
      }
    });

    const $ = cheerio.load(data);
    const fileLinks = [];

    $('a[href$=".tsv"]').each((i, el) => {
      fileLinks.push($(el).attr('href'));
    });

    res.json(fileLinks);
  } catch (error) {
    console.error('Error en /api/files:', error.message);

    res.status(500).json({
      message: 'Error al obtener la lista de archivos.',
      detail: error.message
    });
  }
});

// Esta ruta descarga el contenido de un archivo específico
app.get('/api/file/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const fileUrl = `${WIKIMEDIA_ANALYTICS_URL}${filename}`;
    const { data } = await axios.get(fileUrl, {
      responseType: 'text',
      headers: {
        'User-Agent': 'GeoEditoresWikimediaChile/1.0 (https://wikimedia.cl; contacto@wikimedia.cl)'
      }
    });
    res.header('Content-Type', 'text/plain').send(data);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el archivo.' });
  }
});

// 5. Encender el servidor
app.listen(PORT, () => {
  console.log(`¡Servidor listo! Abre tu navegador en http://localhost:${PORT}`);
});
