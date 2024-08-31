import { envs } from "@/common/config/envs";
import { HashtagEntity } from "@/dominio/entities";
import axios from "axios";

const API_URL = envs.API_URL;

const obtenerHashtag = async (): Promise<HashtagEntity[]> => {
  try {
    const response = await axios.get(`${API_URL}/hashtag`);
    const hashtags = response.data.map(
      (hashtag: { id: string; nombre: string }) =>
        new HashtagEntity(hashtag.id, hashtag.nombre)
    );
    return hashtags;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const hashtagsService = {
  obtenerHashtag,
};
