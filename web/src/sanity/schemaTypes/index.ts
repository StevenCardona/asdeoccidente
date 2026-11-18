import { equinotherapyTypes } from "./equinotherapy";
import { eventTypes } from "./events";
import { homeTypes } from "./home";
import { membershipTypes } from "./membership";
import { objectTypes } from "./objects";
import { schoolTypes } from "./school";
import { servicesTypes } from "./services";
import { siteSettings } from "./site/siteSettings";
import { venueTypes } from "./venue";

export const schemaTypes = [
  ...objectTypes,
  siteSettings,
  ...homeTypes,
  ...schoolTypes,
  ...eventTypes,
  ...servicesTypes,
  ...venueTypes,
  ...membershipTypes,
  ...equinotherapyTypes,
];
