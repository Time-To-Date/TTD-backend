export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export type IAccessToken = Pick<ITokens, 'accessToken'>;
export type IRefreshToken = Pick<ITokens, 'refreshToken'>;

export interface IJwtPayload {
  id: number;
}

export interface IJwtPayloadWithRt extends IJwtPayload {
  refreshToken: string;
}
