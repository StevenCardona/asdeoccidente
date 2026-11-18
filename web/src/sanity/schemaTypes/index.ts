import { eventTypes } from "./events";
import { homeTypes } from "./home";
import { objectTypes } from "./objects";
import { schoolTypes } from "./school";
import { servicesTypes } from "./services";
import { siteSettings } from "./site/siteSettings";

export const schemaTypes = [
  ...objectTypes,
  siteSettings,
  ...homeTypes,
  ...schoolTypes,
  ...eventTypes,
  ...servicesTypes,
];
