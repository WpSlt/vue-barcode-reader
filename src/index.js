import ImageBarcodeReader from "./components/ImageBarcodeReader.vue";
import StreamBarcodeReader from "./components/StreamBarcodeReader.vue";

/*
export default (() => {
    // Get component instance
    const installable = StreamBarcodeReader;
  
    // Attach install function executed by Vue.use()
    installable.install = (app) => {
      app.component('StreamBarcodeReader', installable);
    };
    return installable;
  })();
*/

export { ImageBarcodeReader, StreamBarcodeReader };
