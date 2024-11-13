import * as http from 'http';
import { getListEpisodes } from './controllers/podscasts-controler';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === 'GET') {
      await getListEpisodes(req, res);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
