import { ORC } from "./commons/config.js";
import * as Macro from "./commons/macro.js";
import * as Chat from "./commons/chat.js";
import ORCCharacterSheet from "./sheets/ORCCharacterSheet.js";
import ORCContainerSheet from "./sheets/ORCContainerSheet.js";
import ORCWeaponSheet from "./sheets/ORCWeaponSheet.js";
import ORCAmmoSheet from "./sheets/ORCAmmoSheet.js";
import ORCArmorSheet from "./sheets/ORCArmorSheet.js";
import ORCFoodSheet from "./sheets/ORCFoodSheet.js";
import ORCConsumableSheet from "./sheets/ORCConsumableSheet.js";
import ORCEquipableItemSheet from "./sheets/ORCEquipableItemSheet.js";
import ORCGeneralItemSheet from "./sheets/ORCGeneralItemSheet.js";
import ORCBagSheet from "./sheets/ORCBagSheet.js";
import ORCWoundSheet from "./sheets/ORCWoundSheet.js";
import ORCCapacitySheet from "./sheets/ORCCapacitySheet.js";
import ORCSpellSheet from "./sheets/ORCSpellSheet.js";
import { preloadHandlebarsTemplates } from "./commons/templates.js";
import { RegisterHandlebars } from "./commons/handlebars.mjs";

//import ORCActiveEffect from "./effects/ORCActiveEffect.js";
//import ORCActiveEffectConfig from "./effects/ORCActiveEffectConfig.js";

Hooks.once("init", async function () {
  console.log("orc | Initialising the ORC system");

  CONFIG.ORC = ORC;

  CONFIG.Combat.initiative = {
    formula: "(@ini.ndice)d(@ini.dice) + @ini.flat",
    //formula: "floor((@attributes.physical.value) / 10)d8 + floor(@attributes.intel.value / 5)",
  };

  game.orc = {
    macro: Macro,
  };

  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("character", ORCCharacterSheet, {
    types: ["character"],
    makeDefault: true,
  });
  Actors.registerSheet("container", ORCContainerSheet, {
    types: ["container"],
    makeDefault: true,
  });

  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("weapon", ORCWeaponSheet, {
    types: ["weapon"],
    makeDefault: true,
  });
  Items.registerSheet("ammo", ORCAmmoSheet, {
    types: ["ammo"],
    makeDefault: true,
  });
  Items.registerSheet("armor", ORCArmorSheet, {
    types: ["armor"],
    makeDefault: true,
  });
  Items.registerSheet("food", ORCFoodSheet, {
    types: ["food"],
    makeDefault: true,
  });
  Items.registerSheet("consumable", ORCConsumableSheet, {
    types: ["consumable"],
    makeDefault: true,
  });
  Items.registerSheet("equipableitem", ORCEquipableItemSheet, {
    types: ["equipableitem"],
    makeDefault: true,
  });
  Items.registerSheet("generalitem", ORCGeneralItemSheet, {
    types: ["generalitem"],
    makeDefault: true,
  });
  Items.registerSheet("bag", ORCBagSheet, {
    types: ["bag"],
    makeDefault: true,
  });
  Items.registerSheet("wound", ORCWoundSheet, {
    types: ["wound"],
    makeDefault: true,
  });
  Items.registerSheet("capacity", ORCCapacitySheet, {
    types: ["capacity"],
    makeDefault: true,
  });
  Items.registerSheet("spell", ORCSpellSheet, {
    types: ["spell"],
    makeDefault: true,
  });

  preloadHandlebarsTemplates();

  RegisterHandlebars();
});

Hooks.on("renderChatMessage", (app, html, data) => {
  Chat.highlightSuccessFailure(app, html, data);
});
