import type { CreateWebsiteFieldValues } from "@/types/forms";
import { Field, Input } from "@chakra-ui/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export const DomainField: React.FC = () => {
  const { control } = useFormContext<CreateWebsiteFieldValues>();

  return (
    <Controller
      control={control}
      name="domain"
      render={({
        field: { value, onChange, name },
        fieldState: { error, invalid },
      }) => (
        <Field.Root invalid={invalid} required>
          <Field.Label>
            Домен <Field.RequiredIndicator />
          </Field.Label>
          <Input
            value={value}
            onChange={onChange}
            name={name}
            variant="subtle"
            placeholder="www.example.com"
          />
          {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
        </Field.Root>
      )}
      rules={{
        required: "Введите домен",
        maxLength: { value: 100, message: "Максимум 100 символов" },
      }}
    />
  );
};
