export default function LazyImage(props) {
  return (
    <img
      alt={props.alt}
      style={props.style}
      src={props.src}
      className={props.class ? props.class : ""}
      {...props}
    />
  );
}
