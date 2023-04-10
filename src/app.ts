import { invoice } from "./classes/invoice.js";
import { ListTEmplate } from "./classes/ListTemplate.js";
import { payments } from "./classes/payments.js";
import { hasformatter } from "./interfaces/HasFormatter.js";
// const invOne = new invoice();
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul")!;
const list = new ListTEmplate(ul);
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: hasformatter;
  if (type.value === "invoice") {
    doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new payments(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});
