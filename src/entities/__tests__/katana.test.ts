/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Katana } from "./../";

it("can be used to hit", () => {
  const wepon = new Katana();
  expect(wepon.hit()).toBe("cut!");
});
