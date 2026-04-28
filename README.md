# Wikimedia Geo-editors Viewer

[![Status](https://img.shields.io/badge/status-active-brightgreen)](https://geo-editores.toolforge.org/)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

An interactive data viewer for exploring and analyzing monthly geolocated editor data from Wikimedia projects.

**Visit the live application:** **[https://geo-editores.toolforge.org/](https://geo-editores.toolforge.org/)**

## About the Project

This viewer is designed to support the analysis of the Wikimedia Foundation’s public differentially-private monthly geoeditor dataset, which provides aggregated information about the geographic distribution and activity levels of Wikimedia editors.

The client-server architecture, with a **Node.js backend** and a **Vue.js 3 frontend**, ensures robust performance, avoids CORS issues, and provides a smooth and fully responsive user experience.

The interface currently supports **Spanish and English**. Translations are managed through a `translations` object in `public/index.html`, making it easier to add more languages in the future.

## About the Data

This tool uses the Wikimedia Foundation’s **Geoeditors Differential Privacy — Monthly** dataset.

The dataset provides monthly geoeditor data that is partitioned by country and Wikimedia project, allowing users to analyze editor activity at a country-project level. It includes thousands of rows of editor data and is designed to support analysis while protecting individual privacy.

The dataset uses **differential privacy**, a privacy-preserving method that adds a controlled amount of statistical noise before data is released. This makes it harder to identify or recover information about any individual editor, while still preserving the usefulness of the dataset for broader analysis.

The monthly release includes a long-term history of pre-aggregated editor counts by country, project, and activity level, going back to **January 2018**. However, some limitations are important to consider:

* Historical monthly data does not include edit counts.
* Country protection list data does not include associated edit counts.
* To conserve privacy budget and improve performance for editor counts, edit counts are not published for medium- and higher-risk countries.

More information about the dataset is available in the official Wikimedia Analytics documentation: [Geoeditors Differential Privacy — Monthly](https://analytics.wikimedia.org/published/datasets/geoeditors_monthly/00_README.html)

## Main Features

* ✨ **Modern and Reactive Interface:** Built with Vue.js 3 and Tailwind CSS for a smooth user experience and a responsive design across devices.
* 📊 **Dual Data Visualization:** Analyze trends with a line chart and summarize total volumes with a bar chart, both interactive and generated with Chart.js.
* 🔍 **Advanced Filter Panel:** Filter easily by year, month/file, project/wiki, and country using searchable selectors designed to handle large lists.
* ⚖️ **Comparison Tool:** Compare two different datasets, such as Chile vs. Argentina in the same month, through a dedicated panel with comparative tables and charts.
* 🎓 **Interactive Tutorial:** A welcome guide that introduces new users to the platform’s main features.
* 💾 **CSV Export:** Export filtered data for external analysis in spreadsheets or other tools.
* 🌐 **Multilingual Interface:** Switch between Spanish and English from the interface.

## Built With

This project was made possible thanks to the following technologies:

**Backend:**

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Axios](https://axios-http.com/) for HTTP requests
* [Cheerio](https://cheerio.js.org/) for parsing the Wikimedia Analytics file index

**Frontend:**

* [Vue.js 3](https://vuejs.org/) with the Composition API
* [Tailwind CSS](https://tailwindcss.com/)
* [Chart.js](https://www.chartjs.org/)
* [Font Awesome](https://fontawesome.com/)

## Local Usage

To run this project on your own machine, follow these steps:

1. **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) installed. It includes npm.
2. **Clone the repository:**

   ```sh
   git clone https://github.com/jordylizana-ship-it/Visualizador-Geo-editores.git
   ```
3. **Navigate to the project folder:**

   ```sh
   cd Visualizador-Geo-editores
   ```
4. **Install dependencies:**

   ```sh
   npm install
   ```
5. **Start the server:**

   ```sh
   npm start
   ```

   The application should now be running at:

   ```sh
   http://localhost:8000
   ```

## Notes for Development

The frontend is served from the `public/` folder. The main interface is located in:

```sh
public/index.html
```

The backend creates two local routes used by the frontend:

```sh
/api/files
/api/file/:filename
```

These routes retrieve the list of available `.tsv` files and download the selected datasets from Wikimedia Analytics.

## Adding More Languages

The interface translations are currently managed inside the `translations` object in `public/index.html`.

To add a new language:

1. Copy the existing `es` or `en` translation block.
2. Translate the values while keeping the same keys.
3. Add the new language option to the language selector in the header.

In the future, translations could be moved to separate files such as:

```sh
public/i18n/es.json
public/i18n/en.json
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Jordy Lizana - [jordylizana-ship-it](https://github.com/jordylizana-ship-it)

Carla Toro - [Soylacarli](https://github.com/Soylacarli)

With the support of **[Wikimedia Chile](https://wikimedia.cl/)**
