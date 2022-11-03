import { useState, ChangeEvent } from "react";

export const useForm = <T>(initialForm: T) => {
    const [formState, setFormState] = useState(initialForm);

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const onInputChange = ({ currentTarget }: ChangeEvent<HTMLInputElement>, isFile?: boolean) => {
        if (isFile) {
            const { name, files } = currentTarget;
            setFormState({
                ...formState,
                [name]: files?.item(0)
            });

            return;
        }

        const { name, value } = currentTarget;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return {
        formState,
        onInputChange,
        onResetForm,
    }
}