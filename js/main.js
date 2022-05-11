

//O`rab turuvchilarni document dan olib kelish!
    const pokemontsUl = document.querySelector(".pokemonts-list");
    document.body.append(pokemontsUl);

    
// forni ishga tushurgan holda elementlarni yaratish yani createElement qilib!
    for (let i = 0; i < pokemons.length; i++) {
        const currentPokemons = pokemons[i];
        const pokemontsUl = document.querySelector(".pokemonts-list");
        const pokemontsLi = document.createElement("li");
        pokemontsLi.className = "pokemonts-item"


        // const pokemontsId = document.createElement("p", "pokemons-id", currentPokemons[i].id);
    const pokemontsId = document.createElement("p");
    pokemontsId.className = "pokemons-id";
    pokemontsId.textContent = currentPokemons.id;
    

    const pokemontsNum = document.createElement("p", "pokemons-num", currentPokemons.num);
    // const pokemontsNum = document.createElement("p");
    // pokemontsNum.className = "pokemons-num";
    // pokemontsNum.textContent = pokemons[i].num;

    // const pokemontsName = document.createElement("h3", "pokemons-Name", pokemons[i].name);
    const pokemontsName = document.createElement("h3");
    pokemontsName.textContent = pokemons[i].name;
    pokemontsName.className = "pokemonts-name";

    // const pokemontsImg = document.createElement("img", "pokemons-img", pokemons[i].img);
    const pokemontsImg = document.createElement("img");
    pokemontsImg.className = "pokemons-img";
    pokemontsImg.src = pokemons[i].img;

    const pokemontsType = document.createElement("span", "pokemons-type", pokemons[i].type)
    // const pokemontsType = document.createElement("span");
    // pokemontsType.textContent = pokemons[i].type;
    // pokemontsType.className = "pokemons-type";

    const pokemontsHeight = document.createElement("span", "pokemons-height", pokemons[i].height);
    // const pokemontsHeight = document.createElement("span");
    // pokemontsHeight.textContent = pokemons[i].height;
    // pokemontsHeight.className = "pokemons-height";

    const pokemontsWeight = document.createElement("span", "pokemons-weight", pokemons[i].weight);
    // const pokemontsWeight = document.createElement("span");
    // pokemontsWeight.textContent = pokemons[i].weight;
    // pokemontsWeight.className = "pokemons-weight";

    const pokemontsCondy = document.createElement("span", "pokemons-condy", pokemons[i].candy)
    // const pokemontsCondy = document.createElement("span");
    // pokemontsCondy.textContent = pokemons[i].candy;
    // pokemontsCondy.className = "pokemons-candy";

    const pokemontsCandyCount = document.createElement("span", "pokemons-candy-count", pokemons[i].candy_count);
    // const pokemontsCandyCount = document.createElement("span");
    // pokemontsCandyCount.textContent = pokemons[i].candy_count;
    // pokemontsCandyCount.className = "pokemons-candy-count";

    const pokemontsEgg = document.createElement("span", "pokemons-candy-count", pokemons[i].egg);
    // const pokemontsEgg = document.createElement("span");
    // pokemontsEgg.textContent = pokemons[i].egg;
    // pokemontsEgg.className = "pokemons-egg";

    const pokemontsSpawnChance = document.createElement("span");
    pokemontsSpawnChance.textContent = pokemons[i].spawn_chance;
    pokemontsSpawnChance.className = "spawn-chance";

    const pokemontsAvgSpawns = document.createElement("span");
    pokemontsAvgSpawns.textContent = pokemons[i].avg_spawns;
    pokemontsAvgSpawns.className = "pokemons-avg-spawns";

    const pokemontsSpawnTime = document.createElement("span");
    pokemontsSpawnTime.textContent = pokemons[i].spawn_time;
    pokemontsSpawnTime.className = "pokemons-spawn-time";

    const pokemontsMultipliers = document.createElement("span");
    pokemontsMultipliers.textContent = pokemons[0].multipliers;
    pokemontsMultipliers.className = "pokemons-multipliers";

    const pokemontsWeaknesses = document.createElement("p");
    pokemontsWeaknesses.textContent = pokemons[i].weaknesses;
    pokemontsWeaknesses.className = "pokemons-weaknesses";

    // append qilish yani document ekranga chiqarish
    pokemontsLi.appendChild(pokemontsId);
    pokemontsLi.append(pokemontsNum);
    pokemontsLi.append(pokemontsImg);
    pokemontsLi.append(pokemontsName);
    pokemontsLi.append(pokemontsType);
    pokemontsLi.append(pokemontsHeight);
    pokemontsLi.append(pokemontsWeight);
    pokemontsLi.append(pokemontsCondy);
    pokemontsLi.append(pokemontsCandyCount);
    pokemontsLi.append(pokemontsEgg);
    pokemontsLi.append(pokemontsSpawnChance);
    pokemontsLi.append(pokemontsAvgSpawns);
    pokemontsLi.append(pokemontsSpawnTime);
    pokemontsLi.append(pokemontsMultipliers);

    // appendChildren(pokemontsId, pokemontsNum, pokemontsImg, pokemontsName, pokemontsType, pokemontsHeight, pokemontsWeight, pokemontsCondy, pokemontsCandyCount, pokemontsEgg, pokemontsSpawnChance, pokemontsAvgSpawns, pokemontsSpawnTime, pokemontsMultipliers)
    pokemontsUl.append(pokemontsLi);
}