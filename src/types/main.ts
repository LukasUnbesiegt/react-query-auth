import {
  QueryKey,
  QueryFunction,
  MutationFunction,
} from '@tanstack/react-query';

export interface ReactQueryAuthConfig<
  User,
  LoginCredentials,
  RegisterCredentials
> {
  userFn: QueryFunction<User, QueryKey>;
  loginFn: MutationFunction<User, LoginCredentials>;
  registerFn: MutationFunction<User, RegisterCredentials>;
  logoutFn: MutationFunction<unknown, unknown>;
  userKey?: QueryKey;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
