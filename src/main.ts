import { parseSmartNumber } from "./parseSmartNumber";

// ---------------- UI ELEMENTS ----------------

const input = document.getElementById("numberInput") as HTMLInputElement;
const output = document.getElementById("output") as HTMLElement;
const resultBox = document.getElementById("result") as HTMLElement;
const parseBtn = document.getElementById("parseBtn") as HTMLButtonElement;
const copyBtn = document.getElementById("copyBtn") as HTMLButtonElement;

// ---------------- PARSE ACTION ----------------

parseBtn.addEventListener("click", () => {
  const result = parseSmartNumber(input.value);

  if (result === null) {
    resultBox.classList.add("hidden");
    output.textContent = "";
    return;
  }

  output.textContent = result.toLocaleString("de-DE");
  resultBox.classList.remove("hidden");
});

// ---------------- COPY ACTION ----------------

copyBtn.addEventListener("click", async () => {
  if (!output.textContent) return;
  await navigator.clipboard.writeText(output.textContent);
});

