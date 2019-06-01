const dotenv = require("dotenv");

dotenv.config(); // configure the env varaible from the .env file

require("./routes/expressHandler");
require("./db/mongoose");
