/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from "./../../inversify.config";
import { Weapon, ThrowableWeapon, Warrior } from "./../../interfaces";
import { TYPES } from "./../../types";

it("is known that Ninja can fight", () => {
  const katanaMock = {
    hit: () => {
      return "hit with mock";
    },
  };

  container.unbind(TYPES.Weapon);
  container.bind<Weapon>(TYPES.Weapon).toConstantValue(katanaMock);
  const ninja = container.get<Warrior>(TYPES.Warrior);
  expect(ninja.fight()).toBe("hit with mock");
});

it("is known that Ninja can sneak", () => {
  const shurikenMock = {
    throw: () => {
      return "sneak with mock";
    },
  };

  container.unbind(TYPES.ThrowableWeapon);
  container
    .bind<ThrowableWeapon>(TYPES.ThrowableWeapon)
    .toConstantValue(shurikenMock);
  const ninja = container.get<Warrior>(TYPES.Warrior);
  expect(ninja.sneak()).toBe("sneak with mock");
});
