/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

/* local imports */
import { ViewSystemInterRepo } from '..';

it('should return the system info', () => {
  const repo = new ViewSystemInterRepo();
  const result = repo.viewInfo();
  expect(result).toHaveProperty('version');
  expect(result).toHaveProperty('hostname');
  expect(result).toHaveProperty('node');
  expect(result).toHaveProperty('platform');
});
