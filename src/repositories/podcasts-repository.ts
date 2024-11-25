import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcast-model';

// Ajuste o caminho para o JSON
const pathData = path.resolve(
  __dirname,
  '../../src/repositories/podcasts.json'
);

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  try {
    const language = 'utf-8';

    const rawData = await fs.promises.readFile(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
      jsonFile = jsonFile.filter(
        (podcast: PodcastModel) => podcast.podcastName === podcastName
      );
    }

    return jsonFile;
  } catch (error) {
    throw error;
  }
};
