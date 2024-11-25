import { repositoryPodcast } from '../repositories/podcasts-repository';
import { IncomingMessage } from 'http';

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {
  const queryString = podcastName?.split('?p=')[1] ?? '';

  const data = await repositoryPodcast(queryString);

  return data;
};
