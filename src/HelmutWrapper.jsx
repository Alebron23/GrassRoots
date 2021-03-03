import { Helmet } from "react-helmet";
import logo from "./img/logo.png";

const HelmutWrapper = () => {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="GrassRoots Landscaping in Spartanburg SC"
      />
      <meta
        property="og:description"
        content="Landscaping company in Spartanburg SC doing lawn maintenance, irrigation and landscape lighting installs"
      />
      <meta property="og:image" content={logo} />
      <meta
        property="og:url"
        content={
          "https://grassrootsupstate.com" +
          window.location.pathname +
          window.location.search
        }
      />

      <meta
        name="twitter:title"
        content="GrassRoots Landscaping in Spartanburg SC"
      />
      <meta
        name="twitter:description"
        content="Landscaping company in Spartanburg SC doing lawn maintenance, irrigation and landscape lighting installs"
      />
      <meta name="twitter:image" content={logo} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default HelmutWrapper;
