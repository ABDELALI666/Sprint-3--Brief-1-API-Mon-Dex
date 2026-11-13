const grid = document.getElementById("grid");

export function renderGrid(list) {
  grid.innerHTML = "";
  list.forEach(item => {
    const cardHTML = `
      <article data-id="${item.id}" class="flex flex-col gap-3 rounded-card bg-white p-3 pb-4 shadow-sm hover:-translate-y-1 transition-transform cursor-pointer">
        <div class="flex h-full items-center justify-center rounded-xl ">
          <img src="${item.image}" alt="${item.name}" class="h-full w-full rounded-lg object-contain">
        </div>
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-display text-md font-semibold truncate">${item.name}</h3>
          <span class="rounded-full bg-black px-3 py-1 text-xs font-bold text-white">${item.type}</span>
        </div>
        <button type="button" class="btn-outline bg-amber-400 hover:bg-amber-800 text-white ">Ajouter à l'équipe</button>
      </article>`;
    grid.innerHTML += cardHTML;
  });
}