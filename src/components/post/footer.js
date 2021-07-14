import PropTypes from "prop-types";
export default function Footer({ caption, username }) {
  return (
    <div classname="p-4 pt-2 pb-1">
      <span classname="mr-1 font-bold">{username}</span>
      <span classname="italic">{caption}</span>
    </div>
  );
}

Footer.prototype = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};
