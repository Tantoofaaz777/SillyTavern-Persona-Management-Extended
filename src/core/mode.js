import { accountStorage } from "/scripts/util/AccountStorage.js";
import { PME } from "./constants.js";

/**
 * @returns {boolean}
 */
export function getAdvancedModeEnabled() {
  return accountStorage.getItem(PME.storage.advancedModeKey) === "true";
}

/**
 * @param {boolean} enabled
 */
export function setAdvancedModeEnabled(enabled) {
  accountStorage.setItem(PME.storage.advancedModeKey, String(!!enabled));
}

/**
 * @typedef {"name_asc"|"name_desc"|"id_asc"|"id_desc"|"desc_len_asc"|"desc_len_desc"|"connections_asc"|"connections_desc"|"lorebook_first"|"lorebook_last"} PersonaSortMode
 */

/**
 * @returns {PersonaSortMode}
 */
export function getPersonaSortMode() {
  const value = String(
    accountStorage.getItem(PME.storage.personaSortKey) ?? ""
  );
  if (
    [
      "name_asc",
      "name_desc",
      "id_asc",
      "id_desc",
      "desc_len_asc",
      "desc_len_desc",
      "connections_asc",
      "connections_desc",
      "lorebook_first",
      "lorebook_last",
    ].includes(value)
  ) {
    return /** @type {PersonaSortMode} */ (value);
  }
  return "name_asc";
}

/**
 * @param {PersonaSortMode} mode
 */
export function setPersonaSortMode(mode) {
  accountStorage.setItem(PME.storage.personaSortKey, String(mode));
}

/**
 * @returns {boolean}
 */
export function getPersonaGridViewEnabled() {
  return accountStorage.getItem(PME.storage.personaGridViewKey) === "true";
}

/**
 * @param {boolean} enabled
 */
export function setPersonaGridViewEnabled(enabled) {
  accountStorage.setItem(PME.storage.personaGridViewKey, String(!!enabled));
}

const PERSONA_PER_PAGE_OPTIONS = [5, 10, 25, 50, 100, 250, 500, 1000];

export { PERSONA_PER_PAGE_OPTIONS };

/**
 * @returns {number}
 */
export function getPersonaPerPage() {
  const value = Number(accountStorage.getItem(PME.storage.personaPerPageKey));
  return PERSONA_PER_PAGE_OPTIONS.includes(value) ? value : 10;
}

/**
 * @param {number} value
 */
export function setPersonaPerPage(value) {
  const next = PERSONA_PER_PAGE_OPTIONS.includes(Number(value))
    ? Number(value)
    : 10;
  accountStorage.setItem(PME.storage.personaPerPageKey, String(next));
}
