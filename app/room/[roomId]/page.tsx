import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import getConversationById from "@/app/actions/getConversationById";
import { useState } from "react";
interface IParams {
  roomId: string;
}
import Header from "./components/Header";
// import Body from "./components/Body";
import Footer from "./components/Footer";
import EmptyState from "@/app/components/EmptyState";

const RoomId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.roomId);

  return (
    <div className="h-full w-full">
      <Header conversation={conversation!} />
      {/* <Body initialMessages={messages} /> */}
      <Footer />
    </div>
  );
};

export default RoomId;
