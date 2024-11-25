import { PodcastTransferModel } from '../models/filter-podcast-model';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/Status-code';

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const data = await repositoryPodcast();

  if (data.length > 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NotFound;
  }

  responseFormat.body = data;

  return responseFormat;
};
