export type Tokens = {
  access_token: string;
  refresh_token: string;
};

export type JwtPayload = {
  userId: string;
  email: string;
};
