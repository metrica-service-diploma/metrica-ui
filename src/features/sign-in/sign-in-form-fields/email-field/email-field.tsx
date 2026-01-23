import { EMAIL_REGEXP } from "@/constants/regexp";
import type { SignInFormFieldValues } from "@/types/forms";
import { Field, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const EmailField: React.FC = () => {
  const { control } = useFormContext<SignInFormFieldValues>();

  return (
    <Controller
      control={control}
      name="email"
      render={({
        field: { value, onChange, name },
        fieldState: { error, invalid },
      }) => (
        <Field.Root invalid={invalid} required>
          <Field.Label>
            Email <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={value}
            onChange={onChange}
            name={name}
            variant="subtle"
            placeholder="me@example.com"
          />
          {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        </Field.Root>
      )}
      rules={{
        required: "Введите почту",
        pattern: { value: EMAIL_REGEXP, message: "Введите корректную почту" },
        maxLength: { value: 100, message: "Максимум 100 символов" },
      }}
    />
  );
};
