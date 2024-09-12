import { EditProfileFormValues } from "../../../../../types";
import { useFormik, FormikHelpers } from "formik";
import strings from "../../../../../localization";
import * as Yup from "yup";
import { useRef } from "react";
import validations from "../../../../../utlis/validations";

interface UseFormProps {
    initialValues: EditProfileFormValues;
    onSubmit: (
        values: EditProfileFormValues,
        formikHelpers: FormikHelpers<EditProfileFormValues>
    ) => void;
}

const useEditForm = ({ initialValues, onSubmit }: UseFormProps) => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema: Yup.object({
            fullName: Yup.string()
                .required(`Name ${strings.error.isRequired}`)
                .trim()
                .min(2, strings.error.nameLength),
            email: Yup.string()
                .required(`Email ${strings.error.isRequired}`)
                .trim()
                .email(strings.error.invalid_email),
            phoneNumber: Yup.string()
                .required(`Phone number ${strings.error.isRequired}`)
                .min(10, strings.error.phoneNumberLength),
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

    const setFieldValue = (field: keyof EditProfileFormValues, value: string) => {
        if (field == 'profileImg') {
            formik.setFieldValue(field, value);
            return
        }
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

export default useEditForm;
