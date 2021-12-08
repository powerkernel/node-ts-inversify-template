/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from "inversify";
import ViewSystemRepository from "../domains/system/view-system/ViewSystemRepository";
import ViewSystemInterRepo from "../repositories/system/ViewSystemInterRepo";

/* local imports */
import IDENTIFIERS from "./identifiers";

/* main */
const bindRepositories = (container: Container) => {
  container.bind<ViewSystemRepository>(IDENTIFIERS.ViewSystemRepository).to(ViewSystemInterRepo);
};

/* exports */
export { bindRepositories };
