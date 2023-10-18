import BaseText from "components/atoms/Texts/BaseText";
import BaseView from "components/atoms/View/BaseView";
import LabeledTextInput from "components/molecules/Texts/LabeledTextInput";
import React, { useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { TextInput } from "react-native";
import { useTheme } from "styled-components";

interface IEmailLoginForm {
  email: string;
  password1: string;
  password2: string;
}
const EmailLoginForm = () => {
  const theme = useTheme();
  const emailInputRef = useRef<TextInput>(null);
  const password1InputRef = useRef<TextInput>(null);
  const password2InputRef = useRef<TextInput>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailLoginForm>({
    defaultValues: {
      email: "",
      password1: "",
      password2: "",
    },
  });
  const onSubmit = (data: IEmailLoginForm) => {
    console.log("Exec");
  };
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
            onSubmitEditing={() => password1InputRef.current?.focus()}
          />
        )}
        name="email"
      />
      {errors.email && <BaseText>{errors.email.message}</BaseText>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <LabeledTextInput
            textInputRef={password1InputRef}
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
            onSubmitEditing={() => password2InputRef.current?.focus()}
          />
        )}
        name="password1"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <LabeledTextInput
            textInputRef={password2InputRef}
            label=""
            placeholder="비밀번호 확인"
            style={{
              borderColor: theme.headerColor,
              width: 240,
            }}
            containerStyle={{ backgroundColor: theme.headerColor, width: 300 }}
            size="small"
            textContentType="oneTimeCode"
            secureTextEntry={true}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            onSubmitEditing={handleSubmit(onSubmit)}
          />
        )}
        name="password2"
      />
    </BaseView>
  );
};

export default EmailLoginForm;
