const originalCreate = aira.map.create;

const newmethods = {
  create() {
    originalCreate.bind(this)();
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
    this.layerSwitcher.addOverlay(newLayer, label);
  },
};

Object.assign(aira.map, newmethods);
Object.assign(aira.agrifieldsMap, newmethods);
Object.assign(aira.agrifieldEditMap, newmethods);
