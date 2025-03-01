import React from 'react';
import { Colors } from '../../essentials';
import { IconProps } from '../IconProps';
import { withDeprecatedMessage } from '../../utils/withDeprecatedMessage';
import PlaneIcon from '../options/PlaneIcon';
type Props = IconProps;

const AirportIcon: React.FC<Props> = withDeprecatedMessage('AirportIcon', PlaneIcon);

AirportIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default AirportIcon;
