const BASE_URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

function toCreature(card) {
  return {
    id: card.id,
    name: card.name,
    type: card.attribute || card.type,
    level: card.level ?? "",
    stats: { attack: card.atk ?? 0, defence: card.def ?? 0 },
    image: card.card_images[0].image_url,
    description: card.desc,
  };
}

export async function getCreatures(offset = 0) {
  const response = await fetch(`${BASE_URL}?num=20&offset=${offset}`);
  if (!response.ok) {
    throw new Error(`Erreur ${response.status}`);
  }
  const json = await response.json();
  return json.data.map(toCreature);
}