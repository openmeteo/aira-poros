const originalInitialize = aira.meteoMapPanel.initialize;

Object.assign(aira.meteoMapPanel, {
  initialize() {
    originalInitialize.bind(this)();
    this.addStaticLayers();
  },

  addStaticLayers() {
    this.addStaticLayer("irrigation-network", aira.strings.irrigation_network);
  },

  addStaticLayer(basename, label) {
    const newLayer = new L.KML(`/static/kml/${basename}.kml`);
    aira.map.layerSwitcher.addOverlay(newLayer, label);
  },
});
