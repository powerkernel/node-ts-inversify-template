/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { injectable } from "inversify";
import { ThrowableWeapon } from "../interfaces";

@injectable()
class Shuriken implements ThrowableWeapon {
  public throw() {
    return "hit!";
  }
}

export default Shuriken;
