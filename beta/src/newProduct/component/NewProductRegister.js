import React from 'react';

const NewProductRegister = () => {

    const[newProductRegister, setNewProductRegister] = useState({
        title: '',
        writer: '',
        mainPricture: '',
        price: '',
    })

    const [title. writer, mainPricture, content, price] = newProductRegister

    const handleChange = useCallback(
        (e) => {
            const { value, name } = e.target.value;
            setNewProductRegister({
                ...newProductRegister,
                [name]: value,
            })
        },
        [newProductRegister]
    )

    return <></>;
};
export default NewProductRegister;
