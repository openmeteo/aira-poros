const originalInitialize = aira.meteoMapPanel.initialize;

Object.assign(aira.meteoMapPanel, {
  initialize() {
    originalInitialize.bind(this)();
    this.addStaticLayers();
  },

  addStaticLayers() {
    this.addStaticLayer("irrigation-network", aira.strings.irrigation_network);
    this.addStaticLayer("drainage-network", aira.strings.drainage_network);
  },

  addStaticLayer(basename, label) {
    const newLayer = L.tileLayer.wms(aira.mapserverExtraLayersBaseUrl, {
      layers: basename,
      format: 'image/png',
      transparent: true,
    });
    aira.map.layerSwitcher.addOverlay(newLayer, label);
  },
});
