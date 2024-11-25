import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controler';
import { Routes } from './routes/routes';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // server QueryString
    const [baseUrl, queryString] = req.url?.split('?') ?? ['', ''];

    // listar podcast
    if (req.method === 'GET' && baseUrl === Routes.LIST) {
      await getListEpisodes(req, res);
    }

    // filtrar podcast
    if (req.method === 'GET' && baseUrl === Routes.FILTER) {
      await getFilterEpisodes(req, res);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
