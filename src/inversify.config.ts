/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Container } from "inversify";
import TYPES from "./types";
import { Ninja, Katana, Shuriken } from "./entities";
import Warrior from "./interfaces/warrior";
import ThrowableWeapon from "./interfaces/throwable-weapon";
import Weapon from "./interfaces/weapon";

const container = new Container();
container.bind<Warrior>(TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export default container;
