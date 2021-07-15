// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ChevronUpIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path d="M12 10.274l-7 6.175v-2.676l7-6.222 7 6.222v2.676z" fill="currentColor" fillRule="nonzero" />
        </svg>
    );
};

ChevronUpIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ChevronUpIcon;