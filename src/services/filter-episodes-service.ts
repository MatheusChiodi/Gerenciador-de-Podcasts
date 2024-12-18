import { PodcastTransferModel } from '../models/podcast-transfer-model';
import { repositoryPodcast } from '../repositories/podcasts-repository';
import { StatusCode } from '../utils/Status-code';

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  const queryString = podcastName?.split('?p=')[1] ?? '';
  const data = await repositoryPodcast(queryString);

  if (data.length > 0) {
    responseFormat.statusCode = StatusCode.OK;
  } else {
    responseFormat.statusCode = StatusCode.NotFound;
  }

  responseFormat.body = data;

  return responseFormat;
};
