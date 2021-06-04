// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const SpeechbubblesCommentIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M21 3v11a3 3 0 01-3 3H8.321L3 20.81V3h18zm-2 2H5v11.918L7.679 15H18a1 1 0 001-1V5zM9 9a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2zm3 0a1 1 0 110 2 1 1 0 010-2z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

SpeechbubblesCommentIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default SpeechbubblesCommentIcon;