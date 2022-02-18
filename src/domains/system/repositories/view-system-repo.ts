/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* local imports */
import { SystemDto } from '../dtos';

interface ViewSystemRepo {
  viewInfo(): SystemDto;
}

export default ViewSystemRepo;
