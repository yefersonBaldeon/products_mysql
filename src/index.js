import app from "./app.js";

import { PORT } from "./config.js";

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
