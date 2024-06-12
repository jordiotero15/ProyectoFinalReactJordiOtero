import { createContext } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = (props) => {

    const navigation = [
        {
            name: "inicio",
            id: 1
        },
        {
            name: "productos",
            id: 2,
            children: [
                {
                    name: "proteinas",
                    category: "proteinas",
                    id: 2.1
                },
                {
                    name: "aminoacidos",
                    category: "aminoacidos",
                    id: 2.2
                },
                {
                    name: "vitaminas",
                    category: "vitaminas",
                    id: 2.3
                }
            ]
        },
        {
            name: "contacto",
            id: 3
        },
        {
            name: "ayuda",
            id: 4
        }
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const valores = {
        navigation,
        classNames
    };

    return (
        <NavigationContext.Provider value={valores}>
            {props.children}
        </NavigationContext.Provider>
    );

}