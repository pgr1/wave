import React, { useState } from 'react';
import { Tag } from '../Tag';

const DismissibleTag = () => {
    const [visible, setVisible] = useState(true);

    return (
        <>
            {visible && <Tag onDismiss={() => setVisible(false)}>Filter</Tag>}
            {!visible && <button onClick={() => setVisible(true)}>Show again</button>}
        </>
    );
};

export { DismissibleTag };
