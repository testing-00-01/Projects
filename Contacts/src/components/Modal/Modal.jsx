import { Modal } from "flowbite-react";
import './Modal.css'

export function ContactModal({ openModal, setOpenModal, user }) {
  return (
    <Modal
      show={openModal}
      size="5xl"
      onClose={() => setOpenModal(false)}
      popup
      dismissible
    >
        <Modal.Header />
        <div className="modal-body-container">
          <Modal.Body className="flex gap-10 justify-around modal-body">
            <div className="object-cover">
              <img
                src={`/avatar-${Math.floor(Math.random() * 4 + 1)}.png`}
                alt="contact-profile-pic"
                className="w-80 h-42 modal-image"
              />
            </div>
            <section id="user-details-container">
              <div className="user-details">
                <img src="/assets/user.png" alt="user" className="icon" />
                <h5>{user.name}</h5>
              </div>
              <div className="user-details">
                <img src="/assets/phone.png" alt="phone" className="icon" />
                <h5>{user.phone}</h5>
              </div>
              <div className="user-details">
                <img src="/assets/email.png" alt="email" className="icon" />
                <h5>{user.email}</h5>
              </div>
              <div className="user-details">
                <img src="/assets/address.png" alt="address" className="icon" />
                <h5>{`${user.address.street}, ${user.address?.suite}, ${user.address?.city} ${user.address?.zipcode}`}</h5>
              </div>
              <div className="user-details">
                <img src="/assets/website.png" alt="website" className="icon" />
                <h5>{user.website}</h5>
              </div>
              <div className="user-details">
                <img src="/assets/company.png" alt="company" className="icon" />
                <h5>{user.company.name}</h5>
              </div>
            </section>
          </Modal.Body>
        </div>
    </Modal>
  );
}
