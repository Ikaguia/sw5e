import ArchetypeData from "./archetype.mjs";
import BackgroundData from "./background.mjs";
import ClassData from "./class.mjs";
import ConsumableData from "./consumable.mjs";
import ContainerData from "./container.mjs";
import EquipmentData from "./equipment.mjs";
import FeatData from "./feat.mjs";
import LootData from "./loot.mjs";
import ModificationData from "./modification.mjs";
import PowerData from "./power.mjs";
import ToolData from "./tool.mjs";
import WeaponData from "./weapon.mjs";

export {
  ArchetypeData,
  BackgroundData,
  ClassData,
  ConsumableData,
  ContainerData,
  EquipmentData,
  FeatData,
  LootData,
  ModificationData,
  PowerData,
  ToolData,
  WeaponData
};
export { default as ActionTemplate } from "./templates/action.mjs";
export { default as ActivatedEffectTemplate } from "./templates/activated-effect.mjs";
export { default as EquippableItemTemplate } from "./templates/equippable-item.mjs";
export { default as ItemDescriptionTemplate } from "./templates/item-description.mjs";
export { default as MountableTemplate } from "./templates/mountable.mjs";
export { default as PhysicalItemTemplate } from "./templates/physical-item.mjs";

export const config = {
  archetype: ArchetypeData,
  background: BackgroundData,
  backpack: ContainerData,
  class: ClassData,
  consumable: ConsumableData,
  equipment: EquipmentData,
  feat: FeatData,
  loot: LootData,
  modification: ModificationData,
  power: PowerData,
  tool: ToolData,
  weapon: WeaponData
};
