import { ReactElement } from "react";

import StarActive from "@icon/StarActive";
import StarNotActive from "@icon/StarNotActive";
import MoreDots from "@icon/MoreDots";

const Footer = ({
  liked,
  onLike,
  onMore
}: Props): ReactElement => {
  return (
    <div className="flex flex-row items-center justify-between">
      <button
        type="button"
        className="cursor-pointer"
        onClick={onLike}
        aria-label="like-event-button"
      >
        {liked ? (
          <div className="text-blue">
            <StarActive />
          </div>
        ) : (
          <div>
            <StarNotActive />
          </div>
        )}
      </button>
      <button
        type="button"
        className="cursor-pointer h-24 w-24"
        onClick={onMore}
        aria-label="event-more-actions-button"
      >
        <MoreDots />
      </button>
    </div>
  );
};

interface Props {
  liked: boolean;
  onLike: () => void;
  onMore: () => void;
}

export default Footer;
