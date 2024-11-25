import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controler';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // listar podcast
    if (req.method === 'GET' && req.url === '/api/list') {
      await getListEpisodes(req, res);
    }

    // filtrar podcast
    if (req.method === 'GET' && req.url === '/api/filter') {
      await getFilterEpisodes(req, res);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
