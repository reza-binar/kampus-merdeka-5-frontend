import Card from "react-bootstrap/Card";

function MessageItem({ data }) {
  return <Card body>{data.message}</Card>;
}

export default MessageItem;
