import type { SignUpFormFieldValues } from "@/types/forms";
import { Field, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const UsernameField: React.FC = () => {
  const { control } = useFormContext<SignUpFormFieldValues>();

  return (
    <Controller
      control={control}
      name="username"
      render={({
        field: { value, onChange, name },
        fieldState: { invalid, error },
      }) => (
        <Field.Root invalid={invalid} required>
          <Field.Label>
            Имя пользователя <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={value}
            onChange={onChange}
            name={name}
            variant="subtle"
            placeholder="johndoe"
          />
          {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        </Field.Root>
      )}
      rules={{
        required: "Введите имя пользователя",
        minLength: { value: 3, message: "Минимум 3 символа" },
        maxLength: { value: 100, message: "Максимум 100 символов" },
      }}
    />
  );
};
