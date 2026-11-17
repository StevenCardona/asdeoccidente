import { fairTypes } from "./fairs";
import { homeTypes } from "./home";
import { objectTypes } from "./objects";
import { schoolTypes } from "./school";
import { siteSettings } from "./site/siteSettings";

export const schemaTypes = [
  ...objectTypes,
  siteSettings,
  ...homeTypes,
  ...schoolTypes,
  ...fairTypes,
];
