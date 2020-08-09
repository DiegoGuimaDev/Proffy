import { api } from './api';

export interface GetTotalConnectionsDTO {
  total: number;
}

export function getTotalConnections(): Promise<GetTotalConnectionsDTO> {
  return api.get('connections').then(response => response.data);
}

export interface CreateNewConnectionParams {
  idUser: string;
}

export function createNewConnection({
  idUser,
}: CreateNewConnectionParams): Promise<void> {
  return api.post('connections', { idUser });
}
