/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Shuriken } from "..";

it("can be used to throw", () => {
  const wepon = new Shuriken();
  expect(wepon.throw()).toBe("hit!");
});
