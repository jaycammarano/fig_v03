import React from 'react';
interface IError {
  message: string;
}
export const ErrorMessage: React.FC<IError> = ({ message }) => {
  return <div>{message}</div>;
};
