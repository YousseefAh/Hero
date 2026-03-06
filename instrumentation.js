/**
 * Server-side localStorage polyfill for packages that expect it during SSR.
 * Node's --localstorage-file can provide a broken implementation; this ensures
 * a working no-op when localStorage is missing or incomplete.
 */
export function register() {
  if (typeof globalThis.localStorage === "undefined") {
    globalThis.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      get length() {
        return 0;
      },
      key: () => null,
    };
  } else if (typeof globalThis.localStorage.getItem !== "function") {
    // localStorage exists but is broken (e.g. incomplete Node polyfill)
    globalThis.localStorage = {
      getItem: () => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      get length() {
        return 0;
      },
      key: () => null,
    };
  }
}
