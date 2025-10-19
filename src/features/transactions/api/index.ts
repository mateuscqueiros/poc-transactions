import { api } from "../../../lib/api";

export function createTransfer(values: any) {
  return api.post("/transfer", values);
}

export function getTransfers() {
  return api.get("/transfers");
}
