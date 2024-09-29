import { useState } from 'react';

const useModal = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return { isModalOpen, setModalOpen };
};

export default useModal;
