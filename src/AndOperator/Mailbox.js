function MailBox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </>
  );
}

export default MailBox;
