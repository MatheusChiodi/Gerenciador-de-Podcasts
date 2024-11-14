import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcast-model';

// Ajuste o caminho para o JSON
const pathData = path.resolve(__dirname, '../../src/repositories/podcasts.json');

export const repositoryPodcast = async (): Promise<PodcastModel[]> => {
  try {
    const rawData = await fs.promises.readFile(pathData, 'utf-8');
    const jsonFile = JSON.parse(rawData);
    
    return jsonFile;
  } catch (error) {
    throw error;
  }
};
