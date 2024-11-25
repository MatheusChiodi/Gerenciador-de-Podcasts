import { IncomingMessage, ServerResponse } from 'http';

import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from '../services/filter-episodes-service';
import { StatusCode } from '../utils/Status-code';
import { ContentType } from '../utils/content-type';

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceListEpisodes();

  res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterEpisodes(req.url);

  res.writeHead(200, { 'Content-Type': ContentType.JSON });
  res.end(JSON.stringify(content));
};
