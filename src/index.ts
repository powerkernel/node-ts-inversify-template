/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import "reflect-metadata";
import container from "./inversify.config";
import { Warrior } from "./interfaces";
import { TYPES } from "./types";

const ninja = container.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());
