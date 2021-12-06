/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { injectable } from "inversify";
import { Weapon } from "../interfaces";

@injectable()
class Katana implements Weapon {
  public hit() {
    return "cut!";
  }
}

export default Katana;
