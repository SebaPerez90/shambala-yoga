import server from "./src/server";

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
