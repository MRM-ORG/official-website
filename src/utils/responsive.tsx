export const isMobileDevice = () => {
  if (typeof navigator !== "undefined") {
    return (
      RegExp(/Android/i).exec(navigator.userAgent) ??
      RegExp(/webOS/i).exec(navigator.userAgent) ??
      RegExp(/iPhone/i).exec(navigator.userAgent) ??
      RegExp(/iPad/i).exec(navigator.userAgent) ??
      RegExp(/iPod/i).exec(navigator.userAgent) ??
      RegExp(/BlackBerry/i).exec(navigator.userAgent) ??
      RegExp(/Windows Phone/i).exec(navigator.userAgent)
    );
  }
  return false;
};
