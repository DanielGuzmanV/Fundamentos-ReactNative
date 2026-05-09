import { coincapApi } from "../api/coincap";

// Funcio para obtener los activos
export const getCoincapAssets = async (assetIds: string[]) => {
  const response = await coincapApi.get('/assets', {
    params: {
      ids: assetIds.join(','),
      limit: assetIds.length,
    },
  });
  return response.data.data;
}