/**
 * Fixed team contacts for /directory (photo source).
 * Not CMS-backed yet — no Sanity schema for this block.
 */

export type DirectoryContactMember = {
  role: string;
  name: string;
  email: string;
  phones: string[];
};

export type DirectoryContactTeam = {
  title: string;
  subtitle: string;
  members: DirectoryContactMember[];
};

export const directoryContactTeam: DirectoryContactTeam = {
  title: "En que te podemos servir?",
  subtitle: "Recuerda, Asdeoccidente Su Casa !!!",
  members: [
    {
      role: "Presidente",
      name: "Diego Fernando García G.",
      email: "presidencia@asdeoccidente.org.co",
      phones: [],
    },
    {
      role: "Director ejecutivo",
      name: "María Luisa Daza Díaz",
      email: "directorejecutivo@asdeoccidente.org.co",
      phones: ["(+57) 318 397 4134"],
    },
    {
      role: "Director comercial",
      name: "Steet Achury Mendoza",
      email: "comercial@asdeoccidente.org.co",
      phones: ["(+57) 300 3223066"],
    },
    {
      role: "Comunicaciones",
      name: "Sofía Mera E.",
      email: "comunicaciones@asdeoccidente.org.co",
      phones: ["(+57) 311 437 7960"],
    },
    {
      role: "Registros",
      name: "Cristian Castro",
      email: "registros@asdeoccidente.org.co",
      phones: ["Cel. 318 666 96 22", "Tel. 032 666 96 22 Ext. 110"],
    },
    {
      role: "Contadora",
      name: "Nubia Avendaño",
      email: "contabilidad@asdeoccidente.org.co",
      phones: ["Cel. 318 666 93 22", "Tel. 032 666 96 22 Ext. 107"],
    },
    {
      role: "Analista administrativa",
      name: "Paola Andrea Martínez R.",
      email: "asdeoccidente@asdeoccidente.org.co",
      phones: ["(+57) 318 666 96 22"],
    },
    {
      role: "Coordinador chalanería",
      name: "Diego Fernando Hincapié",
      email: "escueladechalaneria@asdeoccidente.org.co",
      phones: ["(+57) 318 666 96 22"],
    },
  ],
};
