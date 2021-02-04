export type Tests = [Function, string][];
export type ValidationsTypes =
  | 'policy'
  | 'password'
  | 'confirm'
  | 'petBirthDay'
  | 'petPhoto'
  | 'altPhone'
  | 'default';

export type ConfirmPassword = { password: string; confirm: string; };
export type Validation = { [x: string]: string } | null;
export type ValidationFunction = (
  name: string,
  value: any
) => Validation;