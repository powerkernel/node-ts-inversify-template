/**
 * @author Harry Tang <harry@powerkernel.com>
 * @link https://powerkernel.com
 * @copyright Copyright (c) 2021 Power Kernel
 */

import container from "../../../../config/container";
import IDENTIFIERS from "../../../../config/identifiers";
import type ViewSystemController from "../view-system-controller";

it("should execute normally", async () => {
  const controller = container.get<ViewSystemController>(
    IDENTIFIERS.ViewSystemController
  );

  const { data } = await controller.execute();
  expect(data).toHaveProperty("version");
  expect(data).toHaveProperty("node");
  expect(data).toHaveProperty("platform");
  expect(data).toHaveProperty("hostname");
});
