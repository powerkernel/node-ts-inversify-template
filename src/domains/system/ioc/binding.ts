/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2022 Power Kernel
 */

import { Container } from "inversify";
import IDENTIFIERS from "../../../config/identifiers";
import { ViewSystemInterRepo } from "../../../repositories/system";
import { ViewSystemController } from "../controllers";
import { ViewSystemRepo } from "../repositories";
import { ViewSystemAction } from "../actions";

const bindRepositories = (container: Container) => {
  container
    .bind<ViewSystemRepo>(IDENTIFIERS.ViewSystemRepo)
    .to(ViewSystemInterRepo);
};

const bindControllers = (container: Container) => {
  container
    .bind<ViewSystemController>(IDENTIFIERS.ViewSystemController)
    .to(ViewSystemController);
};

const bindActions = (container: Container) => {
  container
    .bind<ViewSystemAction>(IDENTIFIERS.ViewSystemAction)
    .to(ViewSystemAction);
};

const binding = (container: Container) => {
  bindRepositories(container);
  bindActions(container);
  bindControllers(container);
};

export default binding;
