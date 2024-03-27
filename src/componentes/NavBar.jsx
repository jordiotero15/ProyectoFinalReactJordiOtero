import React, { useState } from 'react';
import { AppstoreOutlined, SettingOutlined, ProductOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { HomeIcon } from 'lucide-react';
const items = [
    {
        label: 'Inicio',
        icon: <HomeIcon />,
    },
    {
        label: 'Productos',
        key: 'SubMenu',
        icon: <ProductOutlined />,
        children: [
            {
                type: 'group',
                label: 'Proteinas',
                children: [
                    {
                        label: 'Whey Protein',
                        key: 'setting:1',
                    },
                    {
                        label: 'Proteína Vegana',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Aminoácidos',
                children: [
                    {
                        label: 'BCAA',
                        key: 'setting:3',
                    },
                    {
                        label: 'Animal Pack',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
        key: 'alipay',
    },
];
const NavBar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    );
};
export default NavBar;