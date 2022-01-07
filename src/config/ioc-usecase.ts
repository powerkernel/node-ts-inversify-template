/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import type { Container } from 'inversify';

/* local imports */
import IDENTIFIERS from './identifiers';
import { ViewSystemUseCase } from '../domains/system/use-cases';

/* main */
const bindUseCases = (container: Container) => {
  container
    .bind<ViewSystemUseCase>(IDENTIFIERS.ViewSystemUseCase)
    .to(ViewSystemUseCase);
};

/* export */
export { bindUseCases };
