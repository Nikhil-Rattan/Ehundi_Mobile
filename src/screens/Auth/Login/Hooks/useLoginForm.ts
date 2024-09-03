import { LoginFormValues } from "../../../../types";
import { useFormik, FormikHelpers } from "formik";
import strings from "../../../../localization";
import * as Yup from "yup";
import { useRef } from "react";
import validations from "../../../../utlis/validations";

interface UseFormProps {
  initialValues: LoginFormValues;
  onSubmit: (
    values: LoginFormValues,
    formikHelpers: FormikHelpers<LoginFormValues>
  ) => void;
}

const useLoginForm = ({ initialValues, onSubmit }: UseFormProps) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      email: Yup.string()
        .required(`Email ${strings.error.isRequired}`)
        .trim()
        .email(strings.error.invalid_email),
      password: Yup.string()
        .required(`Password ${strings.error.isRequired}`)
        .trim()
        .min(8, strings.error.passwordLength)
        .matches(validations.password, strings.error.paswordRegex),
    }),
    validateOnBlur: false,
    validateOnChange: false,
  });

  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const setFieldValue = (field: keyof LoginFormValues, value: string) => {
    formik.setFieldValue(field, value);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      formik.validateField(field);
    }, 500);
  };

  return {
    formik,
    setFieldValue,
  };
};

export default useLoginForm;
