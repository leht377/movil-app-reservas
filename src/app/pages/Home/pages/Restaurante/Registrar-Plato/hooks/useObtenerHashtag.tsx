import { HashtagEntity } from "@/dominio/entities";
import { hashtagsService } from "@/services/hashtag.services";
import { useEffect, useState } from "react";

const useObtenerHashtag = () => {
  const [hashtag, setHashtag] = useState<HashtagEntity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const obtenerHashtag = async () => {
    try {
      const hashtags = await hashtagsService.obtenerHashtag();
      setHashtag(hashtags);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    obtenerHashtag();
  }, []);

  return { loading, hashtag, obtenerHashtag, refetch: obtenerHashtag };
};

export default useObtenerHashtag;
