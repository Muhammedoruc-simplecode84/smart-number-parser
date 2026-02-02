// src/parseSmartNumber.ts

/**
 * Parses human-friendly number inputs into a clean integer.
 *
 * Supported:
 *  - 450k  -> 450000
 *  - 1.2m  -> 1200000
 *  - 2,500 -> 2500
 *  - €450k, 450k€, 450 k
 *
 * Rejected:
 *  - kk, km, 450kk
 *  - trailing separators (450,)
 */

 export function parseSmartNumber(value: string): number | null {
  if (!value) return null;

  let input = value.toLowerCase().trim();

  // reject multiple suffixes like kk or km
  if ((input.match(/[km]/g)?.length || 0) > 1) return null;

  // remove currency symbols
  input = input.replace(/[€$£]/g, "");

  let multiplier = 1;

  if (input.endsWith("k")) {
    multiplier = 1_000;
    input = input.slice(0, -1);
  } else if (input.endsWith("m")) {
    multiplier = 1_000_000;
    input = input.slice(0, -1);
  }

  // reject trailing separators
  if (/[.,]$/.test(input)) return null;

  // normalize number
  const normalized = input.replace(/,/g, "").replace(/\s/g, "");

  const number = Number(normalized);
  if (!isFinite(number)) return null;

  return Math.round(number * multiplier);
}
