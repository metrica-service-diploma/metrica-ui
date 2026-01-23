import { PasswordInput } from "@/components/ui/password-input";
import type { SignUpFormFieldValues } from "@/types/forms";
import { Field } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const PasswordField: React.FC = () => {
  const { control } = useFormContext<SignUpFormFieldValues>();

  return (
    <Controller
      control={control}
      name="password"
      render={({
        field: { value, onChange, name },
        fieldState: { invalid, error },
      }) => (
        <Field.Root invalid={invalid} required>
          <Field.Label>
            Пароль <Field.RequiredIndicator />
          </Field.Label>
          <PasswordInput
            value={value}
            onChange={onChange}
            name={name}
            variant="subtle"
            placeholder="********"
          />
          {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        </Field.Root>
      )}
      rules={{
        required: "Введите пароль",
        minLength: { value: 8, message: "Минимум 8 сиволов" },
        maxLength: { value: 100, message: "Максимум 100 символов" },
      }}
    />
  );
};
