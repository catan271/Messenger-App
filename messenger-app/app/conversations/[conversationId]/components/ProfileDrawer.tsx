"use client";

import { Fragment, useMemo, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose, IoTrash } from "react-icons/io5";
import { Conversation, User } from "@prisma/client";
import { format } from "date-fns";

import useOtherUser from "@/app/hooks/useOtherUser";
// import useActiveList from "@/app/hooks/useActiveList"

import Avatar from "@/app/components/Avatar";
// import AvatarGroup from '@/app/components/AvatarGroup'
import ConfirmModal from "./ConfirmModal";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: Conversation & {
    users: User[];
  };
}

const ProfileDrawer: React.FC<ProfileDrawerProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const otherUser = useOtherUser(data);

  const joinedDate = useMemo(() => {
    return format(new Date(otherUser.createdAt), "PP");
  }, [otherUser.createdAt]);

  const title = useMemo(() => {
    return data.name || otherUser.name;
  }, [data.name, otherUser.name]);

  // const { members } = useActiveList();
  // const isActive = members.indexOf(otherUser?.email) !== -1;

  // const statusText = useMemo(() => {
  //   if (data.isGroup) {
  //     return `${data.users.length} members`;
  //   }
  //   return isActive ? "Đang hoạt động" : "Ngoại tuyến";
  // }, [data, isActive]);

  return (
    <>
      <ConfirmModal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
      />
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.child
              </div>
              </div>
            </div>
      </Transition.Root>
    </>
  );
};

export default ProfileDrawer;
