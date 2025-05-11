export interface JwtPayload {
  Name: string;
  aud: string;
  Email: string;
  exp: number;
  iss: string;
  sub: string;
}