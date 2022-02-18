/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';

/* local imports */
import IDENTIFIERS from './identifiers';
import { ViewSystemRepo } from '../domains/system/repositories';
import { ViewSystemInterRepo } from '../repositories/system';

/* main */
const bindRepositories = (container: Container) => {
  container
    .bind<ViewSystemRepo>(IDENTIFIERS.ViewSystemRepo)
    .to(ViewSystemInterRepo);
};

/* exports */
export { bindRepositories };
