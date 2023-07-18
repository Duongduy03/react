import { createContext, useState } from "react";
import Message from "../components/message";

type Props = {
  children?: React.ReactNode;
};

export const MessageContext = createContext({} as any);

export default function MessageProvider({ children }: Props) {
  // console.log(children);

  const [message, setMessage] = useState<any>(null);
  // console.log(message);

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {message && <Message content={message} />}
      {children}
    </MessageContext.Provider>
  );
}
