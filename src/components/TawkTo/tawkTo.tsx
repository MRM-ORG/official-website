import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/65b8e6738d261e1b5f597637/1hld48d5n";
    script.setAttribute("crossorigin", "*");

    document?.body?.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;
