import { Events } from "@/enums/events";

const GLOBAL_TIMEOUTS: any = {};

interface CustomWindow extends Window {
  dataLayer: any;
}

declare let window: CustomWindow;

export function onGlobalReady(property: any, cb: any) {
  clearTimeout(GLOBAL_TIMEOUTS[property]);

  if (window[property] == null) {
    GLOBAL_TIMEOUTS[property] = setTimeout(() => {
      onGlobalReady(property, cb);
    }, 500);

    return;
  }

  cb();
}

export function dataLayerPush(event: any) {
  onGlobalReady("dataLayer", () => {
    if (window.dataLayer == null) {
      console.error("dataLayer not available");
      return;
    }

    window.dataLayer.push(event);
  });
}

export const getEventPayload = (event: Events) => ({
  event: event,
  time: new Date().getTime(),
  device: window.navigator.userAgent,
});
