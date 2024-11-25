import * as http from 'http';
import {
  getFilterEpisodes,
  getListEpisodes,
} from './controllers/podcasts-controler';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer(
  async (request: http.IncomingMessage, response: http.ServerResponse) => {
    // server QueryString
    const [baseUrl, queryString] = request.url?.split('?') ?? ['', ''];

    // listar podcast
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
      await getListEpisodes(request, response);
    }

    // filtrar podcast
    if (request.method === HttpMethod.GET && baseUrl === Routes.FILTER) {
      await getFilterEpisodes(request, response);
    }
  }
);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
