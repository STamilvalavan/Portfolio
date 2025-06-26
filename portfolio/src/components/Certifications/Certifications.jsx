import React, { useState } from 'react';
import './Certifications.css';
import { FaCertificate } from 'react-icons/fa';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certifications = [
    {
      name: 'Cybersecurity and Privacy',
      issuer: 'NPTEL',
      pdf: '/certificates/Cyber Security and Privacy.pdf',
    },
    {
      name: 'Frontend development and CSS',
      issuer: 'Great Learning',
      pdf: '/certificates/frontend-css.pdf',
    },
    {
      name: 'Introduction to Python',
      issuer: 'Great Learning',
      pdf: '/certificates/python-intro.pdf',
    },
    {
      name: 'Ethical hacking for Beginners',
      issuer: 'Cappricio Securities',
      pdf: '/certificates/ethical-hacking.pdf',
    },
  ];

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-item">
            <FaCertificate className="certification-icon" />
            <h3>{cert.name}</h3>
            <p className="issuer">{cert.issuer}</p>
            <button onClick={() => openModal(cert)} className="certification-link">
              View Certificate
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Certificate Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedCertificate && (
          <div>
            <h2>{selectedCertificate.name}</h2>
            <p>Issuer: {selectedCertificate.issuer}</p>
            <iframe
              src={selectedCertificate.pdf}
              width="100%"
              height="500px"
              title="Certificate"
              style={{ border: 'none' }}
            />
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Certifications;