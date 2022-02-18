/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import { System } from '..';

it('should return a json object', () => {
  const doc = {
    version: '1.2.3',
    hostname: 'some.server.com',
    platform: 'MacOS',
    node: '16 LTS',
  };
  const system = System.create(doc);

  expect(system.jsonify()).toEqual(doc);
});
