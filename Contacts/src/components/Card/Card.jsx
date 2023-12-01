import { Card } from "flowbite-react";
import { useState } from "react";
import { ContactModal } from "../Modal/Modal";
import './Card.css'

export function ContactCard({ user }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ContactModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        user={user}
      />
      <Card
        onClick={() => setOpenModal(true)}
        className="max-w-sm w-full cursor-pointer hover:scale-110 transition-transform"
      >
        <div className="user-details">
          <img src="/assets/user.png" alt="user" className="icon" />
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {user.name}
          </h2>
        </div>
        <div className="user-details">
          <img src="/assets/phone.png" alt="user" className="icon" />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {user.phone}
          </p>
        </div>
        <div className="user-details">
          <img src="/assets/email.png" alt="user" className="icon" />
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {user.email}
          </p>
        </div>
      </Card>
    </>
  );
}
