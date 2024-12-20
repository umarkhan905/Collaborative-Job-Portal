import app from "./app.js";
import { env } from "./config/env.config.js";

const port = env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
