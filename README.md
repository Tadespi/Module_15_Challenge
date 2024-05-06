# USGS Earthquake Visualization

# Background
The United States Geological Survey (USGS) aims to provide scientific data about natural hazards, ecosystem health, climate change impacts, and Earth processes. They collect vast amounts of earthquake data daily but lack a meaningful way to visualize it. This project addresses the need to develop tools for visualizing USGS earthquake data to educate the public and government organizations effectively.

**Instructions:**
**Part 1: Create the Earthquake Visualization**

1. **Get your dataset:**
   - Visit the USGS GeoJSON Feed page and choose a dataset (e.g., "All Earthquakes from the Past 7 Days").
   - Obtain the JSON representation of the selected dataset.

2. **Import and visualize the data:**
   - Use Leaflet to create a map plotting all earthquakes from the dataset based on their longitude and latitude.
   - Size data markers according to earthquake magnitude and color them based on depth (the third coordinate for each earthquake).
   - Include popups with additional earthquake information when markers are clicked.
   - Create a legend to provide context for the map data.

# Website
https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
