import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controler';

const server = http.createServer(
  async (req: http.IncomingMessage, res: http.ServerResponse) => {
    // server QueryString
    const [baseUrl, queryString] = req.url?.split('?') ?? ['', ''];

    // listar podcast
    if (req.method === 'GET' && baseUrl === '/api/list') {
      await getListEpisodes(req, res);
    }

    // filtrar podcast
    if (req.method === 'GET' && baseUrl === '/api/filter') {
      await getFilterEpisodes(req, res);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
