import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import LabeledTextInput from "components/molecules/Texts/LabeledTextInput";
import React, { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";

interface IEmailLoginForm {
  email: string;
  password: string;
}
const EmailLoginForm = () => {
  const theme = useTheme();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IEmailLoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: IEmailLoginForm) => {};
  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
  return (
    <BaseView style={{ backgroundColor: theme.headerColor }}>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <LabeledTextInput
            textInputRef={emailInputRef}
            label="메일"
            placeholder="이메일을 입력하세요."
            style={{
              borderColor: theme.headerColor,
              width: 240,
            }}
            containerStyle={{
              backgroundColor: theme.headerColor,
              width: 300,
              marginBottom: 20,
            }}
            size="small"
            onBlur={onBlur}
            keyboardType="email-address"
            returnKeyType="next"
            value={value}
            onChangeText={onChange}
            onSubmitEditing={() => passwordInputRef.current?.focus()}
          />
        )}
        name="email"
      />
      {errors.email && (
        <BaseText size={"small"} style={{ color: "red", marginTop: 10 }}>
          {errors.email.message}
        </BaseText>
      )}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <LabeledTextInput
            textInputRef={passwordInputRef}
            label="PW"
            placeholder="비밀번호를 입력하세요."
            style={{
              borderColor: theme.headerColor,
              width: 240,
            }}
            containerStyle={{
              backgroundColor: theme.headerColor,
              width: 300,
              marginBottom: 5,
            }}
            size="small"
            secureTextEntry={true}
            textContentType="oneTimeCode" // prevent IOS default strong password
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
        name="password"
      />
      {errors.password && (
        <BaseText size={"small"} style={{ color: "red", marginTop: 10 }}>
          {errors.password.message}
        </BaseText>
      )}
    </BaseView>
  );
};

export default EmailLoginForm;
