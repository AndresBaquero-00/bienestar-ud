import { useState } from "react";

export const useForm = <T>(initialForm: T) => {
    const [formState, setFormState] = useState(initialForm);

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const onInputChange = (event?: any) => {
        const { target } = event;
        const { name, value } = target;
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