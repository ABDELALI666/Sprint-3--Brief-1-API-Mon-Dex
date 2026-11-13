import { getCreatures } from "./services/api.js";
import { renderGrid } from "./ui.js";

const offset = Math.floor(Math.random() * 10000);

try {
  const creatures = await getCreatures(offset);
  renderGrid(creatures);
} catch (error) {
  console.log("Problème :", error.message);
}