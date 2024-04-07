export * as Notes from "./notes";
import { randomUUID } from "crypto";

export async function create() {
  const id = randomUUID();

  // TODO: calc bbox
  // TODO: calc geohash
  // TODO: write to database
}

export function get(/*TODO bbox: BoundingBox*/): String[] {
  return ["TODO"];
}
