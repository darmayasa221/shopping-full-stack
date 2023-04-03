import app from "./Infrastructures/http/createServer";

const PORT: number = 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`listen on port ${PORT}`);
});
