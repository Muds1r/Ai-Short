import * as Sentry from "@sentry/node"


Sentry.init({
  dsn: "https://0b5fb6aa87512dae1d3dcd20a3255df6@o4511037882171392.ingest.de.sentry.io/4511037922803792",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});