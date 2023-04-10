import { invoice } from "./classes/invoice.js";
import { payments } from "./classes/payments.js";
import { hasformatter } from "./interfaces/HasFormatter.js";
// const invOne = new invoice();
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasformatter;
  if (type.value === "invoice") {
    doc = new invoice(toform.value, details.value, amount.valueAsNumber);
  } else {
    doc = new payments(toform.value, details.value, amount.valueAsNumber);
  }
  console.log(doc);
});
