import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

export default function FormTest({
  onSubmit = async (data: FieldValues) => {
    await new Promise(r => setTimeout(r, 1000));
    alert(JSON.stringify(data));
  },
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();

  // console.log(watch('email'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">이메일</label>
      <input
        id="email"
        type="text"
        placeholder="test@email.com"
        aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
        {...register('email', {
          required: '이메일은 필수 입력입니다.',
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: '이메일 형식에 맞지 않습니다.',
          },
        })}
      />
      {errors.email && <small role="alert">{errors.email.message as string}</small>}
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        placeholder="****************"
        aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
        {...register('password', {
          required: '비밀번호는 필수 입력입니다.',
          minLength: {
            value: 8,
            message: '8자리 이상 비밀번호를 사용하세요.',
          },
        })}
      />
      {errors.password && <small role="alert">{errors.password.message as string}</small>}
      <button type="submit" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
}
