/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from "../../../../config/container";
import IDENTIFIERS from "../../../../config/identifiers";
import type ViewSystemAction from "../view-system-action";

it("should return the system info", async () => {
  const useCase = container.get<ViewSystemAction>(IDENTIFIERS.ViewSystemAction);
  const result = await useCase.execute();
  expect(result).toHaveProperty("version");
  expect(result).toHaveProperty("node");
  expect(result).toHaveProperty("platform");
});
