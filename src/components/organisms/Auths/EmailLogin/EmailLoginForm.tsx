import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import LabeledTextInput from "components/molecules/Texts/LabeledTextInput";
import React, { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";

const EmailLoginForm = () => {
  const theme = useTheme();
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);
  useEffect(() => {
    emailInputRef.current?.focus();
  }, []);
  const focusToPassword = () => passwordInputRef.current?.focus();
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
            onSubmitEditing={focusToPassword}
          />
        )}
        name="email"
      />
      {errors.email && <BaseText>Required</BaseText>}
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
            containerStyle={{ backgroundColor: theme.headerColor, width: 300 }}
            size="small"
            secureTextEntry={true}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
        name="password"
      />
    </BaseView>
  );
};

export default EmailLoginForm;
