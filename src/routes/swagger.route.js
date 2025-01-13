import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import fs from "fs/promises";
import path from "path";

const SWAGGER_FILE_PATH =
  process.env.SWAGGER_FILE_PATH || path.resolve("src", "swagger.json");
const DEFAULT_SWAGGER_DOCUMENT = {
  swagger: "3.0.0",
  info: {
    title: "Wutai News API Documentation",
    version: "1.0.0",
  },
  paths: {},
};

const swaggerRouter = Router();
let cachedSwaggerDocument = null;

const loadSwaggerDocument = async () => {
  if (cachedSwaggerDocument) {
    return cachedSwaggerDocument;
  }

  try {
    await fs.access(SWAGGER_FILE_PATH);
    const fileContent = await fs.readFile(SWAGGER_FILE_PATH, "utf-8");
    cachedSwaggerDocument = JSON.parse(fileContent);
    return cachedSwaggerDocument;
  } catch (error) {
    if (error.code === "ENOENT") {
      console.warn(
        `Swagger file not found at path: ${SWAGGER_FILE_PATH}. Using default documentation.`
      );
    } else {
      console.warn(
        `Failed to load swagger.json from path: ${SWAGGER_FILE_PATH}. Using default documentation.`
      );
      console.error(error);
    }
    cachedSwaggerDocument = DEFAULT_SWAGGER_DOCUMENT;
    return cachedSwaggerDocument;
  }
};

const setupSwaggerUI = async () => {
  const swaggerDocument = await loadSwaggerDocument();
  swaggerRouter.use("/", swaggerUi.serve);
  swaggerRouter.get("/", swaggerUi.setup(swaggerDocument));
};

setupSwaggerUI();

export default swaggerRouter;
