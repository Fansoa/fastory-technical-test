import { ICONS_MAP } from "./constants";
import { IconByResourceTypeProps } from "./types";

const IconByResourceType = ({resourceType}: IconByResourceTypeProps) => {
    return ICONS_MAP[resourceType] || null
}

export default IconByResourceType
