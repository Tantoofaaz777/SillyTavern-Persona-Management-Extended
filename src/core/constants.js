export const PME = {
  id: "pme",
  displayName: "Persona Management Extended",
  storage: {
    advancedModeKey: "pme_advanced_mode",
    personaSortKey: "pme_persona_sort",
    personaGridViewKey: "Personas_GridView",
    personaPerPageKey: "Personas_PerPage",
  },
  dom: {
    advancedToggleId: "pme_advanced_mode_toggle",
    rootId: "pme_root",
    rootClass: "pme-root",
  },
  interceptor: {
    globalKey: "pmeGenerateInterceptor",
  },
};
