/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { Container } from "inversify";

/* local import */
import bindSystemIoC from "../domains/system/ioc/binding";

const container = new Container();
bindSystemIoC(container);

/* exports */
export default container;
